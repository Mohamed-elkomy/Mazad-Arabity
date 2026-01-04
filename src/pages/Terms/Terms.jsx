import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PolicyCard from "../../components/sections/Policy/PolicyCard";
import styles from "../../assets/styles/PolicyPages.module.css";

const getWhatsappLink = (msg) =>
    `https://wa.me/201000000000?text=${encodeURIComponent(msg)}`;

export default function TermsPage() {
    const { t } = useTranslation("policy");

    const whatsappLink = getWhatsappLink(
        t("terms.contact.whatsappMessage")
    );

    return (
        <section className={styles.policyContainer}>
            <h1 className={`${styles.pageTitle} animate__animated animate__fadeInDown`}>
                {t("terms.pageTitle")}
            </h1>

            <PolicyCard title={t("terms.intro.title")}>
                <p>{t("terms.intro.content")}</p>
            </PolicyCard>

            <PolicyCard title={t("terms.usage.title")}>
                <p>{t("terms.usage.content")}</p>
            </PolicyCard>

            <PolicyCard title={t("terms.account.title")}>
                <p>{t("terms.account.content")}</p>
            </PolicyCard>

            <PolicyCard title={t("terms.bidding.title")}>
                <p>{t("terms.bidding.content")}</p>
            </PolicyCard>

            <PolicyCard title={t("terms.liability.title")}>
                <p>{t("terms.liability.content")}</p>
            </PolicyCard>

            <PolicyCard title={t("terms.refund.title")}>
                <p>
                    {t("terms.refund.content")}{" "}
                    <Link to="/returns">{t("terms.refund.link")}</Link>
                </p>
            </PolicyCard>

            <PolicyCard title={t("terms.ip.title")}>
                <p>{t("terms.ip.content")}</p>
            </PolicyCard>

            <PolicyCard title={t("terms.changes.title")}>
                <p>{t("terms.changes.content")}</p>
            </PolicyCard>

            <PolicyCard title={t("terms.contact.title")}>
                <p>
                    {t("terms.contact.content")}{" "}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontWeight: 600 }}
                    >
                        {t("terms.contact.cta")}
                    </a>
                    .
                </p>
            </PolicyCard>
        </section>
    );
}
