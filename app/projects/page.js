import styles from './page.module.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce application with real-time inventory management, payment processing via Stripe, and an admin dashboard.',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Asodariyasujal/E-commerce',
    gradient: 'linear-gradient(135deg, #6c63ff 0%, #3b82f6 100%)',
  },
  {
    title: 'Youtube Clone',
    description:
      'A clone of youtube with all the features of youtube.',
    tags: ['React.js', 'API'],
    github: 'https://github.com/Asodariyasujal/YT_2.0', 
    live: "https://youtubevideo-2zw4mabxt-asodariya-sujals-projects.vercel.app/",
    gradient: 'linear-gradient(135deg, #00d4aa 0%, #06b6d4 100%)',
  },
  {
    title: 'Temperature Convertor',
    description:
      'A  simple and easy to use temperature convertor.',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    github: 'https://github.com/Asodariyasujal/Temperature-convertor', 
    gradient: 'linear-gradient(135deg, #00d4aa 0%, #06b6d4 100%)',
  },
];

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h1 className="section-title">Featured Projects</h1>
          <p className="section-subtitle">
            A curated selection of projects that highlight my skills in
            full-stack development, system design, and problem solving.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={styles.projectCard}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className={styles.projectBanner}
                style={{ background: project.gradient }}
              >
                <span className={styles.projectIndex}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className={styles.projectBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    ↗ GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      ↗ Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
