import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features11 = (props) => {
  return (
    <>
      <div
        className={`features11-layout251 thq-section-padding ${props.rootClassName} `}
      >
        <div className="features11-max-width thq-section-max-width">
          <div className="thq-flex-row features11-section-title">
            <div className="features11-column thq-flex-column">
              <span className="thq-body-small">
                {props.slogan ?? (
                  <Fragment>
                    <span className="features11-text13">
                      Play, Win, Repeat!
                    </span>
                  </Fragment>
                )}
              </span>
              <h2 className="thq-heading-2 features11-text11">
                {props.sectionTitle ?? (
                  <Fragment>
                    <span className="features11-text18">Exciting Features</span>
                  </Fragment>
                )}
              </h2>
            </div>
            <span className="thq-body-small">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features11-text15">
                    Explore the amazing features that make our platform stand
                    out from the rest.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features11-content1">
            <div className="features11-row thq-flex-row">
              <div className="features11-feature1 thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-img-ratio-4-3 features11-feature1-image"
                />
                <div className="features11-content2 thq-flex-column">
                  <h3 className="features11-feature1-title thq-heading-3">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="features11-text22">
                          Instant AAA Lotteries
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="features11-text16">
                          Participate in quick and thrilling instant lotteries
                          for instant wins.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features11-feature2 thq-flex-column">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="thq-img-ratio-4-3 features11-feature2-image"
                />
                <div className="features11-content3 thq-flex-column">
                  <h3 className="features11-feature2-title thq-heading-3">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="features11-text23">
                          Classic Draw Lotteries
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature2Description ?? (
                      <Fragment>
                        <span className="features11-text21">
                          Experience the traditional draw lotteries with big
                          jackpot prizes up for grabs.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features11-feature3 thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-img-ratio-4-3 inline-card-text"
                />
                <div className="features11-content4 thq-flex-column">
                  <h3 className="features11-feature3-title thq-heading-3">
                    {props.feature3Title ?? (
                      <Fragment>
                        <span className="features11-text17">
                          Sports Lotteries
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature3Description ?? (
                      <Fragment>
                        <span className="features11-text19">
                          Engage in sports lotteries where your knowledge can
                          lead you to exciting wins.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="features11-actions">
            <button className="thq-button-filled features11-button1">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features11-text14">Play Now</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline features11-button2">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features11-text20">Learn More</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <hr className="features11-separator"></hr>
        <div className="features11-container"></div>
      </div>
      <style jsx>
        {`
          .features11-layout251 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features11-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features11-column {
            gap: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features11-content1 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features11-row {
            width: 100%;
            max-width: auto;
            min-width: 0px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .features11-feature1 {
            flex: 1 1 33.33%;
            width: auto;
            min-width: 0px;
          }
          .features11-content2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features11-feature1-title {
            align-self: center;
            text-align: center;
          }
          .features11-feature2 {
            flex: 1 1 33.33%;
            width: auto;
            min-width: 0px;
          }
          .features11-content3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features11-feature2-title {
            align-self: center;
            text-align: center;
          }
          .features11-feature3 {
            flex: 1 1 33.33%;
            width: auto;
            min-width: 0px;
          }
          .features11-content4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features11-feature3-title {
            align-self: center;
            text-align: center;
          }
          .features11-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .features11-separator {
            width: 100%;
            height: 1px;
            background-color: #595959;
          }
          .features11-container {
            flex: 0 0 auto;
            width: 200px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .features11-text13 {
            display: inline-block;
          }
          .features11-text14 {
            display: inline-block;
          }
          .features11-text15 {
            display: inline-block;
          }
          .features11-text16 {
            display: inline-block;
          }
          .features11-text17 {
            display: inline-block;
          }
          .features11-text18 {
            display: inline-block;
          }
          .features11-text19 {
            display: inline-block;
          }
          .features11-text20 {
            display: inline-block;
          }
          .features11-text21 {
            display: inline-block;
          }
          .features11-text22 {
            display: inline-block;
          }
          .features11-text23 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .features11-section-title {
              align-items: flex-start;
              flex-direction: column;
            }
            .features11-feature1-image {
              height: 260px;
            }
            .features11-feature2-image {
              height: 260px;
            }
          }
          @media (max-width: 767px) {
            .features11-column {
              width: 100%;
            }
            .features11-text11 {
              text-align: center;
            }
            .features11-row {
              flex-direction: column;
            }
            .features11-feature1-image {
              width: 100%;
            }
            .features11-feature2 {
              width: auto;
            }
            .features11-feature2-image {
              width: 100%;
            }
            .features11-feature3 {
              width: auto;
            }
            .features11-actions {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .features11-row {
              flex-direction: row;
              justify-content: center;
            }
            .features11-feature1 {
              align-self: flex-start;
            }
            .features11-feature1-image {
              height: auto;
            }
            .features11-feature1-title {
              text-align: center;
            }
            .features11-feature2-image {
              height: auto;
            }
            .features11-feature2-title {
              text-align: center;
            }
            .features11-feature3 {
              align-self: flex-start;
              flex-direction: column;
            }
            .features11-feature3-title {
              text-align: center;
            }
            .features11-actions {
              width: 100%;
              flex-direction: column;
            }
            .features11-button1 {
              width: 100%;
            }
            .features11-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features11.defaultProps = {
  slogan: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1595939281699-095354274439?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTEwMDE5MHw&ixlib=rb-4.1.0&q=80&h=300',
  mainAction: undefined,
  sectionDescription: undefined,
  feature2ImageAlt: 'Classic Draw Lotteries Image',
  feature1Description: undefined,
  feature3Title: undefined,
  sectionTitle: undefined,
  feature1ImageAlt: 'Instant Lotteries Image',
  feature3Description: undefined,
  secondaryAction: undefined,
  feature2Description: undefined,
  rootClassName: '',
  feature1Title: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1606503153255-59d8b8b82176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTEwMDE5MXw&ixlib=rb-4.1.0&q=80&h=300',
  feature2Title: undefined,
  feature3ImageAlt: 'Sports Lotteries Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1584917865445-44b7965d4fc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTEwMDE5MHw&ixlib=rb-4.1.0&q=80&h=300',
}

Features11.propTypes = {
  slogan: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  mainAction: PropTypes.element,
  sectionDescription: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3Title: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature2Description: PropTypes.element,
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
}

export default Features11
