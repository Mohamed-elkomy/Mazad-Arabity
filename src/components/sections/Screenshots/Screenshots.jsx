import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { SCREENS } from "../../../data/screenshots";
import styles from "./Screenshots.module.css";

export default function Screenshots() {
    const { t } = useTranslation("home");

    return (
        <section className={styles.screensSection}>
            <div className="container">
                <h2 className={styles.title}>
                    {t("screenshots.title")}
                </h2>

                <p className={styles.subtitle}>
                    {t("screenshots.subtitle")}
                </p>

                <Swiper
                    modules={[Autoplay]}
                    loop
                    centeredSlides
                    spaceBetween={24}
                    autoplay={{
                        delay: 2200,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1.1 },
                        576: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2.2 },
                        1200: { slidesPerView: 4 },
                    }}
                    className={styles.screensSwiper}
                >
                    {SCREENS.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div className={styles.screenCard}>
                                <div className={styles.phoneFrame}>
                                    <img
                                        src={item.image}
                                        alt={t("screenshots.itemAlt", {
                                            index: index + 1,
                                        })}
                                        loading="lazy"
                                        className={styles.screenImg}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
