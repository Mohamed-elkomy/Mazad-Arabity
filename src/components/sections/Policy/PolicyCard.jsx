import styles from "./PolicyCard.module.css";

export default function PolicyCard({
  title,
  children,
  as: Heading = "h2",
}) {
  return (
    <div
      className={`${styles.policyCard} animate__animated animate__fadeInUp`}
    >
      <Heading className={styles.title}>{title}</Heading>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
