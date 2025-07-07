import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Features11 from '../components/features11'

const TestNewClass = (props) => {
  return (
    <>
      <div className="test-new-class-container">
        <Head>
          <title>TestNewClass - Lottery ver.1</title>
          <meta property="og:title" content="TestNewClass - Lottery ver.1" />
        </Head>
        <Features11
          slogan={
            <Fragment>
              <span className="test-new-class-text10">Play, Win, Repeat!</span>
            </Fragment>
          }
          mainAction={
            <Fragment>
              <span className="test-new-class-text11">Play Now</span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="test-new-class-text12">Exciting Features</span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="test-new-class-text13">
                Instant AAA Lotteries
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="test-new-class-text14">
                Classic Draw Lotteries
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="test-new-class-text15">Sports Lotteries</span>
            </Fragment>
          }
          rootClassName="features11root-class-name"
          secondaryAction={
            <Fragment>
              <span className="test-new-class-text16">Learn More</span>
            </Fragment>
          }
          sectionDescription={
            <Fragment>
              <span className="test-new-class-text17">
                Explore the amazing features that make our platform stand out
                from the rest.
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="test-new-class-text18">
                Participate in quick and thrilling instant lotteries for instant
                wins.
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="test-new-class-text19">
                Experience the traditional draw lotteries with big jackpot
                prizes up for grabs.
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="test-new-class-text20">
                Engage in sports lotteries where your knowledge can lead you to
                exciting wins.
              </span>
            </Fragment>
          }
        ></Features11>
      </div>
      <style jsx>
        {`
          .test-new-class-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .test-new-class-text10 {
            display: inline-block;
          }
          .test-new-class-text11 {
            display: inline-block;
          }
          .test-new-class-text12 {
            display: inline-block;
          }
          .test-new-class-text13 {
            display: inline-block;
          }
          .test-new-class-text14 {
            display: inline-block;
          }
          .test-new-class-text15 {
            display: inline-block;
          }
          .test-new-class-text16 {
            display: inline-block;
          }
          .test-new-class-text17 {
            display: inline-block;
          }
          .test-new-class-text18 {
            display: inline-block;
          }
          .test-new-class-text19 {
            display: inline-block;
          }
          .test-new-class-text20 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default TestNewClass
