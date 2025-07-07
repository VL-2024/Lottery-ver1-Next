import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Banner1 from './banner1'

const ProjectDesacription = (props) => {
  return (
    <>
      <div className={`project-desacription-container ${props.rootClassName} `}>
        <Banner1
          content1={
            <Fragment>
              <span className="project-desacription-text1">
                Исследуйте мир захватывающих лотерей, игр и огромных джекпотов.
                Приготовьтесь играть и выигрывать!
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="project-desacription-text2">
                Национальная игровая экосистема
              </span>
            </Fragment>
          }
          rootClassName="banner1root-class-name"
        ></Banner1>
      </div>
      <style jsx>
        {`
          .project-desacription-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .project-desacription-text1 {
            display: inline-block;
          }
          .project-desacription-text2 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

ProjectDesacription.defaultProps = {
  rootClassName: '',
}

ProjectDesacription.propTypes = {
  rootClassName: PropTypes.string,
}

export default ProjectDesacription
