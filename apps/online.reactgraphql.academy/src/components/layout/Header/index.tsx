import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Container, Box, BoxProps, Ul, Li, Grid } from '..';
import { H1 } from '../../display';
import Link from '../../navigation/Link';

const Z_INDEX_BG = -2;
const SCREEN_SM_MIN = '768px';
const SCREEN_XS_MAX = '767px';
const WHITE = '#fff';
export const TECH_REACT = 'react';
export const TECH_GRAPHQL = 'graphql';

interface BackgroundProps {
  height?: string;
  bgColor?: string;
  bgColors?: string[];
  bgImage?: string;
  bgImageOpacity?: number;
}

const Section = styled<FunctionComponent<BackgroundProps>>(Box)`
  position: relative;
  display:block;
  ${({ bgColors, bgColor }: any) => {
    const bgc =
      bgColors && bgColors.length ? bgColors : bgColor ? [bgColor] : [];

    return (
      bgc.length &&
      `
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: ${Z_INDEX_BG};
      ${
        bgc.length > 1
          ? `background-image: linear-gradient(to bottom right,${bgc.join()});`
          : bgc.length === 1
          ? `
          background-color: ${bgc[0]};
          opacity: 0.6;`
          : ''
      }
      
    }
    `
    );
  }}
  
  ${({ bgImage, bgImageOpacity = '0.5' }: any) => `
    @media (min-width: ${SCREEN_SM_MIN}) {
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: ${Z_INDEX_BG};
        ${
          bgImage
            ? `
          background-image: url(${bgImage}); 
          background-repeat: no-repeat; 
          background-size: cover;
          background-position: center;
          opacity: ${bgImageOpacity};
          `
            : ''
        }
      }
    }
  `}
  
  @media (min-width: ${SCREEN_SM_MIN}) {
    min-height: ${({ height }) => (height ? height : '100vh')};
    padding-top: 200px ;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    padding-top: 160px;
    padding-bottom: 100px;
  }
`;

export interface BackgroundImageProps {
  src?: string;
  top?: string;
  bottom?: string;
  left?: string;
  // right?: string; TODO use viewBox of the SVG for this
  opacity?: number;
  children?: JSX.Element;
}

export const HeaderBgImage = styled('div')<BackgroundImageProps>`
  ${({ src, top, bottom, left = null, opacity = 0.6 }: any) =>
    src &&
    `
  &:after {
    content: '';
    position: absolute;
    ${top ? `top:${top};` : ''}
    ${bottom ? `bottom:${bottom};` : ''}
    ${left ? `left:${left};` : ''}
    z-index: ${Z_INDEX_BG};
    background-image: ${src};
    opacity:${opacity};
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    width: 100%;
    height: 130%;
  }
`};
`;

const textBackgroundProps = {
  color: WHITE,
  bg: 'rgba(0, 41, 56, 0.75)',
  boxDecorationBreak: 'clone',
  whiteSpace: 'pre-wrap',
  display: 'inline',
};

interface HeaderProps {
  title: string;
  subtitle?: string;
  bgColors?: string[];
  bgImage?: string;
  bgImageOpacity?: number;
  links?: {
    text: string;
    to: string;
  }[];
  height?: string;
  info?: JSX.Element;
}

const Header: FunctionComponent<HeaderProps> = ({
  title,
  subtitle,
  bgColors,
  bgImage,
  bgImageOpacity,
  height,
  links,
  info,
}) => {
  return (
    <Section
      height={height}
      bgColors={bgColors}
      bgImageOpacity={bgImageOpacity}
      bgImage={bgImage}
    >
      <Container>
        <Grid columns={12}>
          <Box
            sx={{
              gridColumn: ['1 / -1', '1 / 7'],
            }}
          >
            <H1
              sx={{
                ...textBackgroundProps,
                fontSize: 6,
                fontWeight: 'bold',
                lineHeight: 1.6,
                px: 3,
                py: 2,
              }}
            >
              {title}
            </H1>
            {subtitle && (
              <>
                <br />
                <Box
                  as="h2"
                  sx={{
                    ...textBackgroundProps,
                    lineHeight: 1.88,
                    px: 3,
                    py: 2,
                  }}
                >
                  {subtitle}
                </Box>
              </>
            )}

            {links && links.map && (
              <Box
                as="nav"
                sx={{
                  bg: 'rgba(0, 41, 56, 0.75)',
                  mt: 2,
                  'li,a:hover,a:link,a:visited,a:active': { color: WHITE },
                  display: 'inline-block',
                }}
              >
                <Ul variant="inline">
                  <Li>On this page:</Li>
                  {links.map(({ to, text }, i) => (
                    <Li key={i}>
                      <Link
                        className="on-this-page"
                        to={to[0] !== '#' && !to.match('^http') ? `#${to}` : to}
                      >
                        {text}
                      </Link>
                    </Li>
                  ))}
                </Ul>
              </Box>
            )}
          </Box>

          {info && (
            <Box
              sx={{
                gridColumn: ['1 / -1', '7 / -2'],
              }}
            >
              {info}
            </Box>
          )}
        </Grid>
      </Container>
    </Section>
  );
};

export default Header;
