import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import TestSportCard from './test-sport-card'

const SportCardGridContainer = (props) => {
  return (
    <>
      <div
        className={`sport-card-grid-container-container ${props.rootClassName} `}
      >
        <TestSportCard
          text2={
            <Fragment>
              <span className="sport-card-grid-container-text10">Футбол</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="sport-card-grid-container-text11">100</span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="sport-card-grid-container-text12">
                Сделать прогноз
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="sport-card-grid-container-text13">1</span>
            </Fragment>
          }
          text23={
            <Fragment>
              <span className="sport-card-grid-container-text14">
                Реал (М) - Ювентус 22:00 01.07.2025
              </span>
            </Fragment>
          }
          text211={
            <Fragment>
              <span className="sport-card-grid-container-text15">Х</span>
            </Fragment>
          }
          text231={
            <Fragment>
              <span className="sport-card-grid-container-text16">
                Paris Saint-Germain - Bayern Munich 19:00 05.07.2025
              </span>
            </Fragment>
          }
          text232={
            <Fragment>
              <span className="sport-card-grid-container-text17">
                SE Palmeiras - Chelsea 04:00 05.07.2025
              </span>
            </Fragment>
          }
          text233={
            <Fragment>
              <span className="sport-card-grid-container-text18">
                Fluminense - Al Hilal Riyadh 22:00 04.07.25
              </span>
            </Fragment>
          }
          text234={
            <Fragment>
              <span className="sport-card-grid-container-text19">
                Borussia Dortmund - CF Monterrey 04:00 02.07.2025
              </span>
            </Fragment>
          }
          text2111={
            <Fragment>
              <span className="sport-card-grid-container-text20">2</span>
            </Fragment>
          }
          text2311={
            <Fragment>
              <span className="sport-card-grid-container-text21">
                Цена билета
              </span>
            </Fragment>
          }
          rootClassName="test-sport-cardroot-class-name4"
        ></TestSportCard>
        <TestSportCard
          text2={
            <Fragment>
              <span className="sport-card-grid-container-text22">Теннис</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="sport-card-grid-container-text23">100</span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="sport-card-grid-container-text24">
                Сделать прогноз
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="sport-card-grid-container-text25">1</span>
            </Fragment>
          }
          text23={
            <Fragment>
              <span className="sport-card-grid-container-text26">
                Maya Joint - Liudmila Samsonova 14:40
              </span>
            </Fragment>
          }
          text211={
            <Fragment>
              <span className="sport-card-grid-container-text27">Х</span>
            </Fragment>
          }
          text231={
            <Fragment>
              <span className="sport-card-grid-container-text28">
                Barbora Krejcikova - Alexandra Eala 15:30
              </span>
            </Fragment>
          }
          text232={
            <Fragment>
              <span className="sport-card-grid-container-text29">
                Barbora Krejcikova - Alexandra Eala 15:30
              </span>
            </Fragment>
          }
          text233={
            <Fragment>
              <span className="sport-card-grid-container-text30">
                Barbora Krejcikova - Alexandra Eala 15:30
              </span>
            </Fragment>
          }
          text234={
            <Fragment>
              <span className="sport-card-grid-container-text31">
                Suzan Lamens - Iva Jovic 13:00
              </span>
            </Fragment>
          }
          text2111={
            <Fragment>
              <span className="sport-card-grid-container-text32">2</span>
            </Fragment>
          }
          text2311={
            <Fragment>
              <span className="sport-card-grid-container-text33">
                Цена билета
              </span>
            </Fragment>
          }
          rootClassName="test-sport-cardroot-class-name3"
        ></TestSportCard>
        <TestSportCard
          text2={
            <Fragment>
              <span className="sport-card-grid-container-text34">
                Баскетбол
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="sport-card-grid-container-text35">100</span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="sport-card-grid-container-text36">
                Сделать прогноз
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="sport-card-grid-container-text37">1</span>
            </Fragment>
          }
          text23={
            <Fragment>
              <span className="sport-card-grid-container-text38">
                Barbora Krejcikova - Alexandra Eala 15:30
              </span>
            </Fragment>
          }
          text211={
            <Fragment>
              <span className="sport-card-grid-container-text39">Х</span>
            </Fragment>
          }
          text231={
            <Fragment>
              <span className="sport-card-grid-container-text40">
                Barbora Krejcikova - Alexandra Eala 15:30Barbora Krejcikova -
                Alexandra Eala 15:30
              </span>
            </Fragment>
          }
          text232={
            <Fragment>
              <span className="sport-card-grid-container-text41">
                Barbora Krejcikova - Alexandra Eala 15:30
              </span>
            </Fragment>
          }
          text233={
            <Fragment>
              <span className="sport-card-grid-container-text42">
                Barbora Krejcikova - Alexandra Eala 15:30
              </span>
            </Fragment>
          }
          text234={
            <Fragment>
              <span className="sport-card-grid-container-text43">
                Barbora Krejcikova - Alexandra Eala 15:30
              </span>
            </Fragment>
          }
          text2111={
            <Fragment>
              <span className="sport-card-grid-container-text44">2</span>
            </Fragment>
          }
          text2311={
            <Fragment>
              <span className="sport-card-grid-container-text45">
                Цена билета
              </span>
            </Fragment>
          }
          rootClassName="test-sport-cardroot-class-name5"
        ></TestSportCard>
        <TestSportCard
          text2={
            <Fragment>
              <span className="sport-card-grid-container-text46">Хоккей</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="sport-card-grid-container-text47">100</span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="sport-card-grid-container-text48">
                Сделать прогноз
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="sport-card-grid-container-text49">1</span>
            </Fragment>
          }
          text23={
            <Fragment>
              <span className="sport-card-grid-container-text50">
                Barbora Krejcikova - Alexandra Eala 15:30
              </span>
            </Fragment>
          }
          text211={
            <Fragment>
              <span className="sport-card-grid-container-text51">Х</span>
            </Fragment>
          }
          text231={
            <Fragment>
              <span className="sport-card-grid-container-text52">
                Paris Saint-Germain - Bayern Munich 19:00 05.07.2025
              </span>
            </Fragment>
          }
          text232={
            <Fragment>
              <span className="sport-card-grid-container-text53">
                Barbora Krejcikova - Alexandra Eala 15:30
              </span>
            </Fragment>
          }
          text233={
            <Fragment>
              <span className="sport-card-grid-container-text54">
                Barbora Krejcikova - Alexandra Eala 15:30
              </span>
            </Fragment>
          }
          text234={
            <Fragment>
              <span className="sport-card-grid-container-text55">
                Barbora Krejcikova - Alexandra Eala 15:30Barbora Krejcikova -
                Alexandra Eala 15:30
              </span>
            </Fragment>
          }
          text2111={
            <Fragment>
              <span className="sport-card-grid-container-text56">2</span>
            </Fragment>
          }
          text2311={
            <Fragment>
              <span className="sport-card-grid-container-text57">
                Цена билета
              </span>
            </Fragment>
          }
          rootClassName="test-sport-cardroot-class-name6"
        ></TestSportCard>
        <TestSportCard
          text2={
            <Fragment>
              <span className="sport-card-grid-container-text58">Рэгби</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="sport-card-grid-container-text59">100</span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="sport-card-grid-container-text60">
                Сделать прогноз
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="sport-card-grid-container-text61">1</span>
            </Fragment>
          }
          text23={
            <Fragment>
              <span className="sport-card-grid-container-text62">
                Barbora Krejcikova - Alexandra Eala 15:30
              </span>
            </Fragment>
          }
          text211={
            <Fragment>
              <span className="sport-card-grid-container-text63">Х</span>
            </Fragment>
          }
          text231={
            <Fragment>
              <span className="sport-card-grid-container-text64">
                Paris Saint-Germain - Bayern Munich 19:00 05.07.2025
              </span>
            </Fragment>
          }
          text232={
            <Fragment>
              <span className="sport-card-grid-container-text65">
                Barbora Krejcikova - Alexandra Eala 15:30
              </span>
            </Fragment>
          }
          text233={
            <Fragment>
              <span className="sport-card-grid-container-text66">
                Barbora Krejcikova - Alexandra Eala 15:30
              </span>
            </Fragment>
          }
          text234={
            <Fragment>
              <span className="sport-card-grid-container-text67">
                VfB Stuttgart - Bayern Munich 21:30
              </span>
            </Fragment>
          }
          text2111={
            <Fragment>
              <span className="sport-card-grid-container-text68">2</span>
            </Fragment>
          }
          text2311={
            <Fragment>
              <span className="sport-card-grid-container-text69">
                Цена билета
              </span>
            </Fragment>
          }
          rootClassName="test-sport-cardroot-class-name9"
        ></TestSportCard>
        <TestSportCard
          text2={
            <Fragment>
              <span className="sport-card-grid-container-text70">Волейбол</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="sport-card-grid-container-text71">100</span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="sport-card-grid-container-text72">
                Сделать прогноз
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="sport-card-grid-container-text73">1</span>
            </Fragment>
          }
          text23={
            <Fragment>
              <span className="sport-card-grid-container-text74">
                VfB Stuttgart - Bayern Munich 21:30
              </span>
            </Fragment>
          }
          text211={
            <Fragment>
              <span className="sport-card-grid-container-text75">Х</span>
            </Fragment>
          }
          text231={
            <Fragment>
              <span className="sport-card-grid-container-text76">
                Paris Saint-Germain - Bayern Munich 19:00 05.07.2025
              </span>
            </Fragment>
          }
          text232={
            <Fragment>
              <span className="sport-card-grid-container-text77">
                VfB Stuttgart - Bayern Munich 21:30
              </span>
            </Fragment>
          }
          text233={
            <Fragment>
              <span className="sport-card-grid-container-text78">
                VfB Stuttgart - Bayern Munich 21:30
              </span>
            </Fragment>
          }
          text234={
            <Fragment>
              <span className="sport-card-grid-container-text79">
                Barbora Krejcikova - Alexandra Eala 15:30
              </span>
            </Fragment>
          }
          text2111={
            <Fragment>
              <span className="sport-card-grid-container-text80">2</span>
            </Fragment>
          }
          text2311={
            <Fragment>
              <span className="sport-card-grid-container-text81">
                Цена билета
              </span>
            </Fragment>
          }
          rootClassName="test-sport-cardroot-class-name7"
        ></TestSportCard>
        <TestSportCard
          text2={
            <Fragment>
              <span className="sport-card-grid-container-text82">Биатлон</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="sport-card-grid-container-text83">100</span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="sport-card-grid-container-text84">
                Сделать прогноз
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="sport-card-grid-container-text85">1</span>
            </Fragment>
          }
          text23={
            <Fragment>
              <span className="sport-card-grid-container-text86">
                VfB Stuttgart - Bayern Munich 21:30
              </span>
            </Fragment>
          }
          text211={
            <Fragment>
              <span className="sport-card-grid-container-text87">Х</span>
            </Fragment>
          }
          text231={
            <Fragment>
              <span className="sport-card-grid-container-text88">
                Paris Saint-Germain - Bayern Munich 19:00 05.07.2025
              </span>
            </Fragment>
          }
          text232={
            <Fragment>
              <span className="sport-card-grid-container-text89">
                VfB Stuttgart - Bayern Munich 21:30
              </span>
            </Fragment>
          }
          text233={
            <Fragment>
              <span className="sport-card-grid-container-text90">
                VfB Stuttgart - Bayern Munich 21:30
              </span>
            </Fragment>
          }
          text234={
            <Fragment>
              <span className="sport-card-grid-container-text91">
                Barbora Krejcikova - Alexandra Eala 15:30
              </span>
            </Fragment>
          }
          text2111={
            <Fragment>
              <span className="sport-card-grid-container-text92">2</span>
            </Fragment>
          }
          text2311={
            <Fragment>
              <span className="sport-card-grid-container-text93">
                Цена билета
              </span>
            </Fragment>
          }
          rootClassName="test-sport-cardroot-class-name8"
        ></TestSportCard>
      </div>
      <style jsx>
        {`
          .sport-card-grid-container-container {
            gap: 16px;
            width: 90vx;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-layout-space-unit);
            margin-left: auto;
            margin-right: auto;
            margin-bottom: auto;
            justify-content: center;
          }
          .sport-card-grid-container-text10 {
            display: inline-block;
            font-style: normal;
            font-weight: 700;
          }
          .sport-card-grid-container-text11 {
            display: inline-block;
          }
          .sport-card-grid-container-text12 {
            display: inline-block;
          }
          .sport-card-grid-container-text13 {
            display: inline-block;
          }
          .sport-card-grid-container-text14 {
            display: inline-block;
          }
          .sport-card-grid-container-text15 {
            display: inline-block;
          }
          .sport-card-grid-container-text16 {
            display: inline-block;
          }
          .sport-card-grid-container-text17 {
            display: inline-block;
          }
          .sport-card-grid-container-text18 {
            display: inline-block;
          }
          .sport-card-grid-container-text19 {
            display: inline-block;
          }
          .sport-card-grid-container-text20 {
            display: inline-block;
          }
          .sport-card-grid-container-text21 {
            display: inline-block;
          }
          .sport-card-grid-container-text22 {
            display: inline-block;
            font-style: normal;
            font-weight: 700;
          }
          .sport-card-grid-container-text23 {
            display: inline-block;
          }
          .sport-card-grid-container-text24 {
            display: inline-block;
          }
          .sport-card-grid-container-text25 {
            display: inline-block;
          }
          .sport-card-grid-container-text26 {
            display: inline-block;
          }
          .sport-card-grid-container-text27 {
            display: inline-block;
          }
          .sport-card-grid-container-text28 {
            display: inline-block;
          }
          .sport-card-grid-container-text29 {
            display: inline-block;
          }
          .sport-card-grid-container-text30 {
            display: inline-block;
          }
          .sport-card-grid-container-text31 {
            display: inline-block;
          }
          .sport-card-grid-container-text32 {
            display: inline-block;
          }
          .sport-card-grid-container-text33 {
            display: inline-block;
          }
          .sport-card-grid-container-text34 {
            display: inline-block;
            font-style: normal;
            font-weight: 700;
          }
          .sport-card-grid-container-text35 {
            display: inline-block;
          }
          .sport-card-grid-container-text36 {
            display: inline-block;
          }
          .sport-card-grid-container-text37 {
            display: inline-block;
          }
          .sport-card-grid-container-text38 {
            display: inline-block;
          }
          .sport-card-grid-container-text39 {
            display: inline-block;
          }
          .sport-card-grid-container-text40 {
            display: inline-block;
          }
          .sport-card-grid-container-text41 {
            display: inline-block;
          }
          .sport-card-grid-container-text42 {
            display: inline-block;
          }
          .sport-card-grid-container-text43 {
            display: inline-block;
          }
          .sport-card-grid-container-text44 {
            display: inline-block;
          }
          .sport-card-grid-container-text45 {
            display: inline-block;
          }
          .sport-card-grid-container-text46 {
            display: inline-block;
            font-style: normal;
            font-weight: 700;
          }
          .sport-card-grid-container-text47 {
            display: inline-block;
          }
          .sport-card-grid-container-text48 {
            display: inline-block;
          }
          .sport-card-grid-container-text49 {
            display: inline-block;
          }
          .sport-card-grid-container-text50 {
            display: inline-block;
          }
          .sport-card-grid-container-text51 {
            display: inline-block;
          }
          .sport-card-grid-container-text52 {
            display: inline-block;
          }
          .sport-card-grid-container-text53 {
            display: inline-block;
          }
          .sport-card-grid-container-text54 {
            display: inline-block;
          }
          .sport-card-grid-container-text55 {
            display: inline-block;
          }
          .sport-card-grid-container-text56 {
            display: inline-block;
          }
          .sport-card-grid-container-text57 {
            display: inline-block;
          }
          .sport-card-grid-container-text58 {
            display: inline-block;
            font-style: normal;
            font-weight: 700;
          }
          .sport-card-grid-container-text59 {
            display: inline-block;
          }
          .sport-card-grid-container-text60 {
            display: inline-block;
          }
          .sport-card-grid-container-text61 {
            display: inline-block;
          }
          .sport-card-grid-container-text62 {
            display: inline-block;
          }
          .sport-card-grid-container-text63 {
            display: inline-block;
          }
          .sport-card-grid-container-text64 {
            display: inline-block;
          }
          .sport-card-grid-container-text65 {
            display: inline-block;
          }
          .sport-card-grid-container-text66 {
            display: inline-block;
          }
          .sport-card-grid-container-text67 {
            display: inline-block;
          }
          .sport-card-grid-container-text68 {
            display: inline-block;
          }
          .sport-card-grid-container-text69 {
            display: inline-block;
          }
          .sport-card-grid-container-text70 {
            display: inline-block;
            font-style: normal;
            font-weight: 700;
          }
          .sport-card-grid-container-text71 {
            display: inline-block;
          }
          .sport-card-grid-container-text72 {
            display: inline-block;
          }
          .sport-card-grid-container-text73 {
            display: inline-block;
          }
          .sport-card-grid-container-text74 {
            display: inline-block;
          }
          .sport-card-grid-container-text75 {
            display: inline-block;
          }
          .sport-card-grid-container-text76 {
            display: inline-block;
          }
          .sport-card-grid-container-text77 {
            display: inline-block;
          }
          .sport-card-grid-container-text78 {
            display: inline-block;
          }
          .sport-card-grid-container-text79 {
            display: inline-block;
          }
          .sport-card-grid-container-text80 {
            display: inline-block;
          }
          .sport-card-grid-container-text81 {
            display: inline-block;
          }
          .sport-card-grid-container-text82 {
            display: inline-block;
            font-style: normal;
            font-weight: 700;
          }
          .sport-card-grid-container-text83 {
            display: inline-block;
          }
          .sport-card-grid-container-text84 {
            display: inline-block;
          }
          .sport-card-grid-container-text85 {
            display: inline-block;
          }
          .sport-card-grid-container-text86 {
            display: inline-block;
          }
          .sport-card-grid-container-text87 {
            display: inline-block;
          }
          .sport-card-grid-container-text88 {
            display: inline-block;
          }
          .sport-card-grid-container-text89 {
            display: inline-block;
          }
          .sport-card-grid-container-text90 {
            display: inline-block;
          }
          .sport-card-grid-container-text91 {
            display: inline-block;
          }
          .sport-card-grid-container-text92 {
            display: inline-block;
          }
          .sport-card-grid-container-text93 {
            display: inline-block;
          }
          @media (max-width: 479px) {
            .sport-card-grid-container-text10 {
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
            }
            .sport-card-grid-container-text22 {
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
            }
            .sport-card-grid-container-text34 {
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
            }
            .sport-card-grid-container-text46 {
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
            }
            .sport-card-grid-container-text58 {
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
            }
            .sport-card-grid-container-text70 {
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
            }
            .sport-card-grid-container-text82 {
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
            }
          }
        `}
      </style>
    </>
  )
}

SportCardGridContainer.defaultProps = {
  rootClassName: '',
}

SportCardGridContainer.propTypes = {
  rootClassName: PropTypes.string,
}

export default SportCardGridContainer
