/* eslint-disable @typescript-eslint/no-var-requires */
import React, { createContext, useContext } from 'react';
import { Sema } from 'async-sema';

const MagicContext = createContext(null);

const REQUIRE_SIGNUP = 'REQUIRE_SIGNUP';
const LOGGED_OUT = 'LOGGED_OUT';
const RECEIVE_LOGIN_RESPONSE = 'RECEIVE_LOGIN_RESPONSE';
const SET_LOADING = 'SET_LOADING';
const CLEAR_REQUIRE_SIGNUP = 'CLEAR_REQUIRE_SIGNUP';

const initialState = {
  loading: true,
  loggedIn: false,
};

const ONE_MINUTE = 1000 * 60;

let currentToken = null;
let magic;
const tokenSema = new Sema(1);

function setToken(token, lifespan = ONE_MINUTE * 15) {
  currentToken = {
    token,
    expiredAt: Date.now() + lifespan - ONE_MINUTE,
  };
}

function magicReducer(state, action) {
  switch (action.type) {
    case REQUIRE_SIGNUP:
      return {
        ...state,
        loading: false,
      };
    case CLEAR_REQUIRE_SIGNUP:
      return {
        ...state,
      };
    case LOGGED_OUT:
      return { ...initialState, loading: false };
    case RECEIVE_LOGIN_RESPONSE:
      console.log('cccc 3');
      return {
        ...state,
        loading: false,
        loggedIn: action.loggedIn,
      };
    case SET_LOADING:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
}

export function MagicProvider({ children, requirePreSignup, login: myLogin }) {
  const [user, dispatch] = React.useReducer(magicReducer, initialState);
  console.log('cccc 1');
  React.useEffect(() => {
    // magic-sdk v2.5.1 breaks on SSR so we need to require it here
    const { Magic } = require('magic-sdk');
    magic = new Magic(process.env.GATSBY_MAGIC_LINK_PK_KEY);
    async function iniState() {
      const loggedIn = await magic.user.isLoggedIn();
      dispatch({ type: RECEIVE_LOGIN_RESPONSE, loggedIn });
      console.log('cccc 2');
    }

    iniState();
  }, []);

  async function getToken() {
    console.log('cccc 4', user);
    if (!user.loggedIn) return;
    // if (!(await magic.user.isLoggedIn())) return;

    await tokenSema.acquire();
    try {
      if (currentToken && currentToken.expiredAt > Date.now()) {
        return currentToken.token;
      }

      const token = await magic.user.getIdToken();
      setToken(token);

      return token;
    } finally {
      tokenSema.release();
    }
  }

  const contextValue = {
    ...user,
    dispatch,
    requirePreSignup,
    getToken,
    myLogin,
  };

  return (
    <MagicContext.Provider value={contextValue}>
      {typeof children === 'function' ? children(contextValue) : children}
    </MagicContext.Provider>
  );
}

export function useMagic() {
  const context = useContext(MagicContext);

  if (!context) {
    throw new Error(`A MagicProvider is required up in the component tree`);
  }

  const {
    loggedIn,
    dispatch,
    loading,
    requirePreSignup,
    getToken,
    myLogin,
  } = context;

  const login = async ({ email }) => {
    dispatch({ type: SET_LOADING, loading: true });

    const signup = requirePreSignup && (await requirePreSignup(email));

    if (signup) {
      dispatch({ type: REQUIRE_SIGNUP, email });
    } else {
      const token = await magic.auth.loginWithMagicLink({ email });
      if (token) {
        if (myLogin) {
          await myLogin(token);
        }
        setToken(token);
        dispatch({ type: RECEIVE_LOGIN_RESPONSE, loggedIn: !!token });
      }

      return token;
    }
  };

  const logout = async () => {
    dispatch({ type: SET_LOADING, loading: true });
    await magic.user.logout();
    currentToken = null;
    dispatch({ type: LOGGED_OUT });
  };

  return {
    loggedIn,
    getToken,
    loading,
    login,
    logout,
    magic,
  };
}

export const withMagic = (Component) => (props) => {
  const magicProps = useMagic();

  return <Component {...props} {...magicProps} />;
};
