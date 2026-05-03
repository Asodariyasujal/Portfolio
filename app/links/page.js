import styles from './page.module.css';

const socialLinks = [
  {
    name: 'GitHub',
    handle: '@Asodariyasujal',
    url: 'https://github.com/Asodariyasujal',
    description:
      'Open source contributions, personal projects, and code experiments.',
    icon: '🐙',
    color: '#ffffff',
    bg: 'linear-gradient(135deg, #24292e 0%, #040d21 100%)',
  },
  {
    name: '𝕏 (Twitter)',
    handle: '@Sujal2912',
    url: 'https://x.com/Sujal2912',
    description:
      'Tech thoughts, dev tips, and updates about my coding journey.',
    icon: '✖',
    color: '#ffffff',
    bg: 'linear-gradient(135deg, #15202b 0%, #1a1a2e 100%)',
  },
  {
    name: 'LinkedIn',
    handle: 'asodariya sujal',
    url: 'https://www.linkedin.com/in/asodariya-sujal-3b9321246/',
    description:
      'Professional network, work experience, and career milestones.',
    icon: '💼',
    color: '#0a66c2',
    bg: 'linear-gradient(135deg, #0a66c2 0%, #004182 100%)',
  },
  {
    name: 'Email',
    handle: 'sujalasodariya03@email.com',
    url: 'https://mail.google.com/mail/u/0/#inbox',
    description:
      'Reach out for collaborations, freelance work, or just to say hello.',
    icon: '✉️',
    color: '#ea4335',
    bg: 'linear-gradient(135deg, #ea4335 0%, #c5221f 100%)',
  },
  {
    name: 'Resume / CV',
    handle: 'Download PDF',
    url: 'https://drive.google.com/file/d/1eFDsEOh5SwnOuKPxD4fkB7nplEaEfVFm/view?usp=drive_link',
    description:
      'My complete resume with education details, skills, and certifications.',
    icon: '📄',
    color: '#00d4aa',
    bg: 'linear-gradient(135deg, #00d4aa 0%, #059669 100%)',
  },
];

export default function Links() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Connect</span>
          <h1 className="section-title">Get in Touch</h1>
          <p className="section-subtitle">
            Find me across the web. Let&apos;s connect, collaborate, or just
            have a conversation about code.
          </p>
        </div>

        <div className={styles.linksGrid}>
          {socialLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={styles.linkCard}
              style={{
                '--link-color': link.color,
                animationDelay: `${i * 0.08}s`,
              }}
            >
              <div className={styles.linkCardBanner} style={{ background: link.bg }}>
                <span className={styles.linkIcon}>{link.icon}</span>
              </div>
              <div className={styles.linkCardBody}>
                <h3 className={styles.linkName}>{link.name}</h3>
                <p className={styles.linkHandle}>{link.handle}</p>
                <p className={styles.linkDesc}>{link.description}</p>
                <span className={styles.linkAction}>
                  {link.name === 'Resume / CV' ? 'Download' : link.url.startsWith('mailto') ? 'Send Email' : 'Visit'} →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
