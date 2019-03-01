import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Section from './Section'
import Grid, { Col, Row } from './Grid'
import Ul, { Li } from './Ul'
import { H1 as BaseH1, H2 as BaseH2, Span, P } from '../text'
import {
  blue1,
  blue2,
  WHITE,
  reactBlue,
  FONT_FAMILY,
  TEXT_SIZE,
} from '../../config/styles'
import { SCREEN_SM_MIN, SCREEN_SM_MAX, SCREEN_XS_MAX } from '../utils'
import Link, { styleChildLinkColor } from '../navigation/Link'
import {
  HOME_IMG,
  PART_TIME_IMG,
  FULL_TIME_IMG,
  TRAINING_EVENT_IMG,
  CURRICULUM_IMG,
  COMMUNITY_IMG,
  CORP_TRAINING_HEADER_IMG,
  SMALL_CLASSROOM,
} from '../../config/images'
import { Z_INDEX_BG } from '../../config/styles'
import { selectTypeColor } from '../utils/index.js'
import { Card, Image } from '../elements'

const H1 = styled(BaseH1)`
  margin-bottom: 0;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${WHITE};
  text-shadow: 1px -1px 17px ${reactBlue(0.4)};
  @media (max-width: ${SCREEN_SM_MAX}) {
    font-size: 58px;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    font-size: 40px;
  }
`

const HEADER_SUBSECTION_PADDING_LEFT_RIGHT = `
  @media (min-width: ${SCREEN_SM_MIN}) {
    padding-left: 16px;
    padding-right: 16px;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    padding-left: 8px;
    padding-right: 8px;
  }
`

const backgroundImg = css`
  ${({ bgImg }) => {
    switch (bgImg) {
      case 'home':
        return `background-image: url(${HOME_IMG});`
      case 'part-time':
        return `background-image: url(${PART_TIME_IMG});`
      case 'full-time':
        return `background-image: url(${FULL_TIME_IMG});`
      case 'training-event':
        return `background-image: url(${TRAINING_EVENT_IMG});`
      case 'about-us':
        return `background-image: url(${PART_TIME_IMG});`
      case 'curriculum':
        return `background-image: url(${CURRICULUM_IMG});`
      case 'community':
        return `background-image: url(${COMMUNITY_IMG});`
      case 'corp-training':
        return `background-image: url(${CORP_TRAINING_HEADER_IMG});`
      default:
        return `background-image: url(${bgImg});`
    }
  }};
`
const HeaderSection = styled(Section)`
  ${({ bgImg }) =>
    bgImg === 'home' &&
    `background-color: ${reactBlue(0.4)};`} position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${Z_INDEX_BG};
    background-image: url(${PART_TIME_IMG});
    ${backgroundImg} background-repeat: no-repeat;
    background-size: cover;
  }
  @media (min-width: ${SCREEN_SM_MIN}) {
    height: ${({ fullHeight }) => (fullHeight !== false ? '100vh' : '')};
    min-height: ${({ fullHeight }) =>
      fullHeight === false ? 'auto' : '800px'};
    padding-bottom: ${({ paddingBottom = '200' }) =>
      paddingBottom}px !important;
    padding-top: 200px !important;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    padding-top: 150px;
  }
`
HeaderSection.displayName = 'HeaderSection'

const H2Header = styled(BaseH2)`
  padding: 0 !important;
  margin: 0 !important;
  font-size: 24px !important;
  color: ${WHITE};
  font-weight: normal;
  text-shadow: 1px -1px 17px ${reactBlue(0.4)};
`

const TITLE_BACKGROUND = `
  background-color: ${blue1(0.75)};
  display: table;
  ${HEADER_SUBSECTION_PADDING_LEFT_RIGHT};
`
const TitleBackground = styled.span`
  &:first-child  {
    padding-top: 15px;
  }
  &:last-child {
    padding-bottom: 20px;
  }
  ${TITLE_BACKGROUND};
`
TitleBackground.displayName = 'TitleBackground'

const SubTitleBackground = styled.div`
  ${TITLE_BACKGROUND} padding: 16px;
  a {
    color: ${WHITE};
  }
  ul {
    margin-top: 20px;
  }
`

const Nav = styled.div`
  ${FONT_FAMILY}
  ${TEXT_SIZE({ lg: true })}
  ${HEADER_SUBSECTION_PADDING_LEFT_RIGHT}
  background-color: ${props => (props.quickLinks ? blue1(0.75) : blue2(0.9))};
  color: ${WHITE};
  ${styleChildLinkColor(WHITE)}
  padding-top: 8px
  padding-bottom: 8px;
  margin-top:36px;

  @media (min-width: ${SCREEN_SM_MIN}) {
    text-shadow: 1px -1px 17px #367088;
    margin-bottom:36px;
    display: inline-block;
    ul {
      display:inline-block;
    }
  }

  @media (max-width: ${SCREEN_XS_MAX}) {
    li {
      display:block;
    }
  }
`
const TitleCol = styled(Col)`
  ${({ type }) =>
    type &&
    `
    height: 100%;
    border-left: solid 27px ${selectTypeColor(type)};
    @media (min-width: ${SCREEN_SM_MIN}) {
      margin-left: 9px;
    }
    margin-bottom: 1em;
  `}
`
const InfoBox = styled(Card)`
  ul {
    padding: 0 10px;
    margin: 0;
  }
  li {
    margin-bottom: 1em;
  }
  a {
    font-size: 16px;
  }
  font-size: 16px;
  padding: 10px 10px 0 10px;
  border: ${({ type }) => `solid 5px ${selectTypeColor(type)}`};
`

const Header = ({
  training,
  type = '',
  titleLines = [],
  subtitle,
  links = [],
  bgImg,
  fullHeight,
  paddingBottom,
  children,
}) => (
  <HeaderSection
    top
    bgImg={bgImg}
    fullHeight={fullHeight}
    paddingBottom={paddingBottom}
  >
    <Grid>
      <Row>
        <TitleCol md={training && 7} type={type}>
          <H1>
            {titleLines.map((line, i) => (
              <TitleBackground key={i} children={line} />
            ))}
          </H1>
          {subtitle ? (
            <SubTitleBackground>
              <H2Header dangerouslySetInnerHTML={{ __html: subtitle }} />
            </SubTitleBackground>
          ) : null}
          {children ? (
            <SubTitleBackground>{children}</SubTitleBackground>
          ) : null}
        </TitleCol>
        {training && (
          <Col md={3} mdOffset={1}>
            <InfoBox padding={false} type={type}>
              <Image
                src={training.image || SMALL_CLASSROOM}
                width="100%"
                alt="ReactJS Academy coach Alex assists a student, being next to them, inspecting their code and helping them on their learning path."
              />
              <Ul unstyled>
                <Li>Date: {training.dates}</Li>
                <Li>Timings: {training.timings || `9am to 6:30pm`}</Li>
                <Li>
                  Venue: {training.location}{' '}
                  {training.mapLink && <Link to={training.mapLink}>- map</Link>}
                </Li>
              </Ul>
            </InfoBox>
          </Col>
        )}
      </Row>
      <Row>
        <Col>
          {links.length ? (
            <Nav quickLinks>
              <Ul inline>
                <Li>
                  <Span>On this page:</Span>
                </Li>
                {links.map(({ to, text }, i) => (
                  <Li key={i}>
                    <Link to={to[0] !== '#' ? `#${to}` : to}>{text}</Link>
                  </Li>
                ))}
              </Ul>
            </Nav>
          ) : null}
        </Col>
      </Row>
    </Grid>
  </HeaderSection>
)

Header.propTypes = {
  titleLines: PropTypes.array.isRequired,
  subtitle: PropTypes.string,
  links: PropTypes.array,
  height: PropTypes.number,
  bgImg: PropTypes.string,
}

export default Header
