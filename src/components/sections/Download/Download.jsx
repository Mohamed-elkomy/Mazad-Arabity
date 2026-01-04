import { useTranslation } from "react-i18next";

import googleEn from "../../../assets/images/logo/googleEn.png";
import googleAr from "../../../assets/images/logo/googleAr.png";
import appleEn from "../../../assets/images/logo/appleEn.svg";
import appleAr from "../../../assets/images/logo/appleAr.svg";

import frame from "../../../assets/images/app/Splash.png";
import styles from "./Download.module.css";

export default function Download() {
  const { t, i18n } = useTranslation("home");
  const isAr = i18n.language === "ar";

  return (
    <section
      id="download"
      className={styles.downloadSection}
      aria-labelledby="download-title"
    >
      <div className="container">
        <div className={styles.wrapper}>
          {/* IMAGE */}
          <div className={styles.downloadRight}>
            <div className={styles.imageWrapper}>
              <img
                src={frame}
                className={styles.downloadImg}
                alt={t("download.previewAlt")}
                loading="lazy"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className={styles.downloadLeft}>
            <h2
              id="download-title"
              className={styles.downloadTitle}
            >
              {t("download.title")}
            </h2>

            <p className={styles.downloadText}>
              {t("download.description")}
            </p>

            {/* Trust Hint */}
            <span className={styles.trustText}>
              {t("download.trust")}
            </span>

            {/* Store Buttons */}
            <div className={styles.downloadButtons}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.storeBtn}
                aria-label={t("download.appStoreAria")}
              >
                <img
                  src={isAr ? appleAr : appleEn}
                  alt={t("download.appStoreAlt")}
                  loading="lazy"
                />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.storeBtn}
                aria-label={t("download.googlePlayAria")}
              >
                <img
                  src={isAr ? googleAr : googleEn}
                  alt={t("download.googlePlayAlt")}
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
