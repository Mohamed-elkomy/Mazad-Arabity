import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { CATEGORIES } from "../../../data/categories";
import styles from "./Categories.module.css";

export default function Categories() {
    return (
        <section className={styles.categoriesSection}>
            <div className="container">
                <h2 className={styles.title}>
                    استكشف المزايدات حسب نوع السيارة
                </h2>

                <p className={styles.subtitle}>
                    اختَر فئة السيارة وابدأ المنافسة فورًا
                </p>

                <Swiper
                    modules={[Autoplay]}
                    slidesPerView="auto"
                    spaceBetween={24}
                    loop
                    freeMode
                    speed={6000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    className={styles.categoriesSwiper}
                >
                    {[...CATEGORIES, ...CATEGORIES].map((item, index) => (
                        <SwiperSlide
                            key={`${item.id}-${index}`}
                            className={styles.slide}
                        >
                            <div className={styles.card}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={styles.image}
                                    loading="lazy"
                                />
                                <span className={styles.cardTitle}>
                                    {item.title}
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
