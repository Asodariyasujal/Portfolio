import styles from './page.module.css';

const experiences = [
  {
    role: 'Software Engineer Intern',
    company: 'odoo india private limited',
    period: 'Jan 2025 – Present',
    location: 'Gandhinager, Gujarat',
    description: [
      'CURRENTLY I AM WORKING ON FULL WEBSITE TEAM IN ODOO COMPANY TO AMKE WEBSIE BUILDER IS USED TO\
      MAKING WEBSITE EASILY AND INTRODUCE MANY HELPFUL FEATURES IN WEBSITE BUILDER.',
    ],
    tags: ['Odoo', 'PostgreSQL', 'Python', 'JavaScript', 'OWL'],
    current: true,
  },
];

export default function Experience() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Career</span>
          <h1 className="section-title">Work Experience</h1>
          <p className="section-subtitle">
            My journey through internships, freelance projects, and open-source
            contributions.
          </p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div
              key={exp.role + exp.company}
              className={styles.timelineItem}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={styles.timelineLine}>
                <div
                  className={`${styles.timelineDot} ${
                    exp.current ? styles.dotCurrent : ''
                  }`}
                />
              </div>

              <div className={styles.timelineCard}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{exp.period}</span>
                    <span className={styles.location}>📍 {exp.location}</span>
                    {exp.current && (
                      <span className={styles.badge}>Current</span>
                    )}
                  </div>
                </div>
                <ul className={styles.descList}>
                  {exp.description.map((item) => (
                    <li key={item} className={styles.descItem}>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className={styles.tags}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
