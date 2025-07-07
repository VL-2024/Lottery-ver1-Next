import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const AsiaJackpotSection = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="thq-section-padding">
        <div className="asia-jackpot-section-container2 thq-section-max-width">
          <div className="asia-jackpot-section-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="asia-jackpot-section-tab-horizontal1"
            >
              <div className="asia-jackpot-section-divider-container1">
                {activeTab === 0 && (
                  <div className="asia-jackpot-section-container3"></div>
                )}
              </div>
              <div className="asia-jackpot-section-content1">
                <h2 className="asia-jackpot-section-feature1-title thq-heading-2">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="asia-jackpot-section-text13">
                        Азия Джекпот - твой шанс на миллионы!
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="asia-jackpot-section-text14">
                        <span>
                          Минимальный джекпот — 10 миллионов, максимальный — 1
                          миллиард!
                        </span>
                        <br></br>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="asia-jackpot-section-tab-horizontal2"
            >
              <div className="asia-jackpot-section-divider-container2">
                {activeTab === 1 && (
                  <div className="asia-jackpot-section-container4"></div>
                )}
              </div>
              <div className="asia-jackpot-section-content2">
                <h2 className="asia-jackpot-section-feature2-title thq-heading-2">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="asia-jackpot-section-text21">
                        Заполни билет легко и быстро
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="asia-jackpot-section-text10">
                        <span>
                          Выбери 5 основных чисел и 2 бонусных — вручную или
                          нажмите «Счастливый выбор».
                        </span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="asia-jackpot-section-tab-horizontal3"
            >
              <div className="asia-jackpot-section-divider-container3">
                {activeTab === 2 && (
                  <div className="asia-jackpot-section-container5"></div>
                )}
              </div>
              <div className="asia-jackpot-section-content3">
                <h2 className="asia-jackpot-section-feature3-title thq-heading-2">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="asia-jackpot-section-text18">
                        <span>Следи за розыгрышем</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="asia-jackpot-section-text22">
                        <span>
                          Смотри прямую трансляцию тиража или проверяй
                          результаты онлайн. Выигрыши зачисляются автоматически.
                        </span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="asia-jackpot-section-image-container">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="asia-jackpot-section-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="asia-jackpot-section-image2 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="asia-jackpot-section-image3 thq-img-ratio-16-9"
              />
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .asia-jackpot-section-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .asia-jackpot-section-tabs-menu {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .asia-jackpot-section-tab-horizontal1 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .asia-jackpot-section-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .asia-jackpot-section-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .asia-jackpot-section-content1 {
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
          .asia-jackpot-section-feature1-title {
            font-size: 28px;
          }
          .asia-jackpot-section-tab-horizontal2 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .asia-jackpot-section-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .asia-jackpot-section-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .asia-jackpot-section-content2 {
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
          .asia-jackpot-section-feature2-title {
            font-size: 28px;
          }
          .asia-jackpot-section-tab-horizontal3 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .asia-jackpot-section-divider-container3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .asia-jackpot-section-container5 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .asia-jackpot-section-content3 {
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
          .asia-jackpot-section-feature3-title {
            font-size: 28px;
          }
          .asia-jackpot-section-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .asia-jackpot-section-image1 {
            width: 100%;
            display: flex;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: center;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .asia-jackpot-section-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .asia-jackpot-section-image3 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .asia-jackpot-section-text10 {
            display: inline-block;
          }
          .asia-jackpot-section-text13 {
            display: inline-block;
          }
          .asia-jackpot-section-text14 {
            display: inline-block;
          }
          .asia-jackpot-section-text18 {
            display: inline-block;
          }
          .asia-jackpot-section-text21 {
            display: inline-block;
          }
          .asia-jackpot-section-text22 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .asia-jackpot-section-container2 {
              grid-gap: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr;
            }
            .asia-jackpot-section-tabs-menu {
              order: 2;
            }
          }
        `}
      </style>
    </>
  )
}

AsiaJackpotSection.defaultProps = {
  feature3ImgAlt: 'Image illustrating game information',
  feature2ImgAlt: 'Image showing winning numbers',
  feature2Description: undefined,
  feature1ImgSrc:
    '/imageForSection/20250701_1600_elegant%20jackpot%20banner_simple_compose_01jz313n0ne03ty7qn2jpqv2zr-1400w.png',
  feature2ImgSrc:
    '/imageForSection/20250701_1700_digital%20lottery%20experience_simple_compose_01jz34kph0eakr2a4bsyb302ch-1400w.png',
  feature1Title: undefined,
  feature1Description: undefined,
  feature3Title: undefined,
  feature3ImgSrc:
    '/imageForSection/20250701_1716_golden%20lottery%20draw_simple_compose_01jz35fhw7eqm9fg14xy38nna4-1400w.png',
  feature2Title: undefined,
  feature3Description: undefined,
  feature1ImgAlt: 'Image depicting jackpot prizes',
}

AsiaJackpotSection.propTypes = {
  feature3ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
}

export default AsiaJackpotSection
