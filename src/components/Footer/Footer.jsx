import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.footerLine} />
      <p className={styles.footerText}>
        Weather©. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;