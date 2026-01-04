import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { SCREENS } from "../../../data/screenshots";
import styles from "./Screenshots.module.css";

export default function Screenshots() {
    return (
        <section className={styles.screensSection}>
            <div className="container">
                <h2 className={styles.title}>
                    نظرة داخل تطبيق مزاد عربيتى
                </h2>

                <p className={styles.subtitle}>
                    واجهة سهلة تخلّيك تتابع المزايدات وتشارك فيها خطوة بخطوة
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
                    {SCREENS.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className={styles.screenCard}>
                                <div className={styles.phoneFrame}>
                                    <img
                                        src={item.image}
                                        alt={item.alt}
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
