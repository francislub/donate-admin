import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>By programer</div>
      <div className={styles.text}>© donate.</div>
    </div>
  );
};

export default Footer;
