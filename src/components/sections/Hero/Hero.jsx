import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import googleEn from "../../../assets/images/logo/googleEn.png";
import googleAr from "../../../assets/images/logo/googleAr.png";
import appleEn from "../../../assets/images/logo/appleEn.svg";
import appleAr from "../../../assets/images/logo/appleAr.svg";

import car1 from "../../../assets/images/app/Splash.png";
import car2 from "../../../assets/images/app/home.png";
import car3 from "../../../assets/images/app/profile.png";

import styles from "./Hero.module.css";

const SLIDES = [
  { id: "slide-1", image: car1 },
  { id: "slide-2", image: car2 },
  { id: "slide-3", image: car3 },
];

export default function Hero() {
  const { t, i18n } = useTranslation("home");
  const isAr = i18n.language === "ar";

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="row align-items-center">
          {/* ================= TEXT ================= */}
          <div className={`col-lg-6 ${styles.heroRight}`}>
            <h1 className={styles.title}>
              {t("hero.title")}
            </h1>

            <h2 className={styles.subtitle}>
              {t("hero.subtitle")}
            </h2>

            <p className={styles.desc}>
              <strong>{t("hero.brand")}</strong>{" "}
              {t("hero.description")}
            </p>

            {/* CTA Buttons */}
            <div className={styles.storeButtons}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.storeButton}
                aria-label={t("hero.appStoreAlt")}
              >
                <img
                  src={isAr ? appleAr : appleEn}
                  alt={t("hero.appStoreAlt")}
                />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.storeButton}
                aria-label={t("hero.googlePlayAlt")}
              >
                <img
                  src={isAr ? googleAr : googleEn}
                  alt={t("hero.googlePlayAlt")}
                />
              </a>
            </div>
          </div>

          {/* ================= VISUAL ================= */}
          <div className={`col-lg-6  ${styles.heroVisual}`}>
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2600, disableOnInteraction: false }}
              loop
              slidesPerView={1}
              centeredSlides
              className={styles.heroSwiper}
            >
              {SLIDES.map((slide, index) => (
                <SwiperSlide
                  key={slide.id}
                  className="d-flex justify-content-center"
                >
                  <div className={styles.phoneFrame}>
                    <img
                      src={slide.image}
                      alt={t("hero.slideAlt", { index: index + 1 })}
                      className={styles.heroImg}
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
