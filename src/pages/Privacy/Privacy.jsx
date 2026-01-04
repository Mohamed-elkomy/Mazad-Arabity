import { useTranslation } from "react-i18next";
import PolicyCard from "../../components/sections/Policy/PolicyCard";
import styles from "../../assets/styles/PolicyPages.module.css";

const getWhatsappLink = (msg) =>
  `https://wa.me/201000000000?text=${encodeURIComponent(msg)}`;

export default function PrivacyPage() {
  const { t } = useTranslation("policy");

  const whatsappLink = getWhatsappLink(
    t("privacy.contact.whatsappMessage")
  );

  return (
    <section className={styles.policyContainer}>
      <h1 className={`${styles.pageTitle} animate__animated animate__fadeInDown`}>
        {t("privacy.pageTitle")}
      </h1>

      <PolicyCard title={t("privacy.collect.title")}>
        <p>{t("privacy.collect.intro")}</p>
        <p>
          {t("privacy.collect.items", { returnObjects: true }).map(
            (item, index) => (
              <span key={index}>
                • {item}
                <br />
              </span>
            )
          )}
        </p>
      </PolicyCard>

      <PolicyCard title={t("privacy.usage.title")}>
        <p>{t("privacy.usage.intro")}</p>
        <p>
          {t("privacy.usage.items", { returnObjects: true }).map(
            (item, index) => (
              <span key={index}>
                • {item}
                <br />
              </span>
            )
          )}
        </p>
      </PolicyCard>

      <PolicyCard title={t("privacy.security.title")}>
        <p>{t("privacy.security.content")}</p>
        <p>{t("privacy.security.note")}</p>
      </PolicyCard>

      <PolicyCard title={t("privacy.cookies.title")}>
        <p>{t("privacy.cookies.content")}</p>
      </PolicyCard>

      <PolicyCard title={t("privacy.sharing.title")}>
        <p>{t("privacy.sharing.intro")}</p>
        <p>
          {t("privacy.sharing.items", { returnObjects: true }).map(
            (item, index) => (
              <span key={index}>
                • {item}
                <br />
              </span>
            )
          )}
        </p>
        <p>{t("privacy.sharing.note")}</p>
      </PolicyCard>

      <PolicyCard title={t("privacy.rights.title")}>
        <p>{t("privacy.rights.content")}</p>
      </PolicyCard>

      <PolicyCard title={t("privacy.retention.title")}>
        <p>{t("privacy.retention.content")}</p>
      </PolicyCard>

      <PolicyCard title={t("privacy.children.title")}>
        <p>{t("privacy.children.content")}</p>
      </PolicyCard>

      <PolicyCard title={t("privacy.updates.title")}>
        <p>{t("privacy.updates.content")}</p>
      </PolicyCard>

      <PolicyCard title={t("privacy.contact.title")}>
        <p>
          {t("privacy.contact.content")}{" "}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 600 }}
          >
            {t("privacy.contact.cta")}
          </a>
          .
        </p>
      </PolicyCard>
    </section>
  );
}
