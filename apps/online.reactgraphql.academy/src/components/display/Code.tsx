import React, { useRef, useEffect, FunctionComponent } from 'react';
import Prism from 'prismjs';
import styled from 'styled-components';

interface PrismCodeProps {
  children: JSX.Element;
  plugins?: string[];
  language: string;
  className?: string;
}

const PrismCode = ({
  children,
  plugins,
  language,
  className,
}: PrismCodeProps) => {
  const ref = useRef();
  useEffect(() => {
    if (ref && ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, [ref, children, plugins, language, className]);

  return (
    <pre className={`${className} ${!plugins ? '' : plugins.join(' ')}`}>
      <code ref={ref} className={`language-${language}`}>
        {children}
      </code>
    </pre>
  );
};

const Code = styled(PrismCode)`
  background: #272822;
  color: white;
  padding: 1em;
  margin: 0.5em 0;
  border-radius: 0.3em;
  font-size: smaller !important;
`;

export default Code;
