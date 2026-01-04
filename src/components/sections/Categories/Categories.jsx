import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { CATEGORIES } from "../../../data/categories";
import styles from "./Categories.module.css";

export default function Categories() {
    const { t } = useTranslation("home");

    return (
        <section
            className={styles.categoriesSection}
            aria-labelledby="categories-title"
        >
            <div className="container">
                <h2
                    id="categories-title"
                    className={styles.title}
                >
                    {t("categories.title")}
                </h2>

                <p className={styles.subtitle}>
                    {t("categories.subtitle")}
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
                    aria-label={t("categories.title")}
                >
                    {[...CATEGORIES, ...CATEGORIES].map((item, index) => {
                        const title = t(`categories.items.${item.id}`);

                        return (
                            <SwiperSlide
                                key={`${item.id}-${index}`}
                                className={styles.slide}
                            >
                                <div
                                    className={styles.card}
                                    role="group"
                                    aria-label={title}
                                >
                                    <img
                                        src={item.image}
                                        alt={title}
                                        className={styles.image}
                                        loading="lazy"
                                    />

                                    <span className={styles.cardTitle}>
                                        {title}
                                    </span>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
}
