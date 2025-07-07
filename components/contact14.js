import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact14 = (props) => {
  return (
    <>
      <div className="contact14-contact20 thq-section-padding">
        <div className="contact14-max-width thq-section-max-width">
          <div className="contact14-content1">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact14-contact-info1">
              <div className="contact14-content2">
                <h3 className="contact14-text10 thq-heading-3">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="contact14-text26">Contact Us</span>
                    </Fragment>
                  )}
                </h3>
                <p className="contact14-text11 thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="contact14-text17">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in ero.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <span className="contact14-email1 thq-body-small">
                {props.email1 ?? (
                  <Fragment>
                    <span className="contact14-text21">
                      info@lotterywebsite.com
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact14-content3">
            <svg viewBox="0 0 1024 1024" className="contact14-icon3">
              <path d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
            </svg>
            <div className="contact14-contact-info2">
              <div className="contact14-content5">
                <h3 className="contact14-text12 thq-heading-3">
                  {props.heading2 ?? (
                    <Fragment>
                      <span className="contact14-text18">Live Chat</span>
                    </Fragment>
                  )}
                </h3>
                <p className="contact14-text13 thq-body-large">
                  {props.content2 ?? (
                    <Fragment>
                      <span className="contact14-text24">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in ero.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <span className="contact14-email2 thq-body-small">
                {props.link1 ?? (
                  <Fragment>
                    <span className="contact14-text20">Start new chat</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact14-content6">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact14-contact-info3">
              <div className="contact14-content7">
                <h3 className="contact14-text14 thq-heading-3">
                  {props.heading3 ?? (
                    <Fragment>
                      <span className="contact14-text23">Phone</span>
                    </Fragment>
                  )}
                </h3>
                <p className="contact14-text15 thq-body-large">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="contact14-text25">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in ero.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <span className="contact14-phone thq-body-small">
                {props.phone1 ?? (
                  <Fragment>
                    <span className="contact14-text22">+123-456-7890</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact14-content8">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact14-contact-info4">
              <div className="contact14-content9">
                <h3 className="contact14-text16 thq-heading-3">
                  {props.heading4 ?? (
                    <Fragment>
                      <span className="contact14-text19">Office</span>
                    </Fragment>
                  )}
                </h3>
                <p className="contact14-content4 thq-body-large">
                  {props.content4 ?? (
                    <Fragment>
                      <span className="contact14-text28">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in ero.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <span className="contact14-address thq-body-small">
                {props.address1 ?? (
                  <Fragment>
                    <span className="contact14-text27">
                      123 Lottery Ave, Cityville, State, Country
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact14-contact20 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-direction: column;
          }
          .contact14-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .contact14-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact14-contact-info1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-content2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-text10 {
            align-self: stretch;
            text-align: center;
          }
          .contact14-text11 {
            text-align: center;
          }
          .contact14-email1 {
            text-align: center;
          }
          .contact14-content3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact14-icon3 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
          }
          .contact14-contact-info2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-content5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-text12 {
            align-self: stretch;
            text-align: center;
          }
          .contact14-text13 {
            text-align: center;
          }
          .contact14-email2 {
            text-align: center;
          }
          .contact14-content6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact14-contact-info3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-content7 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-text14 {
            align-self: stretch;
            text-align: center;
          }
          .contact14-text15 {
            text-align: center;
          }
          .contact14-phone {
            text-align: center;
          }
          .contact14-content8 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact14-contact-info4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-content9 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-text16 {
            align-self: stretch;
            text-align: center;
          }
          .contact14-content4 {
            text-align: center;
          }
          .contact14-address {
            text-align: center;
          }
          .contact14-text17 {
            display: inline-block;
          }
          .contact14-text18 {
            display: inline-block;
          }
          .contact14-text19 {
            display: inline-block;
          }
          .contact14-text20 {
            display: inline-block;
          }
          .contact14-text21 {
            display: inline-block;
          }
          .contact14-text22 {
            display: inline-block;
          }
          .contact14-text23 {
            display: inline-block;
          }
          .contact14-text24 {
            display: inline-block;
          }
          .contact14-text25 {
            display: inline-block;
          }
          .contact14-text26 {
            display: inline-block;
          }
          .contact14-text27 {
            display: inline-block;
          }
          .contact14-text28 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .contact14-max-width {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Contact14.defaultProps = {
  content1: undefined,
  heading2: undefined,
  heading4: undefined,
  link1: undefined,
  email1: undefined,
  phone1: undefined,
  heading3: undefined,
  content2: undefined,
  content3: undefined,
  heading1: undefined,
  address1: undefined,
  content4: undefined,
}

Contact14.propTypes = {
  content1: PropTypes.element,
  heading2: PropTypes.element,
  heading4: PropTypes.element,
  link1: PropTypes.element,
  email1: PropTypes.element,
  phone1: PropTypes.element,
  heading3: PropTypes.element,
  content2: PropTypes.element,
  content3: PropTypes.element,
  heading1: PropTypes.element,
  address1: PropTypes.element,
  content4: PropTypes.element,
}

export default Contact14
