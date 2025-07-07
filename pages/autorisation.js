import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import FormAutorisation from '../components/form-autorisation'

const Autorisation = (props) => {
  return (
    <>
      <div className="autorisation-container">
        <Head>
          <title>Autorisation - Lottery ver.1</title>
          <meta property="og:title" content="Autorisation - Lottery ver.1" />
        </Head>
        <FormAutorisation></FormAutorisation>
      </div>
      <style jsx>
        {`
          .autorisation-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Autorisation
