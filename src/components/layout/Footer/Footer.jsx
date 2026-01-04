import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

import logo from "../../../assets/images/logo/logo.png";
import styles from "./Footer.module.css";

export default function Footer() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 250);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <>
            <footer className={styles.footer} dir="rtl">
                <div className="container">
                    <div className={styles.footerContent}>
                        {/* About */}
                        <div className={styles.footerColumn}>
                            <h3>عن مزاد عربيتى</h3>
                            <p>
                                مزاد عربيتى منصة إلكترونية متخصصة في مزادات السيارات، تتيح
                                البيع والشراء من خلال مزايدات مباشرة، شفافة، وبأسعار حقيقية
                                في بيئة آمنة وسهلة الاستخدام.
                            </p>
                        </div>

                        {/* Links */}
                        <div className={styles.footerColumn}>
                            <h3>روابط هامة</h3>
                            <ul>
                                <li>
                                    <Link to="/">الرئيسية</Link>
                                </li>
                                <li>
                                    <Link to="/privacy">سياسة الخصوصية</Link>
                                </li>
                                <li>
                                    <Link to="/returns">سياسة الاسترجاع</Link>
                                </li>
                                <li>
                                    <Link to="/terms">الشروط والأحكام</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className={styles.footerColumn}>
                            <h3>تواصل معنا</h3>
                            <p>📞 01000000000</p>
                            <p>✉️ support@mazadarabity.com</p>
                            <p>📍 القاهرة – مصر</p>
                        </div>

                        {/* Logo */}
                        <div className={`${styles.footerColumn} ${styles.footerLogo}`}>
                            <img
                                src={logo}
                                alt="مزاد عربيتى – منصة مزادات السيارات"
                            />
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    <div className={styles.copyright}>
                        © 2025 مزاد عربيتى – جميع الحقوق محفوظة
                    </div>
                </div>
            </footer>

            {/* Scroll To Top */}
            <button
                className={`${styles.scrollTopBtn} ${showButton ? styles.show : ""
                    }`}
                onClick={scrollToTop}
                aria-label="العودة لأعلى الصفحة"
            >
                <FaArrowCircleUp />
            </button>
        </>
    );
}
