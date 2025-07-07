import React from 'react'

import { useTranslations } from 'next-intl'

const SignInV2 = (props) => {
  return (
    <>
      <div className="sign-in-v2-container"></div>
      <style jsx>
        {`
          .sign-in-v2-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default SignInV2
