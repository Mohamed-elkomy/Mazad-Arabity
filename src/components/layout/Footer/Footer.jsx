import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowCircleUp } from "react-icons/fa";

import logo from "../../../assets/images/logo/logo.png";
import brmjaLogo from "../../../assets/images/logo/logo.svg";
import styles from "./Footer.module.css";

export default function Footer() {
    const { t, i18n } = useTranslation("footer");
    const isAr = i18n.language === "ar";

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
            <footer className={styles.footer} dir={isAr ? "rtl" : "ltr"}>
                <div className="container">
                    <div className={styles.footerContent}>
                        {/* About */}
                        <div className={styles.footerColumn}>
                            <h3>{t("about.title")}</h3>
                            <p>{t("about.description")}</p>
                        </div>

                        {/* Links */}
                        <div className={styles.footerColumn}>
                            <h3>{t("links.title")}</h3>
                            <ul>
                                <li><Link to="/">{t("links.home")}</Link></li>
                                <li><Link to="/privacy">{t("links.privacy")}</Link></li>
                                <li><Link to="/returns">{t("links.returns")}</Link></li>
                                <li><Link to="/terms">{t("links.terms")}</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className={styles.footerColumn}>
                            <h3>{t("contact.title")}</h3>
                            <p>📞 {t("contact.phone")}</p>
                            <p>✉️ {t("contact.email")}</p>
                            <p>📍 {t("contact.location")}</p>
                        </div>

                        {/* Logo */}
                        <div className={`${styles.footerColumn} ${styles.footerLogo}`}>
                            <img
                                src={logo}
                                alt={t("brandAlt")}
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    <div className={styles.copyright}>
                        {t("copyright")}
                    </div>
                </div>
            </footer>

            {/* Brmja Tech Branding (Fixed - No Animation) */}
            <div className={styles.devBrand}>
                <img
                    src={brmjaLogo}
                    alt={t("devAlt")}
                    loading="lazy"
                />

                <a
                    href="https://brmja.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.devLink}
                >
                    brmja.tech
                </a>
            </div>


            {/* Scroll To Top */}
            <button
                className={`${styles.scrollTopBtn} ${showButton ? styles.show : ""
                    }`}
                onClick={scrollToTop}
                aria-label={t("scrollTop")}
            >
                <FaArrowCircleUp />
            </button>
        </>
    );
}
