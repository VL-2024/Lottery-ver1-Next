import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Banner1 = (props) => {
  return (
    <>
      <div
        className={`banner1-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="banner1-max-width thq-section-max-width">
          <div className="banner1-container2">
            <h2 className="banner1-title thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="banner1-text3">
                    Национальная игровая экосистема
                  </span>
                </Fragment>
              )}
            </h2>
            <h3 className="banner1-text1 thq-heading-2">
              {props.content1 ?? (
                <Fragment>
                  <span className="banner1-text2">
                    Исследуйте мир захватывающих лотерей, игр и огромных
                    джекпотов. Приготовьтесь играть и выигрывать!
                  </span>
                </Fragment>
              )}
            </h3>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .banner1-container1 {
            gap: var(--dl-layout-space-unit);
            height: var(--dl-layout-size-xlarge);
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .banner1-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner1-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner1-title {
            font-size: 50px;
            text-align: center;
          }
          .banner1-text1 {
            text-align: center;
          }
          .banner1-text2 {
            display: inline-block;
          }
          .banner1-text3 {
            display: inline-block;
          }
          .banner1root-class-name {
            height: auto;
          }
          @media (max-width: 991px) {
            .banner1root-class-name {
              height: auto;
            }
          }
          @media (max-width: 767px) {
            .banner1root-class-name {
              height: auto;
            }
          }
          @media (max-width: 479px) {
            .banner1-container1 {
              width: 479px;
              height: 289px;
            }
            .banner1-title {
              font-size: 32px;
            }
            .banner1-text1 {
              font-size: 20px;
              font-style: normal;
              font-weight: 400;
            }
            .banner1root-class-name {
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Banner1.defaultProps = {
  content1: undefined,
  rootClassName: '',
  heading1: undefined,
}

Banner1.propTypes = {
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
}

export default Banner1
