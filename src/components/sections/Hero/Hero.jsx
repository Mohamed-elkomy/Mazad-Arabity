import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import google from "../../../assets/images/logo/googleEn.png";
import apple from "../../../assets/images/logo/appleEn.svg";

import car1 from "../../../assets/images/app/Splash.png";
import car2 from "../../../assets/images/app/home.png";
import car3 from "../../../assets/images/app/profile.png";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="row align-items-center">
          {/* ================= TEXT ================= */}
          <div className={`col-lg-6 ${styles.heroRight}`}>
            <h1 className={styles.title}>
              أول منصة مزادات سيارات في مصر
            </h1>

            <h2 className={styles.subtitle}>
              مزايدات مباشرة • أسعار حقيقية • بدون وسطاء
            </h2>

            <p className={styles.desc}>
              <strong>مزاد عربيتى</strong> بيجمع البائعين والمشترين
              في مكان واحد. شارك في المزايدات، قارن الأسعار،
              وكسب عربيتك بأفضل سعر بكل شفافية وأمان.
            </p>

            {/* CTA Buttons */}
            <div className={styles.storeButtons}>
              <a href="#" className={styles.storeButton}>
                <img src={apple} alt="Download on App Store" />
              </a>

              <a href="#" className={styles.storeButton}>
                <img src={google} alt="Get it on Google Play" />
              </a>
            </div>
          </div>

          {/* ================= VISUAL ================= */}
          <div className={`col-lg-6 ${styles.heroVisual}`}>
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2600, disableOnInteraction: false }}
              loop
              slidesPerView={1}
              centeredSlides
              className={styles.heroSwiper}
            >
              {[car1, car2, car3].map((img, index) => (
                <SwiperSlide
                  key={index}
                  className="d-flex justify-content-center"
                >
                  <img
                    src={img}
                    alt={`Mazad Arabity Car ${index + 1}`}
                    className={styles.heroImg}
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
