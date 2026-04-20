import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.left}>
          <span className={styles.logo}>⟐</span>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Portfolio. Built with Next.js
          </p>
        </div>
        <div className={styles.right}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            GitHub
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            𝕏
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
