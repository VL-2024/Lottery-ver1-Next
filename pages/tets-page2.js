import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const TetsPage2 = (props) => {
  return (
    <>
      <div className="tets-page2-container">
        <Head>
          <title>TetsPage2 - Lottery ver.1</title>
          <meta property="og:title" content="TetsPage2 - Lottery ver.1" />
        </Head>
      </div>
      <style jsx>
        {`
          .tets-page2-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default TetsPage2
