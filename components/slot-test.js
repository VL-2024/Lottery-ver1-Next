import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const SlotTest = (props) => {
  return (
    <>
      <div className={`slot-test-container1 ${props.rootClassName} `}>
        <div className="slot-test-container2">{props.children}</div>
      </div>
      <style jsx>
        {`
          .slot-test-container1 {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .slot-test-container2 {
            flex: 0 0 auto;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            justify-content: center;
            background-color: #ffffff;
          }
        `}
      </style>
    </>
  )
}

SlotTest.defaultProps = {
  rootClassName: '',
}

SlotTest.propTypes = {
  rootClassName: PropTypes.string,
}

export default SlotTest
