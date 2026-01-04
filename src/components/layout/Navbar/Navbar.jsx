import { Link, NavLink, useLocation } from "react-router-dom";
import { Offcanvas } from "bootstrap";
import { useEffect, useRef, useState } from "react";

import logo from "../../../assets/images/logo/logo.png";
import styles from "./Navbar.module.css";
import buttons from "../../../assets/styles/buttons.module.css";

/* ================= WhatsApp Link ================= */
const WHATSAPP_LINK =
    "https://wa.me/201000000000?text=%D8%A3%D9%87%D9%84%D8%A7%20%D8%8C%20%D8%AD%D8%A7%D8%A8%D8%A8%20%D8%A7%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%20%D9%85%D8%B2%D8%A7%D8%AF%20%D8%B9%D8%B1%D8%A8%D9%8A%D8%AA%D9%89";

export default function Navbar() {
    const offcanvasRef = useRef(null);
    const offcanvasInstanceRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();

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

    useEffect(() => {
        offcanvasInstanceRef.current?.hide();
    }, [pathname]);

    return (
        <>
            {/* ================= Navbar ================= */}
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
                            alt="مزاد عربيتى"
                            className={styles.brandLogo}
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="collapse navbar-collapse d-none d-lg-flex">
                        <ul className="navbar-nav mx-auto gap-3">
                            <NavItem to="/" label="الرئيسية" />
                            <NavItem to="/privacy" label="سياسة الخصوصية" />
                            <NavItem to="/returns" label="سياسة الاسترجاع" />
                            <NavItem to="/terms" label="الشروط والأحكام" />
                        </ul>

                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttons.primaryBtn}
                        >
                            تواصل معنا 💬
                        </a>
                    </div>
                </div>
            </nav>

            {/* ================= Offcanvas ================= */}
            <div
                ref={offcanvasRef}
                className={`offcanvas offcanvas-end ${styles.offcanvas}`}
                tabIndex="-1"
                dir="rtl"
            >
                <div className={styles.offcanvasHeader}>
                    <img
                        src={logo}
                        alt="مزاد عربيتى"
                        className={styles.offcanvasLogo}
                    />
                </div>

                <div className={styles.offcanvasBody}>
                    <MobileLink to="/" label="الرئيسية" />
                    <MobileLink to="/privacy" label="سياسة الخصوصية" />
                    <MobileLink to="/returns" label="سياسة الاسترجاع" />
                    <MobileLink to="/terms" label="الشروط والأحكام" />

                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-100 mt-3 ${buttons.primaryBtn}`}
                        onClick={() => offcanvasInstanceRef.current?.hide()}
                    >
                        تواصل معنا 💬
                    </a>
                </div>
            </div>
        </>
    );
}

/* ================= Helpers ================= */

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
