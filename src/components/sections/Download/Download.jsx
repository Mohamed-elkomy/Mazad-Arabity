import google from "../../../assets/images/logo/googleAr.png";
import apple from "../../../assets/images/logo/appleAr.svg";
import frame from "../../../assets/images/app/logo.png";

import styles from "./Download.module.css";

export default function Download() {
  return (
    <section id="download" className={styles.downloadSection}>
      <div className="container">
        <div className={styles.wrapper}>
          {/* IMAGE */}
          <div className={styles.downloadRight}>
            <div className={styles.imageWrapper}>
              <img
                src={frame}
                className={styles.downloadImg}
                alt="FIX App Preview"
                loading="lazy"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className={styles.downloadLeft}>
            <h2 className={styles.downloadTitle}>
              حمّل تطبيق FIX الآن
            </h2>

            <p className={styles.downloadText}>
              تجربة تسوق سريعة وآمنة لشراء أحدث الموبايلات
              والإكسسوارات الأصلية. عروض حصرية، أسعار منافسة،
              ودفع آمن مع توصيل موثوق.
            </p>

            {/* Trust Hint */}
            <span className={styles.trustText}>
              ⭐ أكثر من 10,000 مستخدم يثقون في FIX
            </span>

            {/* Store Buttons */}
            <div className={styles.downloadButtons}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.storeBtn}
                aria-label="Download on the App Store"
              >
                <img src={apple} alt="Download on App Store" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.storeBtn}
                aria-label="Download on Google Play"
              >
                <img src={google} alt="Download on Google Play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
