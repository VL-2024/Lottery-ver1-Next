import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const SliderAction = (props) => {
  return (
    <>
      <div className={`slider-action-container1 ${props.rootClassName} `}>
        <div className="slider-action-container2">
          <div
            data-thq="slider"
            data-loop="true"
            data-autoplay="true"
            data-navigation="true"
            data-pagination="true"
            data-pause-autoplay-on-mouse-enter="true"
            className="slider-action-slider swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="slider-action-slider-slide1 swiper-slide"
              ></div>
              <div
                data-thq="slider-slide"
                className="slider-action-slider-slide2 swiper-slide"
              ></div>
              <div
                data-thq="slider-slide"
                className="slider-action-slider-slide3 swiper-slide"
              ></div>
            </div>
            <div
              data-thq="slider-pagination"
              className="slider-action-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
            </div>
            <div
              data-thq="slider-button-prev"
              className="slider-action-slider-button-prev swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="slider-action-slider-button-next swiper-button-next"
            ></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .slider-action-container1 {
            width: 100%;
            height: 235px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .slider-action-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .slider-action-slider {
            width: 90%;
            height: 300px;
            display: inline-block;
            padding: 0px;
            border-radius: var(--dl-layout-radius-imageradius);
          }
          .slider-action-slider-slide1 {
            display: flex;
            border-radius: var(--dl-layout-radius-imageradius);
            background-size: cover;
            background-image: url('/imageForSection/action_jet_1-1400w.png');
          }
          .slider-action-slider-slide2 {
            display: flex;
            border-radius: var(--dl-layout-radius-imageradius);
            background-size: cover;
            background-image: url('/imageForSection/action_jakht_1-1400w.png');
          }
          .slider-action-slider-slide3 {
            display: flex;
            border-radius: var(--dl-layout-radius-imageradius);
            background-size: cover;
            background-image: url('/imageForSection/action_jet_1-1400w.png');
          }
          .slider-action-slider-pagination {
            display: block;
          }
          .slider-action-slider-button-prev {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
          }
          .slider-action-slider-button-next {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
          }
          .slider-actionroot-class-name {
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          @media (max-width: 479px) {
            .slider-action-slider {
              border-radius: var(--dl-layout-radius-imageradius);
            }
            .slider-action-slider-slide1 {
              border-radius: var(--dl-layout-radius-radius4);
              background-size: cover;
              background-image: 37cc3281-66bd-4df2-8ca4-68d63b2ac0b9;
            }
          }
        `}
      </style>
    </>
  )
}

SliderAction.defaultProps = {
  rootClassName: '',
}

SliderAction.propTypes = {
  rootClassName: PropTypes.string,
}

export default SliderAction
