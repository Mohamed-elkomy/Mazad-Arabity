import { useTranslation } from "react-i18next";
import PolicyCard from "../../components/sections/Policy/PolicyCard";
import styles from "../../assets/styles/PolicyPages.module.css";

const getWhatsappLink = (msg) =>
    `https://wa.me/201000000000?text=${encodeURIComponent(msg)}`;

export default function ReturnPolicyPage() {
    const { t } = useTranslation("policy");

    const whatsappLink = getWhatsappLink(
        t("returns.contact.whatsappMessage")
    );

    return (
        <section className={styles.policyContainer}>
            <h1 className={`${styles.pageTitle} animate__animated animate__fadeInDown`}>
                {t("returns.pageTitle")}
            </h1>

            <PolicyCard title={t("returns.intro.title")}>
                <p>{t("returns.intro.content")}</p>
            </PolicyCard>

            <PolicyCard title={t("returns.eligible.title")}>
                <p>
                    {t("returns.eligible.items", { returnObjects: true }).map(
                        (item, index) => (
                            <span key={index}>
                                • {item}
                                <br />
                            </span>
                        )
                    )}
                </p>
            </PolicyCard>

            <PolicyCard title={t("returns.conditions.title")}>
                <p>
                    {t("returns.conditions.items", { returnObjects: true }).map(
                        (item, index) => (
                            <span key={index}>
                                • {item}
                                <br />
                            </span>
                        )
                    )}
                </p>
            </PolicyCard>

            <PolicyCard title={t("returns.process.title")}>
                <p>
                    {t("returns.process.items", { returnObjects: true }).map(
                        (item, index) => (
                            <span key={index}>
                                • {item}
                                <br />
                            </span>
                        )
                    )}
                </p>
            </PolicyCard>

            <PolicyCard title={t("returns.refund.title")}>
                <p>
                    {t("returns.refund.items", { returnObjects: true }).map(
                        (item, index) => (
                            <span key={index}>
                                • {item}
                                <br />
                            </span>
                        )
                    )}
                </p>
            </PolicyCard>

            <PolicyCard title={t("returns.excluded.title")}>
                <p>
                    {t("returns.excluded.items", { returnObjects: true }).map(
                        (item, index) => (
                            <span key={index}>
                                • {item}
                                <br />
                            </span>
                        )
                    )}
                </p>
            </PolicyCard>

            <PolicyCard title={t("returns.changes.title")}>
                <p>{t("returns.changes.content")}</p>
            </PolicyCard>

            <PolicyCard title={t("returns.contact.title")}>
                <p>
                    {t("returns.contact.content")}{" "}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontWeight: 600 }}
                    >
                        {t("returns.contact.cta")}
                    </a>
                    .
                </p>
            </PolicyCard>
        </section>
    );
}
