import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const LotteryTypeSection = (props) => {
  return (
    <>
      <div
        className={`lottery-type-section-layout251 thq-section-padding ${props.rootClassName} `}
      >
        <div className="lottery-type-section-max-width thq-section-max-width">
          <div className="lottery-type-section-section-title thq-flex-row"></div>
          <div className="lottery-type-section-content1">
            <div className="lottery-type-section-row thq-flex-row">
              <div className="lottery-type-section-feature1 thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-img-ratio-4-6 lottery-type-section-feature1-image"
                />
                <div className="lottery-type-section-content2 thq-flex-column">
                  <h3 className="lottery-type-section-feature1-title thq-heading-3">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="lottery-type-section-text4">
                          Мгновенные лотереи
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="lottery-type-section-feature1-description thq-body-small">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="lottery-type-section-text3">
                          Играй и выигрывай за секунды
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="lottery-type-section-feature2 thq-flex-column">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="thq-img-ratio-4-6 lottery-type-section-feature2-image"
                />
                <div className="lottery-type-section-content3 thq-flex-column">
                  <h3 className="lottery-type-section-feature2-title thq-heading-3">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="lottery-type-section-text5">
                          Тиражные лотереи
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="lottery-type-section-feature2-description thq-body-small">
                    {props.feature2Description ?? (
                      <Fragment>
                        <span className="lottery-type-section-text6">
                          Классические лотереи
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="lottery-type-section-feature3 thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="inline-card-text thq-img-ratio-4-6 lottery-type-section-feature3-image"
                />
                <div className="lottery-type-section-content4 thq-flex-column">
                  <h3 className="lottery-type-section-feature3-title thq-heading-3">
                    {props.feature3Title ?? (
                      <Fragment>
                        <span className="lottery-type-section-text2">
                          Спортивные лотереи
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="lottery-type-section-feature3-description thq-body-small">
                    {props.feature3Description ?? (
                      <Fragment>
                        <span className="lottery-type-section-text1">
                          Прогнозируй спортивные результаты
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .lottery-type-section-layout251 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .lottery-type-section-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .lottery-type-section-section-title {
            border: 2px dashed rgba(120, 120, 120, 0.4);
          }
          .lottery-type-section-content1 {
            gap: 48px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .lottery-type-section-row {
            width: 100%;
            max-width: auto;
            min-width: 0px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .lottery-type-section-feature1 {
            flex: 1 1 33.33%;
            width: auto;
            min-width: 0px;
          }
          .lottery-type-section-content2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .lottery-type-section-feature1-title {
            align-self: center;
            text-align: center;
          }
          .lottery-type-section-feature1-description {
            align-self: center;
            text-align: center;
          }
          .lottery-type-section-feature2 {
            flex: 1 1 33.33%;
            width: auto;
            min-width: 0px;
          }
          .lottery-type-section-content3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .lottery-type-section-feature2-title {
            align-self: center;
            text-align: center;
          }
          .lottery-type-section-feature2-description {
            align-self: center;
            text-align: center;
          }
          .lottery-type-section-feature3 {
            flex: 1 1 33.33%;
            width: auto;
            min-width: 0px;
          }
          .lottery-type-section-content4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .lottery-type-section-feature3-title {
            align-self: center;
            text-align: center;
          }
          .lottery-type-section-feature3-description {
            align-self: center;
            text-align: center;
          }
          .lottery-type-section-text1 {
            display: inline-block;
          }
          .lottery-type-section-text2 {
            display: inline-block;
          }
          .lottery-type-section-text3 {
            display: inline-block;
          }
          .lottery-type-section-text4 {
            display: inline-block;
          }
          .lottery-type-section-text5 {
            display: inline-block;
          }
          .lottery-type-section-text6 {
            display: inline-block;
          }
          .lottery-type-sectionroot-class-name {
            height: auto;
          }
          @media (max-width: 991px) {
            .lottery-type-section-section-title {
              align-items: flex-start;
              flex-direction: column;
            }
            .lottery-type-section-content1 {
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .lottery-type-section-row {
              align-self: flex-start;
              padding-top: var(--dl-layout-space-halfunit);
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: row;
              justify-content: space-between;
            }
            .lottery-type-section-feature1 {
              align-self: flex-start;
            }
            .lottery-type-section-feature1-image {
              height: 260px;
            }
            .lottery-type-section-feature2 {
              align-self: flex-start;
            }
            .lottery-type-section-feature2-image {
              height: 260px;
            }
            .lottery-type-section-feature3 {
              align-self: flex-start;
            }
          }
          @media (max-width: 767px) {
            .lottery-type-section-layout251 {
              align-items: center;
            }
            .lottery-type-section-max-width {
              align-self: center;
            }
            .lottery-type-section-row {
              flex-direction: row;
              justify-content: center;
            }
            .lottery-type-section-feature1-image {
              width: 100%;
            }
            .lottery-type-section-feature2 {
              width: auto;
            }
            .lottery-type-section-feature2-image {
              width: 100%;
              height: auto;
            }
            .lottery-type-section-feature3 {
              width: auto;
            }
            .lottery-type-section-feature3-image {
              width: 100%;
              height: auto;
            }
          }
          @media (max-width: 479px) {
            .lottery-type-section-layout251 {
              padding: var(--dl-layout-space-halfunit);
              align-items: center;
            }
            .lottery-type-section-max-width {
              gap: var(--dl-layout-space-halfunit);
              align-self: center;
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .lottery-type-section-row {
              flex-direction: row;
              justify-content: center;
            }
            .lottery-type-section-feature1 {
              align-self: flex-start;
            }
            .lottery-type-section-feature1-image {
              height: auto;
            }
            .lottery-type-section-feature1-title {
              font-size: 18px;
              text-align: center;
            }
            .lottery-type-section-feature2 {
              align-self: flex-start;
            }
            .lottery-type-section-feature2-image {
              height: auto;
            }
            .lottery-type-section-feature2-title {
              font-size: 18px;
              text-align: center;
            }
            .lottery-type-section-feature3 {
              align-self: flex-start;
              flex-direction: column;
            }
            .lottery-type-section-feature3-title {
              font-size: 18px;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

LotteryTypeSection.defaultProps = {
  feature3Description: undefined,
  feature3ImageAlt: 'Sports Lotteries Image',
  feature3Title: undefined,
  feature1Description: undefined,
  feature2ImageAlt: 'Classic Draw Lotteries Image',
  feature1Title: undefined,
  feature3ImageSrc: '/imagePopularLottery/sportloto_1-300h.png',
  feature1ImageAlt: 'Instant Lotteries Image',
  feature2Title: undefined,
  feature2Description: undefined,
  rootClassName: '',
  feature2ImageSrc: '/imagePopularLottery/classic_keno_rus-300h.png',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1700085663927-d223c604fb57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTExMTkxNXw&ixlib=rb-4.1.0&q=80&h=300',
}

LotteryTypeSection.propTypes = {
  feature3Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
  rootClassName: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
}

export default LotteryTypeSection
