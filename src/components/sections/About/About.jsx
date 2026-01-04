import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className="container text-center">
        <h2 className={styles.aboutTitle}>عن FIX</h2>

        <p className={styles.aboutText}>
          FIX هو متجر إلكتروني متخصص في بيع أحدث الموبايلات والإكسسوارات
          الأصلية، مع تجربة شراء سهلة، أسعار منافسة، وخدمة توصيل موثوقة.
        </p>

        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <span>📱</span>
            <h3>منتجات أصلية</h3>
            <p>نقدّم منتجات معتمدة من أفضل العلامات التجارية.</p>
          </div>

          <div className={styles.feature}>
            <span>💰</span>
            <h3>أسعار تنافسية</h3>
            <p>عروض وخصومات حقيقية على مدار العام.</p>
          </div>

          <div className={styles.feature}>
            <span>🚚</span>
            <h3>توصيل سريع</h3>
            <p>خدمة توصيل منظمة لجميع المحافظات.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
