import { Link, NavLink, useLocation } from "react-router-dom";
import { Offcanvas } from "bootstrap";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import logo from "../../../assets/images/logo/logo.png";
import styles from "./Navbar.module.css";
import buttons from "../../../assets/styles/buttons.module.css";

/*  WhatsApp Links  */
const WHATSAPP_MESSAGES = {
    ar: "أهلاً، حابب اتواصل مع مزاد عربيتى",
    en: "Hello, I would like to contact My Car Auction",
};

const getWhatsappLink = (lang) =>
    `https://wa.me/201000000000?text=${encodeURIComponent(
        WHATSAPP_MESSAGES[lang]
    )}`;

export default function Navbar() {
    const offcanvasRef = useRef(null);
    const offcanvasInstanceRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();

    const { t, i18n } = useTranslation("common");
    const currentLang = i18n.language;
    const isAr = currentLang === "ar";

    /*  Offcanvas Init  */
    useEffect(() => {
        const el = offcanvasRef.current;
        if (!el) return;

        const instance = Offcanvas.getOrCreateInstance(el, { backdrop: true });
        offcanvasInstanceRef.current = instance;

        const handleShown = () => setIsOpen(true);
        const handleHidden = () => setIsOpen(false);

        el.addEventListener("shown.bs.offcanvas", handleShown);
        el.addEventListener("hidden.bs.offcanvas", handleHidden);

        return () => {
            el.removeEventListener("shown.bs.offcanvas", handleShown);
            el.removeEventListener("hidden.bs.offcanvas", handleHidden);
            instance.dispose();
        };
    }, []);

    /*  Close on Route Change  */
    useEffect(() => {
        offcanvasInstanceRef.current?.hide();
    }, [pathname]);

    /*  Language Toggle  */
    const toggleLanguage = () => {
        const nextLang = isAr ? "en" : "ar";
        i18n.changeLanguage(nextLang);
        document.documentElement.lang = nextLang;
        document.documentElement.dir = nextLang === "ar" ? "rtl" : "ltr";
    };

    const whatsappLink = getWhatsappLink(currentLang);

    return (
        <>
            {/*  Navbar  */}
            <nav
                role="navigation"
                aria-label="Main navigation"
                className={`navbar navbar-expand-lg sticky-top ${styles.navbar}`}
            >
                <div className="container d-flex align-items-center justify-content-between">
                    {/* Mobile Toggler */}
                    <button
                        className={`navbar-toggler ${styles.navbarToggler}`}
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => offcanvasInstanceRef.current?.toggle()}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    {/* Logo */}
                    <Link className="navbar-brand" to="/">
                        <img
                            src={logo}
                            alt={t("brandAlt")}
                            className={styles.brandLogo}
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="collapse navbar-collapse d-none d-lg-flex">
                        <ul className="navbar-nav mx-auto gap-3">
                            <NavItem to="/" label={t("nav.home")} />
                            <NavItem to="/privacy" label={t("nav.privacy")} />
                            <NavItem to="/returns" label={t("nav.returns")} />
                            <NavItem to="/terms" label={t("nav.terms")} />
                        </ul>

                        {/* Actions */}
                        <div className="d-flex align-items-center gap-2">
                            <button
                                onClick={toggleLanguage}
                                className={styles.langBtn}
                                aria-label="Change language"
                            >
                                {isAr ? "EN" : "عربي"}
                            </button>

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={buttons.primaryBtn}
                            >
                                {t("nav.contact")} 💬
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/*  Offcanvas  */}
            <div
                ref={offcanvasRef}
                className={`offcanvas offcanvas-end ${styles.offcanvas}`}
                tabIndex="-1"
                dir={isAr ? "rtl" : "ltr"}
            >
                <div className={styles.offcanvasHeader}>
                    <img
                        src={logo}
                        alt={t("brandAlt")}
                        className={styles.offcanvasLogo}
                    />
                </div>

                <div className={styles.offcanvasBody}>
                    <MobileLink to="/" label={t("nav.home")} />
                    <MobileLink to="/privacy" label={t("nav.privacy")} />
                    <MobileLink to="/returns" label={t("nav.returns")} />
                    <MobileLink to="/terms" label={t("nav.terms")} />

                    <button
                        onClick={toggleLanguage}
                        className={`w-100 mt-3 ${styles.langBtn}`}
                    >
                        {isAr ? "English" : "العربية"}
                    </button>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-100 mt-3 ${buttons.primaryBtn}`}
                        onClick={() => offcanvasInstanceRef.current?.hide()}
                    >
                        {t("nav.contact")} 💬
                    </a>
                </div>
            </div>
        </>
    );
}

/*  Helpers  */

function NavItem({ to, label }) {
    return (
        <li className="nav-item">
            <NavLink
                to={to}
                className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ""}`
                }
            >
                {label}
            </NavLink>
        </li>
    );
}

function MobileLink({ to, label }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `${styles.offcanvasLink} ${isActive ? styles.active : ""}`
            }
        >
            {label}
        </NavLink>
    );
}
