import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import TestSportCard from './test-sport-card'

const SportLotterySection = (props) => {
  return (
    <>
      <div
        id="sportlottery"
        className={`sport-lottery-section-container1 ${props.rootClassName} `}
      >
        <div className="sport-lottery-section-container2">
          <h1 className="sport-lottery-section-text10 thq-heading-2">
            {props.heading ?? (
              <Fragment>
                <span className="sport-lottery-section-text87">
                  Спортивные лотереи
                </span>
              </Fragment>
            )}
          </h1>
          <span className="sport-lottery-section-text11">
            {props.text ?? (
              <Fragment>
                <span className="sport-lottery-section-text86">
                  Прогнозируй спорт — выигрывай как в лотерее
                </span>
              </Fragment>
            )}
          </span>
          <span className="sport-lottery-section-text12">
            {props.text1 ?? (
              <Fragment>
                <span className="sport-lottery-section-text85">
                  Выбери исходы спортивных матчей, используй интуицию и знание
                  спорта, чтобы забрать главный приз
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="sport-lottery-section-container3">
          <TestSportCard
            text2={
              <Fragment>
                <span className="sport-lottery-section-text13">Футбол</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="sport-lottery-section-text14">100</span>
              </Fragment>
            }
            button={
              <Fragment>
                <span className="sport-lottery-section-text15">
                  Сделать прогноз
                </span>
              </Fragment>
            }
            text21={
              <Fragment>
                <span className="sport-lottery-section-text16">1</span>
              </Fragment>
            }
            text23={
              <Fragment>
                <span className="sport-lottery-section-text17">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            }
            text211={
              <Fragment>
                <span className="sport-lottery-section-text18">Х</span>
              </Fragment>
            }
            text231={
              <Fragment>
                <span className="sport-lottery-section-text19">
                  Paris Saint-Germain - Bayern Munich 19:00 05.07.2025
                </span>
              </Fragment>
            }
            text232={
              <Fragment>
                <span className="sport-lottery-section-text20">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            }
            text233={
              <Fragment>
                <span className="sport-lottery-section-text21">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            }
            text234={
              <Fragment>
                <span className="sport-lottery-section-text22">
                  fthfthfhfh fh t t ytyy eryt ee er 
                </span>
              </Fragment>
            }
            text2111={
              <Fragment>
                <span className="sport-lottery-section-text23">2</span>
              </Fragment>
            }
            text2311={
              <Fragment>
                <span className="sport-lottery-section-text24">
                  Цена билета
                </span>
              </Fragment>
            }
            rootClassName="test-sport-cardroot-class-name"
          ></TestSportCard>
          <TestSportCard
            text2={
              <Fragment>
                <span className="sport-lottery-section-text25">Теннис</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="sport-lottery-section-text26">100</span>
              </Fragment>
            }
            button={
              <Fragment>
                <span className="sport-lottery-section-text27">
                  Сделать прогноз
                </span>
              </Fragment>
            }
            text21={
              <Fragment>
                <span className="sport-lottery-section-text28">1</span>
              </Fragment>
            }
            text23={
              <Fragment>
                <span className="sport-lottery-section-text29">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            }
            text211={
              <Fragment>
                <span className="sport-lottery-section-text30">Х</span>
              </Fragment>
            }
            text231={
              <Fragment>
                <span className="sport-lottery-section-text31">
                  Paris Saint-Germain - Bayern Munich 19:00 05.07.2025
                </span>
              </Fragment>
            }
            text232={
              <Fragment>
                <span className="sport-lottery-section-text32">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            }
            text233={
              <Fragment>
                <span className="sport-lottery-section-text33">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            }
            text234={
              <Fragment>
                <span className="sport-lottery-section-text34">
                  Barbora Krejcikova - Alexandra Eala 15:30
                </span>
              </Fragment>
            }
            text2111={
              <Fragment>
                <span className="sport-lottery-section-text35">2</span>
              </Fragment>
            }
            text2311={
              <Fragment>
                <span className="sport-lottery-section-text36">
                  Цена билета
                </span>
              </Fragment>
            }
            rootClassName="test-sport-cardroot-class-name1"
          ></TestSportCard>
          <TestSportCard
            text2={
              <Fragment>
                <span className="sport-lottery-section-text37">Баскетбол</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="sport-lottery-section-text38">100</span>
              </Fragment>
            }
            button={
              <Fragment>
                <span className="sport-lottery-section-text39">
                  Сделать прогноз
                </span>
              </Fragment>
            }
            text21={
              <Fragment>
                <span className="sport-lottery-section-text40">1</span>
              </Fragment>
            }
            text23={
              <Fragment>
                <span className="sport-lottery-section-text41">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            }
            text211={
              <Fragment>
                <span className="sport-lottery-section-text42">Х</span>
              </Fragment>
            }
            text231={
              <Fragment>
                <span className="sport-lottery-section-text43">
                  Paris Saint-Germain - Bayern Munich 19:00 05.07.2025
                </span>
              </Fragment>
            }
            text232={
              <Fragment>
                <span className="sport-lottery-section-text44">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            }
            text233={
              <Fragment>
                <span className="sport-lottery-section-text45">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            }
            text234={
              <Fragment>
                <span className="sport-lottery-section-text46">
                  Barbora Krejcikova - Alexandra Eala 15:30
                </span>
              </Fragment>
            }
            text2111={
              <Fragment>
                <span className="sport-lottery-section-text47">2</span>
              </Fragment>
            }
            text2311={
              <Fragment>
                <span className="sport-lottery-section-text48">
                  Цена билета
                </span>
              </Fragment>
            }
            rootClassName="test-sport-cardroot-class-name2"
          ></TestSportCard>
          <TestSportCard
            text2={
              <Fragment>
                <span className="sport-lottery-section-text49">Хоккей</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="sport-lottery-section-text50">100</span>
              </Fragment>
            }
            button={
              <Fragment>
                <span className="sport-lottery-section-text51">
                  Сделать прогноз
                </span>
              </Fragment>
            }
            text21={
              <Fragment>
                <span className="sport-lottery-section-text52">1</span>
              </Fragment>
            }
            text23={
              <Fragment>
                <span className="sport-lottery-section-text53">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            }
            text211={
              <Fragment>
                <span className="sport-lottery-section-text54">Х</span>
              </Fragment>
            }
            text231={
              <Fragment>
                <span className="sport-lottery-section-text55">
                  Paris Saint-Germain - Bayern Munich 19:00 05.07.2025
                </span>
              </Fragment>
            }
            text232={
              <Fragment>
                <span className="sport-lottery-section-text56">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            }
            text233={
              <Fragment>
                <span className="sport-lottery-section-text57">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            }
            text234={
              <Fragment>
                <span className="sport-lottery-section-text58">
                  Barbora Krejcikova - Alexandra Eala 15:30
                </span>
              </Fragment>
            }
            text2111={
              <Fragment>
                <span className="sport-lottery-section-text59">2</span>
              </Fragment>
            }
            text2311={
              <Fragment>
                <span className="sport-lottery-section-text60">
                  Цена билета
                </span>
              </Fragment>
            }
            rootClassName="test-sport-cardroot-class-name11"
          ></TestSportCard>
          <TestSportCard
            text2={
              <Fragment>
                <span className="sport-lottery-section-text61">Регби</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="sport-lottery-section-text62">100</span>
              </Fragment>
            }
            button={
              <Fragment>
                <span className="sport-lottery-section-text63">
                  Сделать прогноз
                </span>
              </Fragment>
            }
            text21={
              <Fragment>
                <span className="sport-lottery-section-text64">1</span>
              </Fragment>
            }
            text23={
              <Fragment>
                <span className="sport-lottery-section-text65">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            }
            text211={
              <Fragment>
                <span className="sport-lottery-section-text66">Х</span>
              </Fragment>
            }
            text231={
              <Fragment>
                <span className="sport-lottery-section-text67">
                  Paris Saint-Germain - Bayern Munich 19:00 05.07.2025
                </span>
              </Fragment>
            }
            text232={
              <Fragment>
                <span className="sport-lottery-section-text68">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            }
            text233={
              <Fragment>
                <span className="sport-lottery-section-text69">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            }
            text234={
              <Fragment>
                <span className="sport-lottery-section-text70">
                  Barbora Krejcikova - Alexandra Eala 15:30
                </span>
              </Fragment>
            }
            text2111={
              <Fragment>
                <span className="sport-lottery-section-text71">2</span>
              </Fragment>
            }
            text2311={
              <Fragment>
                <span className="sport-lottery-section-text72">
                  Цена билета
                </span>
              </Fragment>
            }
            rootClassName="test-sport-cardroot-class-name12"
          ></TestSportCard>
          <TestSportCard
            text2={
              <Fragment>
                <span className="sport-lottery-section-text73">Волейбол</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="sport-lottery-section-text74">100</span>
              </Fragment>
            }
            button={
              <Fragment>
                <span className="sport-lottery-section-text75">
                  Сделать прогноз
                </span>
              </Fragment>
            }
            text21={
              <Fragment>
                <span className="sport-lottery-section-text76">1</span>
              </Fragment>
            }
            text23={
              <Fragment>
                <span className="sport-lottery-section-text77">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            }
            text211={
              <Fragment>
                <span className="sport-lottery-section-text78">Х</span>
              </Fragment>
            }
            text231={
              <Fragment>
                <span className="sport-lottery-section-text79">
                  Paris Saint-Germain - Bayern Munich 19:00 05.07.2025
                </span>
              </Fragment>
            }
            text232={
              <Fragment>
                <span className="sport-lottery-section-text80">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            }
            text233={
              <Fragment>
                <span className="sport-lottery-section-text81">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            }
            text234={
              <Fragment>
                <span className="sport-lottery-section-text82">
                  Barbora Krejcikova - Alexandra Eala 15:30
                </span>
              </Fragment>
            }
            text2111={
              <Fragment>
                <span className="sport-lottery-section-text83">2</span>
              </Fragment>
            }
            text2311={
              <Fragment>
                <span className="sport-lottery-section-text84">
                  Цена билета
                </span>
              </Fragment>
            }
            rootClassName="test-sport-cardroot-class-name10"
          ></TestSportCard>
        </div>
      </div>
      <style jsx>
        {`
          .sport-lottery-section-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            margin-top: var(--dl-layout-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: column;
          }
          .sport-lottery-section-container2 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
          }
          .sport-lottery-section-text10 {
            align-self: center;
            text-align: center;
          }
          .sport-lottery-section-text11 {
            align-self: center;
            text-align: center;
          }
          .sport-lottery-section-text12 {
            align-self: center;
            text-align: center;
          }
          .sport-lottery-section-container3 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            display: flex;
            flex-wrap: wrap;
            align-self: center;
            align-items: flex-start;
            justify-content: center;
          }
          .sport-lottery-section-text13 {
            display: inline-block;
            font-style: normal;
            font-weight: 700;
          }
          .sport-lottery-section-text14 {
            display: inline-block;
          }
          .sport-lottery-section-text15 {
            display: inline-block;
          }
          .sport-lottery-section-text16 {
            display: inline-block;
          }
          .sport-lottery-section-text17 {
            display: inline-block;
          }
          .sport-lottery-section-text18 {
            display: inline-block;
          }
          .sport-lottery-section-text19 {
            display: inline-block;
          }
          .sport-lottery-section-text20 {
            display: inline-block;
          }
          .sport-lottery-section-text21 {
            display: inline-block;
          }
          .sport-lottery-section-text22 {
            display: inline-block;
          }
          .sport-lottery-section-text23 {
            display: inline-block;
          }
          .sport-lottery-section-text24 {
            display: inline-block;
          }
          .sport-lottery-section-text25 {
            display: inline-block;
            font-style: normal;
            font-weight: 700;
          }
          .sport-lottery-section-text26 {
            display: inline-block;
          }
          .sport-lottery-section-text27 {
            display: inline-block;
          }
          .sport-lottery-section-text28 {
            display: inline-block;
          }
          .sport-lottery-section-text29 {
            display: inline-block;
          }
          .sport-lottery-section-text30 {
            display: inline-block;
          }
          .sport-lottery-section-text31 {
            display: inline-block;
          }
          .sport-lottery-section-text32 {
            display: inline-block;
          }
          .sport-lottery-section-text33 {
            display: inline-block;
          }
          .sport-lottery-section-text34 {
            display: inline-block;
          }
          .sport-lottery-section-text35 {
            display: inline-block;
          }
          .sport-lottery-section-text36 {
            display: inline-block;
          }
          .sport-lottery-section-text37 {
            display: inline-block;
            font-style: normal;
            font-weight: 700;
          }
          .sport-lottery-section-text38 {
            display: inline-block;
          }
          .sport-lottery-section-text39 {
            display: inline-block;
          }
          .sport-lottery-section-text40 {
            display: inline-block;
          }
          .sport-lottery-section-text41 {
            display: inline-block;
          }
          .sport-lottery-section-text42 {
            display: inline-block;
          }
          .sport-lottery-section-text43 {
            display: inline-block;
          }
          .sport-lottery-section-text44 {
            display: inline-block;
          }
          .sport-lottery-section-text45 {
            display: inline-block;
          }
          .sport-lottery-section-text46 {
            display: inline-block;
          }
          .sport-lottery-section-text47 {
            display: inline-block;
          }
          .sport-lottery-section-text48 {
            display: inline-block;
          }
          .sport-lottery-section-text49 {
            display: inline-block;
            font-style: normal;
            font-weight: 700;
          }
          .sport-lottery-section-text50 {
            display: inline-block;
          }
          .sport-lottery-section-text51 {
            display: inline-block;
          }
          .sport-lottery-section-text52 {
            display: inline-block;
          }
          .sport-lottery-section-text53 {
            display: inline-block;
          }
          .sport-lottery-section-text54 {
            display: inline-block;
          }
          .sport-lottery-section-text55 {
            display: inline-block;
          }
          .sport-lottery-section-text56 {
            display: inline-block;
          }
          .sport-lottery-section-text57 {
            display: inline-block;
          }
          .sport-lottery-section-text58 {
            display: inline-block;
          }
          .sport-lottery-section-text59 {
            display: inline-block;
          }
          .sport-lottery-section-text60 {
            display: inline-block;
          }
          .sport-lottery-section-text61 {
            display: inline-block;
            font-style: normal;
            font-weight: 700;
          }
          .sport-lottery-section-text62 {
            display: inline-block;
          }
          .sport-lottery-section-text63 {
            display: inline-block;
          }
          .sport-lottery-section-text64 {
            display: inline-block;
          }
          .sport-lottery-section-text65 {
            display: inline-block;
          }
          .sport-lottery-section-text66 {
            display: inline-block;
          }
          .sport-lottery-section-text67 {
            display: inline-block;
          }
          .sport-lottery-section-text68 {
            display: inline-block;
          }
          .sport-lottery-section-text69 {
            display: inline-block;
          }
          .sport-lottery-section-text70 {
            display: inline-block;
          }
          .sport-lottery-section-text71 {
            display: inline-block;
          }
          .sport-lottery-section-text72 {
            display: inline-block;
          }
          .sport-lottery-section-text73 {
            display: inline-block;
            font-style: normal;
            font-weight: 700;
          }
          .sport-lottery-section-text74 {
            display: inline-block;
          }
          .sport-lottery-section-text75 {
            display: inline-block;
          }
          .sport-lottery-section-text76 {
            display: inline-block;
          }
          .sport-lottery-section-text77 {
            display: inline-block;
          }
          .sport-lottery-section-text78 {
            display: inline-block;
          }
          .sport-lottery-section-text79 {
            display: inline-block;
          }
          .sport-lottery-section-text80 {
            display: inline-block;
          }
          .sport-lottery-section-text81 {
            display: inline-block;
          }
          .sport-lottery-section-text82 {
            display: inline-block;
          }
          .sport-lottery-section-text83 {
            display: inline-block;
          }
          .sport-lottery-section-text84 {
            display: inline-block;
          }
          .sport-lottery-section-text85 {
            display: inline-block;
          }
          .sport-lottery-section-text86 {
            display: inline-block;
            font-size: 22px;
          }
          .sport-lottery-section-text87 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .sport-lottery-section-container2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .sport-lottery-section-text11 {
              font-size: 22px;
            }
            .sport-lottery-section-text12 {
              width: 90%;
              font-size: 22px;
            }
            .sport-lottery-section-text85 {
              font-size: 22px;
            }
          }
          @media (max-width: 479px) {
            .sport-lottery-section-container2 {
              width: 90%;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .sport-lottery-section-text12 {
              font-size: 22px;
            }
            .sport-lottery-section-text13 {
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
            }
            .sport-lottery-section-text25 {
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
            }
            .sport-lottery-section-text37 {
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
            }
            .sport-lottery-section-text49 {
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
            }
            .sport-lottery-section-text61 {
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
            }
            .sport-lottery-section-text73 {
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
            }
            .sport-lottery-section-text86 {
              font-size: 22px;
            }
          }
        `}
      </style>
    </>
  )
}

SportLotterySection.defaultProps = {
  text1: undefined,
  text: undefined,
  heading: undefined,
  rootClassName: '',
}

SportLotterySection.propTypes = {
  text1: PropTypes.element,
  text: PropTypes.element,
  heading: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default SportLotterySection
