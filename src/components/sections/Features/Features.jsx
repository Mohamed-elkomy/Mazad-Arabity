import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import {
  FaGavel,
  FaCar,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

import styles from "./Features.module.css";
import { FEATURES } from "../../../data/features";

/*  Icon Map  */
const ICONS = {
  gavel: <FaGavel />,
  car: <FaCar />,
  shield: <FaShieldAlt />,
  users: <FaUsers />,
};

const SLIDES = [...FEATURES, ...FEATURES];

export default function Features() {
  const { t } = useTranslation("home");

  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <h2 className={styles.featuresTitle}>
          {t("features.title")}
        </h2>

        <p className={styles.featuresSubtitle}>
          {t("features.subtitle")}
        </p>

        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={24}
          loop
          freeMode
          speed={6500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className={styles.featuresSwiper}
        >
          {SLIDES.map((item, index) => (
            <SwiperSlide
              key={`${item.id}-${index}`}
              className={styles.slide}
            >
              <article className={styles.featureCard}>
                <div className={styles.icon} aria-hidden="true">
                  {ICONS[item.icon]}
                </div>

                <h3>
                  {t(`features.items.${item.id}.title`)}
                </h3>

                <p>
                  {t(`features.items.${item.id}.text`)}
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
