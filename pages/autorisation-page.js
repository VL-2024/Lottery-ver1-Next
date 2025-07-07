import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import LogINVer1ForTestPage from '../components/log-in-ver1-for-test-page'

const AutorisationPage = (props) => {
  return (
    <>
      <div className="autorisation-page-container">
        <Head>
          <title>AutorisationPage - Lottery ver.1</title>
          <meta
            property="og:title"
            content="AutorisationPage - Lottery ver.1"
          />
        </Head>
        <LogINVer1ForTestPage
          text={
            <Fragment>
              <span className="autorisation-page-text1">Номер телефона</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="autorisation-page-text2">
                Мы отправим код подтверждения на указанный номер.
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="autorisation-page-text3">Код из СМС</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="autorisation-page-text4">Пароль</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="autorisation-page-text5">Войти по СМС</span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="autorisation-page-text6">Войти по паролю</span>
            </Fragment>
          }
          button1={
            <Fragment>
              <span className="autorisation-page-text7">Продолжить</span>
            </Fragment>
          }
          button2={
            <Fragment>
              <span className="autorisation-page-text8">Продолжить</span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="autorisation-page-text9">Вход в аккаунт</span>
            </Fragment>
          }
        ></LogINVer1ForTestPage>
      </div>
      <style jsx>
        {`
          .autorisation-page-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .autorisation-page-text1 {
            display: inline-block;
          }
          .autorisation-page-text2 {
            display: inline-block;
            font-size: 12px;
            box-shadow: rgb(212, 212, 212) 5px 5px 10px 0px,
              rgb(212, 212, 212) 5px 5px 10px 0px;
            text-transform: capitalize;
          }
          .autorisation-page-text3 {
            display: inline-block;
          }
          .autorisation-page-text4 {
            display: inline-block;
          }
          .autorisation-page-text5 {
            display: inline-block;
          }
          .autorisation-page-text6 {
            display: inline-block;
          }
          .autorisation-page-text7 {
            display: inline-block;
          }
          .autorisation-page-text8 {
            display: inline-block;
          }
          .autorisation-page-text9 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default AutorisationPage
