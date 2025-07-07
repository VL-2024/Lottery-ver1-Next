import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container1">
        <Head>
          <title>TestPage - Lottery ver.1</title>
          <meta property="og:title" content="TestPage - Lottery ver.1" />
        </Head>
        <div className="test-page-container2">
          <button
            type="button"
            className="test-page-button login-button-reg button"
          >
            Button
          </button>
        </div>
        <div id="LoginModalReg" className="test-page-login-modal">
          <div className="test-page-modal-wrapper modal-wrapper"></div>
        </div>
        <div className="test-page-container3">
          <div>
            <div className="test-page-container5">
              <Script
                html={`<style>
  body {
    overscroll-behavior: contain;
    touch-action: manipulation;
    margin: 0;
  }

  /* === Модалка === */
  #LoginModal {
    display: none;
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    box-sizing: border-box;
    flex-direction: column;
  }

  .modal-wrapper {
    background: white;
    width: 90%;
    max-width: 620px;
    max-height: 90vh;
    overflow-y: auto;
    padding: 1rem;
    border-radius: 12px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .close-login {
    background: crimson;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-self: flex-end;
  }

  .login-button-reg {
    margin: 2rem;
    padding: 0.75rem 1.5rem;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  /* === Вкладки === */
  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid #ccc;
    font-size: 14px;
  }

  [data-tab] {
    flex: 1;
    text-align: center;
    padding: 0.75rem;
    cursor: pointer;
    background-color: #f3f4f6;
    transition: 0.3s;
  }

  [data-tab].active {
    background-color: #10b981;
    color: white;
    font-weight: bold;
  }

  .tab-content {
    display: none;
    flex-direction: column;
    gap: 0.75rem;
  }

  .tab-content.active {
    display: flex;
  }

  /* === Элементы формы === */
  .input {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
  }

  .button {
    padding: 0.75rem;
    background-color: #ef4444;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.2s ease;
  }

  .button:hover {
    background-color: #dc2626;
  }
</style>

<script>
  document.addEventListener("click", (e) => {
    const modal = document.getElementById("LoginModalReg");

    // Открытие модалки
    if (e.target.closest(".login-button-reg")) {
      modal?.style.setProperty("display", "flex");
    }

    // Закрытие по кнопке
    if (e.target.closest(".close-login")) {
      modal?.style.setProperty("display", "none");
    }

    // Закрытие по клику вне модалки
    if (e.target === modal) {
      modal?.style.setProperty("display", "none");
    }

    // Переключение вкладок по data-tab
    const tabButton = e.target.closest("[data-tab]");
    if (tabButton) {
      const targetId = tabButton.getAttribute("data-tab");

      document.querySelectorAll("[data-tab]").forEach((btn) =>
        btn.classList.remove("active")
      );
      document.querySelectorAll(".tab-content").forEach((pane) =>
        pane.classList.remove("active")
      );

      tabButton.classList.add("active");
      document.getElementById(targetId)?.classList.add("active");
    }
  });
</script>
`}
              ></Script>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .test-page-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .test-page-container2 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .test-page-button {
            align-self: flex-start;
          }
          .test-page-login-modal {
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100vx;
            margin: auto;
            display: flex;
            z-index: 9999;
            position: fixed;
            box-sizing: border-box;
            overflow-y: scroll;
            align-items: stretch;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.5);
          }
          .test-page-modal-wrapper {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            align-self: center;
            align-items: center;
            justify-content: flex-start;
          }
          .test-page-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .test-page-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default TestPage
