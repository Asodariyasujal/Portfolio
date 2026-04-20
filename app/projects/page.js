import styles from './page.module.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce application with real-time inventory management, payment processing via Stripe, and an admin dashboard.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'linear-gradient(135deg, #6c63ff 0%, #3b82f6 100%)',
  },
  {
    title: 'Real-Time Chat App',
    description:
      'A WebSocket-powered messaging platform with end-to-end encryption, file sharing, and group channels.',
    tags: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'linear-gradient(135deg, #00d4aa 0%, #06b6d4 100%)',
  },
  {
    title: 'AI Code Reviewer',
    description:
      'An AI-powered tool that reviews pull requests, suggests improvements, and detects potential bugs using GPT-4 integration.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'Docker'],
    github: 'https://github.com',
    live: null,
    gradient: 'linear-gradient(135deg, #ff6b9d 0%, #c084fc 100%)',
  },
  {
    title: 'Portfolio CMS',
    description:
      'A headless CMS designed for developer portfolios with Markdown support, image optimization, and one-click deploy.',
    tags: ['Next.js', 'MDX', 'Vercel', 'TailwindCSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'linear-gradient(135deg, #ffc857 0%, #f97316 100%)',
  },
  {
    title: 'Algorithm Visualizer',
    description:
      'Interactive visualizer for sorting, pathfinding, and graph algorithms. Built for CS students learning DSA concepts.',
    tags: ['React', 'Canvas API', 'Algorithms', 'CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'linear-gradient(135deg, #a78bfa 0%, #6c63ff 100%)',
  },
  {
    title: 'DevOps Dashboard',
    description:
      'Monitoring dashboard integrating CI/CD pipelines, deployment status, server health metrics, and alert management.',
    tags: ['React', 'D3.js', 'Docker', 'AWS'],
    github: 'https://github.com',
    live: null,
    gradient: 'linear-gradient(135deg, #22d3ee 0%, #2dd4bf 100%)',
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
