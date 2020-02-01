import React from 'react'
import { H3, P } from '../text'
import Segment from '../elements/Segment'
import LinkButton from '../buttons/LinkButton'
import { Row, Col } from '../layout/Grid'
import formatPrice from '../utils/currency'
import { DEFAULT_VAT_RATE } from '../../config'

export const DeductPriceOnPurchase = ({ price, trainingInstance }) => (
  <>
    The{' '}
    <strong>
      {price
        ? price
        : trainingInstance
        ? formatPrice(
            trainingInstance.currency,
            trainingInstance.price,
            DEFAULT_VAT_RATE
          )
        : 'price'}{' '}
      of the trial will be deducted
    </strong>{' '}
    from the price when you buy the full course within one week.
  </>
)

const TrialCard = ({ trainingInstance, ...rest }) => {
  const price = formatPrice(
    trainingInstance.currency,
    trainingInstance.price,
    DEFAULT_VAT_RATE
  )
  return (
    <Segment small variant="primary" my={5} {...rest}>
      <Row>
        <Col md={8}>
          <H3>You can try this course first</H3>
          <P>
            We have scheduled a trial for this course, which corresponds to the
            first session of this course curriculum.
            <DeductPriceOnPurchase price={price} />
          </P>
        </Col>
        <Col md={4} textAlign="center">
          <H3>{price}</H3>
          <LinkButton
            className="instance-page-trial-card"
            to={trainingInstance.toPath}
          >
            Trial? tell me more!
          </LinkButton>{' '}
        </Col>
      </Row>
    </Segment>
  )
}

export default TrialCard