import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features12 = (props) => {
  return (
    <>
      <div className="features12-layout251 thq-section-padding">
        <div className="features12-max-width thq-section-max-width">
          <div className="thq-flex-row features12-section-title">
            <div className="features12-column thq-flex-column">
              <span className="thq-body-small">
                {props.slogan ?? (
                  <Fragment>
                    <span className="features12-text20">Win Big with Us!</span>
                  </Fragment>
                )}
              </span>
              <h2 className="thq-heading-2 features12-text11">
                {props.sectionTitle ?? (
                  <Fragment>
                    <span className="features12-text21">Features</span>
                  </Fragment>
                )}
              </h2>
            </div>
            <span className="thq-body-small">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features12-text17">
                    Explore the exciting features of our online platform for
                    participating in lotteries, games, and sports predictions.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features12-content1">
            <div className="features12-row thq-flex-row">
              <div className="features12-feature1 thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-img-ratio-4-3 features12-feature1-image"
                />
                <div className="features12-content2 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="features12-text15">
                          Jackpot Prizes
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="features12-text19">
                          Get a chance to win large jackpot prizes in various
                          games and lotteries.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features12-feature2 thq-flex-column">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="thq-img-ratio-4-3 features12-feature2-image"
                />
                <div className="features12-content3 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="features12-text22">
                          Winning Numbers
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature2Description ?? (
                      <Fragment>
                        <span className="features12-text23">
                          Access information on winning numbers to stay updated
                          on the latest results.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features12-feature3 thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-img-ratio-4-3 features12-feature3-image"
                />
                <div className="features12-content4 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature3Title ?? (
                      <Fragment>
                        <span className="features12-text18">
                          Strategies for Success
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature3Description ?? (
                      <Fragment>
                        <span className="features12-text13">
                          Discover effective strategies to increase your chances
                          of winning in games and predictions.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="features12-actions">
            <button className="thq-button-filled features12-button1">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features12-text16">Join Now</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline features12-button2">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features12-text14">Learn More</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features12-layout251 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features12-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features12-column {
            gap: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features12-content1 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features12-row {
            align-items: flex-start;
          }
          .features12-feature1 {
            flex: 1;
          }
          .features12-content2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features12-feature2 {
            flex: 1;
          }
          .features12-content3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features12-feature3 {
            flex: 1;
          }
          .features12-content4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features12-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .features12-text13 {
            display: inline-block;
          }
          .features12-text14 {
            display: inline-block;
          }
          .features12-text15 {
            display: inline-block;
          }
          .features12-text16 {
            display: inline-block;
          }
          .features12-text17 {
            display: inline-block;
          }
          .features12-text18 {
            display: inline-block;
          }
          .features12-text19 {
            display: inline-block;
          }
          .features12-text20 {
            display: inline-block;
          }
          .features12-text21 {
            display: inline-block;
          }
          .features12-text22 {
            display: inline-block;
          }
          .features12-text23 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features12-section-title {
              align-items: flex-start;
              flex-direction: column;
            }
            .features12-feature1-image {
              height: 260px;
            }
            .features12-feature2-image {
              height: 260px;
            }
            .features12-feature3-image {
              height: 260px;
            }
          }
          @media (max-width: 767px) {
            .features12-column {
              width: 100%;
            }
            .features12-text11 {
              text-align: center;
            }
            .features12-row {
              flex-direction: column;
            }
            .features12-feature1-image {
              width: 100%;
            }
            .features12-feature2 {
              width: auto;
            }
            .features12-feature2-image {
              width: 100%;
            }
            .features12-feature3 {
              width: auto;
            }
            .features12-actions {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .features12-actions {
              width: 100%;
              flex-direction: column;
            }
            .features12-button1 {
              width: 100%;
            }
            .features12-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features12.defaultProps = {
  feature1ImageAlt: 'Jackpot Prizes Image',
  feature3Description: undefined,
  secondaryAction: undefined,
  feature1Title: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1591352473009-8b153850a0cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTEwMTQwNHw&ixlib=rb-4.1.0&q=80&h=300',
  mainAction: undefined,
  sectionDescription: undefined,
  feature3Title: undefined,
  feature1Description: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1707608423081-6abb65ce2a10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTEwMTQwNHw&ixlib=rb-4.1.0&q=80&w=1400',
  slogan: undefined,
  feature2ImageAlt: 'Winning Numbers Image',
  feature3ImageAlt: 'Strategies Image',
  sectionTitle: undefined,
  feature2Title: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1709540235844-62f616e47a73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTEwMTQwM3w&ixlib=rb-4.1.0&q=80&h=300',
  feature2Description: undefined,
}

Features12.propTypes = {
  feature1ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  mainAction: PropTypes.element,
  sectionDescription: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  slogan: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
}

export default Features12
