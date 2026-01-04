import logo from "../../../assets/images/logo/logo.png";
import styles from "./Loader.module.css";

export default function Loader() {
    return (
        <div
            className={styles.loaderOverlay}
            role="status"
            aria-label="جاري التحميل"
        >
            <div className={styles.loaderCard}>
                <img
                    src={logo}
                    alt="FIX - حلول ذكية لصيانة وخدمات المنازل"
                    className={styles.loaderLogo}
                />

                <div className={styles.loaderDot} aria-hidden="true" />
                <p className={styles.loaderText}>جارٍ التحميل...</p>
            </div>
        </div>
    );
}
