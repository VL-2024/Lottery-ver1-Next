import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Banner21 = (props) => {
  return (
    <>
      <div
        className={`banner21-container thq-section-padding ${props.rootClassName} `}
      >
        <div className="banner21-max-width thq-section-max-width">
          <video
            src={props.videoSora1}
            loop="true"
            muted="true"
            poster={props.videoSora1}
            autoPlay="true"
            playsInline
            className="banner21-video"
          ></video>
        </div>
      </div>
      <style jsx>
        {`
          .banner21-container {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .banner21-max-width {
            height: var(--dl-layout-size-xxlarge);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .banner21-video {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }

          @media (max-width: 479px) {
            .banner21-container {
              margin-top: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-unit);
            }
            .banner21-max-width {
              margin-top: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Banner21.defaultProps = {
  rootClassName: '',
  videoSora1:
    '/Video/20250627_1305_enchanting%20lottery%20moment_remix_01jyrdhqfreb1addyj472z0bz0.mp4',
}

Banner21.propTypes = {
  rootClassName: PropTypes.string,
  videoSora1: PropTypes.string,
}

export default Banner21
