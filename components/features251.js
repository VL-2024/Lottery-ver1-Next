import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features251 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="thq-section-padding">
        <div className="features251-container2 thq-section-max-width">
          <div className="features251-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features251-tab-horizontal1"
            >
              <div className="features251-divider-container1">
                {activeTab === 0 && (
                  <div className="features251-container3"></div>
                )}
              </div>
              <div className="features251-content1">
                <h2 className="thq-heading-2">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features251-text4">
                        Instant Lotteries
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features251-text3">
                        Play quick and exciting instant lotteries for a chance
                        to win instant prizes.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="features251-tab-horizontal2"
            >
              <div className="features251-divider-container2">
                {activeTab === 1 && (
                  <div className="features251-container4"></div>
                )}
              </div>
              <div className="features251-content2">
                <h2 className="thq-heading-2">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features251-text5">
                        Sports Predictions
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features251-text6">
                        Predict sports results and win big rewards based on your
                        sports knowledge.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="features251-tab-horizontal3"
            >
              <div className="features251-divider-container3">
                {activeTab === 2 && (
                  <div className="features251-container5"></div>
                )}
              </div>
              <div className="features251-content3">
                <h2 className="thq-heading-2">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features251-text2">
                        Classic Lotteries
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features251-text1">
                        Participate in classic lotteries with big jackpots up
                        for grabs.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="features251-image-container">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="features251-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="features251-image2 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="features251-image3 thq-img-ratio-16-9"
              />
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features251-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .features251-tabs-menu {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features251-tab-horizontal1 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features251-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features251-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features251-content1 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features251-tab-horizontal2 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features251-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features251-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features251-content2 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features251-tab-horizontal3 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features251-divider-container3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features251-container5 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features251-content3 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features251-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .features251-image1 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features251-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features251-image3 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features251-text1 {
            display: inline-block;
          }
          .features251-text2 {
            display: inline-block;
          }
          .features251-text3 {
            display: inline-block;
          }
          .features251-text4 {
            display: inline-block;
          }
          .features251-text5 {
            display: inline-block;
          }
          .features251-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features251-container2 {
              grid-gap: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr;
            }
            .features251-tabs-menu {
              order: 2;
            }
          }
        `}
      </style>
    </>
  )
}

Features251.defaultProps = {
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1634484675974-d3d30cdc0fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM3NTg1Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  feature3Description: undefined,
  feature2ImgAlt: 'Sports Predictions Image',
  feature3Title: undefined,
  feature1ImgAlt: 'Instant Lotteries Image',
  feature1Description: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1634446391144-f906e17b81f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM3NTg1Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  feature1Title: undefined,
  feature3ImgAlt: 'Classic Lotteries Image',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1704808207626-026c1bebb15d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM3NTg1N3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature2Title: undefined,
  feature2Description: undefined,
}

Features251.propTypes = {
  feature3ImgSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
}

export default Features251
