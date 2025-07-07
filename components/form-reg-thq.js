import React from 'react'

import { useTranslations } from 'next-intl'

const FormRegTHQ = (props) => {
  return (
    <>
      <div className="form-reg-thq-container"></div>
      <style jsx>
        {`
          .form-reg-thq-container {
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

export default FormRegTHQ
