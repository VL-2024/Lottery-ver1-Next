import React, { Fragment } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import Banner21 from '../components/banner21'
import ProjectDesacription from '../components/project-desacription'
import LotteryTypeSection from '../components/lottery-type-section'
import AsiaJackpotSection from '../components/asia-jackpot-section'
import SliderAction from '../components/slider-action'
import FastGamesSection from '../components/fast-games-section'
import SportLotterySection from '../components/sport-lottery-section'
import ClassicLotterySection from '../components/classic-lottery-section'
import Testimonial17 from '../components/testimonial17'
import Features24 from '../components/features24'
import Banner2 from '../components/banner2'
import Footer4 from '../components/footer4'
import LoginModal from '../components/login-modal'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Lottery ver.1</title>
          <meta property="og:title" content="Lottery ver.1" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="home-text10">Главная</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text11">Лотереи</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text12">Контакты</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text13">Результаты</span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text14">Home</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text15">Lotteries</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text16">Games</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text17">Winning Numbers</span>
            </Fragment>
          }
          link31={
            <Fragment>
              <span className="home-text18">Акции</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text19">Регистрация</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text20">Войти</span>
            </Fragment>
          }
          logoSrc="/Logo/logo_v1-1500h.png"
          link2Url="#Features24"
          page1Description={
            <Fragment>
              <span className="home-text21">Page One Description</span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text22">Page Two Description</span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text23">Page Three Description</span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="home-text24">Page Four Description</span>
            </Fragment>
          }
        ></Navbar8>
        <Banner21
          rootClassName="banner21root-class-name"
          videoSora1="/Video/video_home3.mp4"
        ></Banner21>
        <ProjectDesacription rootClassName="project-desacriptionroot-class-name"></ProjectDesacription>
        <hr className="home-separator1"></hr>
        <LotteryTypeSection
          feature1Title={
            <Fragment>
              <span className="home-text25">Мгновенные лотереи</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text26">Тиражные лотереи</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text27">Спортивные лотереи</span>
            </Fragment>
          }
          rootClassName="lottery-type-sectionroot-class-name"
          feature2ImageSrc="/imagePopularLottery/classic_keno_rus-300h.png"
          feature3ImageSrc="/imagePopularLottery/sportloto_1-300h.png"
          feature1Description={
            <Fragment>
              <span className="home-text28">Играй и выигрывай за секунды</span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text29">Классические лотереи</span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text30">
                Прогнозируй спортивные результаты
              </span>
            </Fragment>
          }
        ></LotteryTypeSection>
        <hr className="home-separator2"></hr>
        <AsiaJackpotSection
          feature1Title={
            <Fragment>
              <span className="home-text31">
                Азия Джекпот - это единый джекпот лотерей стран Азии
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text32">Заполни билет легко и быстро</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text33">
                <span>Следи за розыгрышем</span>
                <br></br>
              </span>
            </Fragment>
          }
          feature1ImgSrc="/imageForSection/asia_jp_1-1400w.png"
          feature1Description={
            <Fragment>
              <span className="home-text36">
                <span>
                  Минимальный джекпот — 10 миллионов, максимальный — 1 миллиард!
                </span>
                <br></br>
                <br></br>
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text40">
                <span>
                  Выбери 5 основных чисел и 2 бонусных — вручную или нажмите
                  «Счастливый выбор».
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text43">
                <span>
                  Смотри прямую трансляцию тиража или проверяй результаты
                  онлайн. Выигрыши зачисляются автоматически.
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="home-text46">
                Азия джекпот - твой шанс на миллионы
              </span>
            </Fragment>
          }
        ></AsiaJackpotSection>
        <hr className="home-separator3"></hr>
        <SliderAction rootClassName="slider-actionroot-class-name"></SliderAction>
        <hr className="home-separator4"></hr>
        <FastGamesSection
          text={
            <Fragment>
              <span className="home-text47">
                Быстрые лотереи — моментальные результаты и шанс на выигрыш в
                один клик.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text48">Мгновенные лотереи</span>
            </Fragment>
          }
          image1Src="/ImageFastGames/anibus-1500w.jpg"
          image2Src="/ImageFastGames/bascetball-1500w.jpg"
          image3Src="/ImageFastGames/el%20porco-1500w.jpg"
          image4Src="/ImageFastGames/spaceship-1500w.jpg"
          image7Src="/ImageFastGames/flash-1500w.jpg"
          image8Src="/ImageFastGames/kleopatra-1500w.jpg"
          image9Src="/ImageFastGames/football-1500w.jpg"
          image2Src1="/ImageFastGames/winter%20night-1500w.jpg"
          rootClassName="fast-games-sectionroot-class-name"
        ></FastGamesSection>
        <hr className="home-separator5"></hr>
        <SportLotterySection
          text={
            <Fragment>
              <span className="home-text49">
                Прогнозируй спорт — выигрывай как в лотерее
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text50">
                Выбери исходы спортивных матчей, используй интуицию и знание
                спорта, чтобы забрать главный приз
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="home-text51">Спортивные лотереи</span>
            </Fragment>
          }
          rootClassName="sport-lottery-sectionroot-class-name"
        ></SportLotterySection>
        <hr className="home-separator6"></hr>
        <ClassicLotterySection
          text1={
            <Fragment>
              <span className="home-text52">
                <span>Классика лотерей — большие розыгрыши каждую неделю.</span>
                <br></br>
                <span>
                  Участвуй в регулярных тиражах, следи за датами и борись за
                  крупные джекпоты.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text56">Классические лотереи</span>
            </Fragment>
          }
          imageSrc5="/imagePopularLottery/classic_5_rus-1500w.png"
          imageSrc57="/imagePopularLottery/classic_8_rus-1500w.png"
          imageSrc58="/imagePopularLottery/classic_6_rus-1500w.png"
          imageSrc59="/imagePopularLottery/classic_2_rus-1500w.png"
          imageSrc510="/imagePopularLottery/classic_7_rus-1500w.png"
          imageSrc571="/imagePopularLottery/sportloto_1-300h.png"
          imageSrc581="/imagePopularLottery/classic_keno_rus-300h.png"
          imageSrc591="/imagePopularLottery/classic_4-1500w.png"
          rootClassName="classic-lottery-sectionroot-class-name"
        ></ClassicLotterySection>
        <hr className="home-separator7"></hr>
        <Testimonial17
          review1={
            <Fragment>
              <span className="home-text57">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text58">
                Thanks to the information provided on this site, I was able to
                check my numbers quickly and claim my jackpot prize!
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text59">
                I enjoy playing different games, and this website has all the
                information I need in one place. Highly recommended!
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text60">
                I love reading about the latest jackpot prizes and winners. This
                site keeps me informed and entertained.
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text61">
                Я пользуюсь этим сайтом уже много лет, чтобы выигрывать каждый
                день.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text62">Истории наших победителей</span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text63">Сергей Катанаев</span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text64">Игорь Антонов</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text65">Трамп Дональд</span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text66">Трамп Мелания</span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="home-text67">Lottery Enthusiast</span>
            </Fragment>
          }
          author2Position={
            <Fragment>
              <span className="home-text68">Jackpot Winner</span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text69">Game Player</span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text70">Lottery Fan</span>
            </Fragment>
          }
        ></Testimonial17>
        <Features24
          features24Id="Features24"
          feature1Title={
            <Fragment>
              <span className="home-text71">Наши лицензии</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text72">Правила и стратегия игры</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text73">Выигравшие номера и джекпоты</span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text74">
                Discover tips and strategies to improve your chances of winning.
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text75">
                Learn about different lottery games and their rules.
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text76">
                Stay updated with the latest winning numbers and jackpot prizes.
              </span>
            </Fragment>
          }
        ></Features24>
        <Banner2
          action1={
            <Fragment>
              <span className="home-text77">Sign Up Now</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text78">
                Национальная игровая экосистема
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text79">
                Исследуйте мир захватывающих лотерей, игр и огромных джекпотов.
                Приготовьтесь играть и выигрывать!
              </span>
            </Fragment>
          }
          rootClassName="banner2root-class-name"
          videoSora1="/Video/video_home4.mp4"
        ></Banner2>
        <Footer4
          link1={
            <Fragment>
              <span className="home-text80">About Us</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text81">Contact Us</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text82">Privacy Policy</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text83">Terms and Conditions</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text84">FAQs</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="home-text85">Terms and Conditions</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text86">Cookie Policy</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text87">Privacy Policy</span>
            </Fragment>
          }
        ></Footer4>
        <LoginModal></LoginModal>
        <div className="home-container2">
          <div>
            <div className="home-container4">
              <Script
                html={`<style>
  body {
    overscroll-behavior: contain;
    touch-action: manipulation;
    margin: 0;
  }

  /* #LoginModal — внешний контейнер */
  #LoginModal {
    display: none;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    box-sizing: border-box;
    flex-direction: column;
  }

  /* ModalWrapper — внутренняя обёртка */
  .modal-wrapper {
    background: white;
    inset: 0;
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

  .modal-wrapper p {
    margin-bottom: 1rem;
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

  .login-button {
    margin: 2rem;
    padding: 0.75rem 1.5rem;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
</style>


<script>
  function setupModalScript() {
    const modal = document.getElementById("LoginModal");
    if (!modal) return;

    const closeBtn = modal.querySelector(".close-login");
    const wrapper = modal.querySelector(".modal-wrapper");
    const loginButtons = document.querySelectorAll(".login-button");

    loginButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        modal.style.display = "flex";
      });
    });

    closeBtn?.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Закрытие при клике вне модального окна
    modal.addEventListener("click", (event) => {
      if (!wrapper.contains(event.target)) {
        modal.style.display = "none";
      }
    });
  }

  setTimeout(setupModalScript, 100);
</script>
`}
              ></Script>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-separator1 {
            width: 90%;
            height: 1px;
            background-color: #595959;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            display: inline-block;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-text28 {
            display: inline-block;
          }
          .home-text29 {
            display: inline-block;
          }
          .home-text30 {
            display: inline-block;
          }
          .home-separator2 {
            width: 90%;
            height: 1px;
            background-color: #595959;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
          }
          .home-text40 {
            display: inline-block;
          }
          .home-text43 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
          }
          .home-separator3 {
            width: 90%;
            height: 1px;
            background-color: #595959;
          }
          .home-separator4 {
            width: 90%;
            height: 1px;
            background-color: #595959;
          }
          .home-text47 {
            display: inline-block;
            font-style: normal;
          }
          .home-text48 {
            display: inline-block;
          }
          .home-separator5 {
            width: 90%;
            height: 1px;
            background-color: #595959;
          }
          .home-text49 {
            display: inline-block;
            font-size: 22px;
          }
          .home-text50 {
            display: inline-block;
          }
          .home-text51 {
            display: inline-block;
          }
          .home-separator6 {
            width: 90%;
            height: 1px;
            display: flex;
            justify-content: flex-start;
            background-color: #595959;
          }
          .home-text52 {
            display: inline-block;
            font-style: normal;
          }
          .home-text56 {
            display: inline-block;
          }
          .home-separator7 {
            width: 90%;
            height: 1px;
            background-color: #595959;
          }
          .home-text57 {
            display: inline-block;
          }
          .home-text58 {
            display: inline-block;
          }
          .home-text59 {
            display: inline-block;
          }
          .home-text60 {
            display: inline-block;
          }
          .home-text61 {
            display: inline-block;
          }
          .home-text62 {
            display: inline-block;
          }
          .home-text63 {
            display: inline-block;
          }
          .home-text64 {
            display: inline-block;
          }
          .home-text65 {
            display: inline-block;
          }
          .home-text66 {
            display: inline-block;
          }
          .home-text67 {
            display: inline-block;
          }
          .home-text68 {
            display: inline-block;
          }
          .home-text69 {
            display: inline-block;
          }
          .home-text70 {
            display: inline-block;
          }
          .home-text71 {
            display: inline-block;
          }
          .home-text72 {
            display: inline-block;
          }
          .home-text73 {
            display: inline-block;
          }
          .home-text74 {
            display: inline-block;
          }
          .home-text75 {
            display: inline-block;
          }
          .home-text76 {
            display: inline-block;
          }
          .home-text77 {
            display: inline-block;
          }
          .home-text78 {
            display: inline-block;
          }
          .home-text79 {
            display: inline-block;
          }
          .home-text80 {
            display: inline-block;
          }
          .home-text81 {
            display: inline-block;
          }
          .home-text82 {
            display: inline-block;
          }
          .home-text83 {
            display: inline-block;
          }
          .home-text84 {
            display: inline-block;
          }
          .home-text85 {
            display: inline-block;
          }
          .home-text86 {
            display: inline-block;
          }
          .home-text87 {
            display: inline-block;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container4 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-text50 {
              font-size: 22px;
            }
          }
          @media (max-width: 479px) {
            .home-text49 {
              font-size: 22px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
