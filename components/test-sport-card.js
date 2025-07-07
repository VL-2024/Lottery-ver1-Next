import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TestSportCard = (props) => {
  return (
    <>
      <div className={`test-sport-card-container ${props.rootClassName} `}>
        <div className="test-sport-card-container-event">
          <div className="test-sport-card-title-event">
            <span className="test-sport-card-text10">
              {props.text2 ?? (
                <Fragment>
                  <span className="test-sport-card-text28">Матч</span>
                </Fragment>
              )}
            </span>
            <span className="test-sport-card-text11">
              {props.text21 ?? (
                <Fragment>
                  <span className="test-sport-card-text25">1</span>
                </Fragment>
              )}
            </span>
            <span className="test-sport-card-text12">
              {props.text211 ?? (
                <Fragment>
                  <span className="test-sport-card-text33">Х</span>
                </Fragment>
              )}
            </span>
            <span className="test-sport-card-text13">
              {props.text2111 ?? (
                <Fragment>
                  <span className="test-sport-card-text22">2</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="test-sport-card-event1">
            <span className="test-sport-card-text14">
              {props.text23 ?? (
                <Fragment>
                  <span className="test-sport-card-text30">
                    VfB Stuttgart - Bayern Munich 21:30
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="checkbox"
              checked="true"
              className="test-sport-card-checkbox10"
            />
            <input
              type="checkbox"
              checked="true"
              className="test-sport-card-checkbox11"
            />
            <input
              type="checkbox"
              checked="true"
              className="test-sport-card-checkbox12"
            />
          </div>
          <div className="test-sport-card-event2">
            <span className="test-sport-card-text15">
              {props.text234 ?? (
                <Fragment>
                  <span className="test-sport-card-text32">
                    Barbora Krejcikova - Alexandra Eala 15:30
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="checkbox"
              checked="true"
              className="test-sport-card-checkbox13"
            />
            <input
              type="checkbox"
              checked="true"
              className="test-sport-card-checkbox14"
            />
            <input
              type="checkbox"
              checked="true"
              className="test-sport-card-checkbox15"
            />
          </div>
          <div className="test-sport-card-event3">
            <span className="test-sport-card-text16">
              {props.text233 ?? (
                <Fragment>
                  <span className="test-sport-card-text24">
                    VfB Stuttgart - Bayern Munich 21:30
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="checkbox"
              checked="true"
              className="test-sport-card-checkbox16"
            />
            <input
              type="checkbox"
              checked="true"
              className="test-sport-card-checkbox17"
            />
            <input
              type="checkbox"
              checked="true"
              className="test-sport-card-checkbox18"
            />
          </div>
          <div className="test-sport-card-event4">
            <span className="test-sport-card-text17">
              {props.text232 ?? (
                <Fragment>
                  <span className="test-sport-card-text23">
                    VfB Stuttgart - Bayern Munich 21:30
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="checkbox"
              checked="true"
              className="test-sport-card-checkbox19"
            />
            <input
              type="checkbox"
              checked="true"
              className="test-sport-card-checkbox20"
            />
            <input
              type="checkbox"
              checked="true"
              className="test-sport-card-checkbox21"
            />
          </div>
          <div className="test-sport-card-event5">
            <span className="test-sport-card-text18">
              {props.text231 ?? (
                <Fragment>
                  <span className="test-sport-card-text27">
                    Paris Saint-Germain - Bayern Munich 19:00 05.07.2025
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="checkbox"
              checked="true"
              className="test-sport-card-checkbox22"
            />
            <input
              type="checkbox"
              checked="true"
              className="test-sport-card-checkbox23"
            />
            <input
              type="checkbox"
              checked="true"
              className="test-sport-card-checkbox24"
            />
          </div>
          <div className="test-sport-card-container-button">
            <div className="test-sport-card-price">
              <span className="test-sport-card-text19">
                {props.text2311 ?? (
                  <Fragment>
                    <span className="test-sport-card-text29">Цена билета</span>
                  </Fragment>
                )}
              </span>
              <span className="test-sport-card-text20">
                {props.text4 ?? (
                  <Fragment>
                    <span className="test-sport-card-text26">100</span>
                  </Fragment>
                )}
              </span>
            </div>
            <button
              type="button"
              className="test-sport-card-button thq-button-animated thq-button-filled button"
            >
              <span className="test-sport-card-text21">
                {props.button ?? (
                  <Fragment>
                    <span className="test-sport-card-text31">
                      Сделать прогноз
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .test-sport-card-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .test-sport-card-container-event {
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            align-self: center;
            box-shadow: 5px 5px 5px 5px #7e7e7e;
            align-items: flex-start;
            border-color: #7e7e7e;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
          }
          .test-sport-card-title-event {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-small);
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: row;
            justify-content: center;
          }
          .test-sport-card-text10 {
            width: 200px;
            height: auto;
            font-size: 30px;
            align-self: center;
            text-align: center;
          }
          .test-sport-card-text11 {
            width: var(--dl-layout-size-small);
            height: auto;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            border-color: #000000;
            border-width: 0px;
          }
          .test-sport-card-text12 {
            width: var(--dl-layout-size-small);
            height: auto;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            border-color: #000000;
          }
          .test-sport-card-text13 {
            width: var(--dl-layout-size-small);
            height: auto;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            border-color: #000000;
          }
          .test-sport-card-event1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            min-height: 24px;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: row;
            justify-content: center;
          }
          .test-sport-card-text14 {
            width: 200px;
            height: auto;
            align-self: center;
            text-align: left;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-halfunit);
          }
          .test-sport-card-checkbox10 {
            flex: 1;
            align-self: center;
          }
          .test-sport-card-checkbox11 {
            flex: 1;
            align-self: center;
          }
          .test-sport-card-checkbox12 {
            flex: 1;
            align-self: center;
          }
          .test-sport-card-event2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            min-height: 24px;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: row;
            justify-content: center;
          }
          .test-sport-card-text15 {
            width: 200px;
            height: auto;
            align-self: center;
            text-align: left;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-halfunit);
          }
          .test-sport-card-checkbox13 {
            flex: 1;
            align-self: center;
          }
          .test-sport-card-checkbox14 {
            flex: 1;
            align-self: center;
          }
          .test-sport-card-checkbox15 {
            flex: 1;
            align-self: center;
          }
          .test-sport-card-event3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            min-height: 24px;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: row;
            justify-content: center;
          }
          .test-sport-card-text16 {
            width: 200px;
            height: auto;
            align-self: center;
            text-align: left;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-halfunit);
          }
          .test-sport-card-checkbox16 {
            flex: 1;
            align-self: center;
          }
          .test-sport-card-checkbox17 {
            flex: 1;
            align-self: center;
          }
          .test-sport-card-checkbox18 {
            flex: 1;
            align-self: center;
          }
          .test-sport-card-event4 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            min-height: 24px;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: row;
            justify-content: center;
          }
          .test-sport-card-text17 {
            width: 200px;
            height: auto;
            align-self: center;
            text-align: left;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-halfunit);
          }
          .test-sport-card-checkbox19 {
            flex: 1;
            align-self: center;
          }
          .test-sport-card-checkbox20 {
            flex: 1;
            align-self: center;
          }
          .test-sport-card-checkbox21 {
            flex: 1;
            align-self: center;
          }
          .test-sport-card-event5 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            min-height: 24px;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: row;
            justify-content: center;
          }
          .test-sport-card-text18 {
            width: 200px;
            height: auto;
            align-self: center;
            text-align: left;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-halfunit);
          }
          .test-sport-card-checkbox22 {
            flex: 1;
            align-self: center;
          }
          .test-sport-card-checkbox23 {
            flex: 1;
            align-self: center;
          }
          .test-sport-card-checkbox24 {
            flex: 1;
            align-self: center;
          }
          .test-sport-card-container-button {
            flex: 0;
            display: flex;
            align-self: center;
            margin-top: auto;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .test-sport-card-price {
            flex: 0 0 auto;
            width: auto;
            height: 24px;
            display: flex;
            align-self: flex-start;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 0px;
            flex-direction: row;
            justify-content: center;
          }
          .test-sport-card-text19 {
            width: auto;
            height: auto;
            align-self: center;
            text-align: left;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-halfunit);
          }
          .test-sport-card-text20 {
            width: auto;
            align-self: center;
          }
          .test-sport-card-button {
            margin: var(--dl-layout-space-halfunit);
            align-self: center;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-buttonradius);
            background-color: #bf4408;
          }
          .test-sport-card-text21 {
            color: #ffffff;
          }
          .test-sport-card-text22 {
            display: inline-block;
          }
          .test-sport-card-text23 {
            display: inline-block;
          }
          .test-sport-card-text24 {
            display: inline-block;
          }
          .test-sport-card-text25 {
            display: inline-block;
          }
          .test-sport-card-text26 {
            display: inline-block;
          }
          .test-sport-card-text27 {
            display: inline-block;
          }
          .test-sport-card-text28 {
            display: inline-block;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
          }
          .test-sport-card-text29 {
            display: inline-block;
          }
          .test-sport-card-text30 {
            display: inline-block;
          }
          .test-sport-card-text31 {
            display: inline-block;
          }
          .test-sport-card-text32 {
            display: inline-block;
          }
          .test-sport-card-text33 {
            display: inline-block;
          }
          .test-sport-cardroot-class-name {
            width: auto;
          }
          .test-sport-cardroot-class-name1 {
            width: auto;
          }
          .test-sport-cardroot-class-name2 {
            width: auto;
            align-self: center;
          }
          .test-sport-cardroot-class-name3 {
            flex: 1 1 calc(25% - 16px);
          }
          .test-sport-cardroot-class-name4 {
            flex: 1 1 calc(25% - 16px);
          }
          .test-sport-cardroot-class-name5 {
            flex: 1 1 calc(25% - 16px);
          }
          .test-sport-cardroot-class-name6 {
            flex: 1 1 calc(25% - 16px);
          }
          .test-sport-cardroot-class-name7 {
            flex: 1 1 calc(25% - 16px);
          }
          .test-sport-cardroot-class-name8 {
            flex: 1 1 calc(25% - 16px);
          }
          .test-sport-cardroot-class-name9 {
            flex: 1 1 calc(25% - 16px);
          }
          .test-sport-cardroot-class-name10 {
            width: auto;
            align-self: center;
          }
          .test-sport-cardroot-class-name11 {
            width: auto;
            align-self: center;
          }
          .test-sport-cardroot-class-name12 {
            width: auto;
            align-self: center;
          }
          @media (max-width: 479px) {
            .test-sport-card-text10 {
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
            }
            .test-sport-card-text28 {
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
            }
            .test-sport-cardroot-class-name2 {
              align-self: flex-start;
            }
            .test-sport-cardroot-class-name10 {
              align-self: flex-start;
            }
            .test-sport-cardroot-class-name11 {
              align-self: flex-start;
            }
            .test-sport-cardroot-class-name12 {
              align-self: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

TestSportCard.defaultProps = {
  text2111: undefined,
  text232: undefined,
  text233: undefined,
  text21: undefined,
  text4: undefined,
  text231: undefined,
  text2: undefined,
  text2311: undefined,
  text23: undefined,
  button: undefined,
  rootClassName: '',
  text234: undefined,
  text211: undefined,
}

TestSportCard.propTypes = {
  text2111: PropTypes.element,
  text232: PropTypes.element,
  text233: PropTypes.element,
  text21: PropTypes.element,
  text4: PropTypes.element,
  text231: PropTypes.element,
  text2: PropTypes.element,
  text2311: PropTypes.element,
  text23: PropTypes.element,
  button: PropTypes.element,
  rootClassName: PropTypes.string,
  text234: PropTypes.element,
  text211: PropTypes.element,
}

export default TestSportCard
