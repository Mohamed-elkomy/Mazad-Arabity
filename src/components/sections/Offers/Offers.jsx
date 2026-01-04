import styles from "./Offers.module.css";

import offer1 from "../../../assets/images/banners/19.png";
import offer2 from "../../../assets/images/banners/21.png";
import offer3 from "../../../assets/images/banners/3.png";

const OFFERS = [
  {
    title: "خصومات تصل إلى 40%",
    desc: "على أحدث الموبايلات والإكسسوارات لفترة محدودة",
    image: offer1,
  },
  {
    title: "عروض الباندل",
    desc: "اشترِ موبايل واحصل على إكسسوارات بسعر أقل",
    image: offer2,
  },
  {
    title: "شحن مجاني",
    desc: "على الطلبات المختارة داخل القاهرة",
    image: offer3,
  },
];

export default function Offers() {
  return (
    <section id="offers" className={styles.offersSection}>
      <div className="container text-center">
        <h2 className={styles.title}>عروض FIX</h2>
        <p className={styles.subtitle}>
          استفيد بأفضل الأسعار والعروض الحصرية
        </p>

        <div className={styles.grid}>
          {OFFERS.map((item, index) => (
            <div key={index} className={styles.card}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
