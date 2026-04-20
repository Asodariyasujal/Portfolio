import styles from './page.module.css';

const experiences = [
  {
    role: 'Software Engineer Intern',
    company: 'Tech Company A',
    period: 'Jun 2025 – Present',
    location: 'Remote',
    description: [
      'Developed and maintained RESTful APIs serving 10K+ daily requests using Node.js and Express.',
      'Implemented real-time notification system with WebSockets, reducing user response time by 40%.',
      'Collaborated with cross-functional teams in an Agile environment using Jira and Confluence.',
    ],
    tags: ['Node.js', 'React', 'PostgreSQL', 'AWS'],
    current: true,
  },
  {
    role: 'Frontend Developer',
    company: 'Startup B',
    period: 'Jan 2025 – May 2025',
    location: 'Hybrid',
    description: [
      'Built responsive UI components for a SaaS dashboard using React and CSS Modules.',
      'Optimized Lighthouse performance scores from 62 to 94 through code splitting and lazy loading.',
      'Mentored 2 junior developers and conducted code reviews for the frontend team.',
    ],
    tags: ['React', 'Next.js', 'CSS Modules', 'Figma'],
    current: false,
  },
  {
    role: 'Open Source Contributor',
    company: 'Various Projects',
    period: 'Jul 2024 – Dec 2024',
    location: 'Remote',
    description: [
      'Contributed to 5+ open source projects including documentation improvements and bug fixes.',
      'Submitted 15+ pull requests with a 90% merge rate across multiple repositories.',
      'Participated in Hacktoberfest 2024 and earned all milestone badges.',
    ],
    tags: ['Git', 'Python', 'JavaScript', 'Open Source'],
    current: false,
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
