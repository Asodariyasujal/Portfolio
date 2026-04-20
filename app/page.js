import styles from './page.module.css';

const technologies = [
  { name: 'JavaScript', icon: '⚡', color: '#f7df1e' },
  { name: 'TypeScript', icon: '🔷', color: '#3178c6' },
  { name: 'React', icon: '⚛️', color: '#61dafb' },
  { name: 'Next.js', icon: '▲', color: '#ffffff' },
  { name: 'Node.js', icon: '🟢', color: '#68a063' },
  { name: 'Python', icon: '🐍', color: '#3776ab' },
  { name: 'C++', icon: '⚙️', color: '#00599c' },
  { name: 'Git', icon: '📦', color: '#f05032' },
  { name: 'MongoDB', icon: '🍃', color: '#47a248' },
  { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
  { name: 'Docker', icon: '🐳', color: '#2496ed' },
  { name: 'AWS', icon: '☁️', color: '#ff9900' },
];

const stats = [
  { label: 'Projects', value: '12+' },
  { label: 'Problems Solved', value: '500+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Years Coding', value: '3+' },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroLabel}>
              <span className={styles.statusDot} />
              Available for opportunities
            </div>
            <h1 className={styles.heroTitle}>
              Hi, I&apos;m <span className={styles.heroName}>sujal asodariya</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Full-Stack Developer &amp; odoo dvloper
            </p>
            <p className={styles.heroDesc}>
              I build elegant, performant web applications and love solving
              algorithmic challenges. Passionate about clean code, modern
              technologies, and creating impactful digital experiences.
            </p>
            <div className={styles.heroBtns}>
              <a href="/projects" className="btn btn-primary">
                View Projects →
              </a>
              <a href="/links" className="btn btn-outline">
                Get in Touch
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <span className={styles.codeDot} style={{ background: '#ff5f57' }} />
                <span className={styles.codeDot} style={{ background: '#febc2e' }} />
                <span className={styles.codeDot} style={{ background: '#28c840' }} />
                <span className={styles.codeTitle}>about.js</span>
              </div>
              <pre className={styles.codeContent}>
{`const developer = {
  name: "Asodariya Sujal",
  role: "Full-Stack Dev",
  loves: ["clean code",
          "algorithms",
          "open source"],
  currentFocus: "Next.js",
  coffee: true ☕
};`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECH STACK SECTION ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Tech Stack</span>
            <h2 className="section-title">Technologies I Work With</h2>
            <p className="section-subtitle">
              A constantly evolving toolkit — from front-end frameworks to cloud
              infrastructure.
            </p>
          </div>
          <div className={styles.techGrid}>
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className={styles.techCard}
                style={{ '--tech-color': tech.color }}
              >
                <span className={styles.techIcon}>{tech.icon}</span>
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
