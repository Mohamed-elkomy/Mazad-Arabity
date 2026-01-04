import { useTranslation } from "react-i18next";

import logo from "../../../assets/images/logo/logo.png";
import styles from "./Loader.module.css";

export default function Loader() {
    const { t } = useTranslation("common");

    return (
        <div
            className={styles.loaderOverlay}
            role="status"
            aria-live="polite"
            aria-label={t("loader.aria")}
        >
            <div className={styles.loaderCard}>
                <img
                    src={logo}
                    alt={t("brandAlt")}
                    className={styles.loaderLogo}
                />

                <div className={styles.loaderDot} aria-hidden="true" />
                <p className={styles.loaderText}>
                    {t("loader.text")}
                </p>
            </div>
        </div>
    );
}
