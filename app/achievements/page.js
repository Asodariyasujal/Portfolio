import styles from './page.module.css';

const platforms = [
  {
    name: 'LeetCode',
    handle: '@Asodariya_sujal2003',
    url: 'https://leetcode.com/u/Asodariya_sujal2003/',
    stats: [
      { label: 'Problems Solved', value: '200+' },
      { label: 'Contest Rating', value: '1323' },
      { label: 'Top %', value: '95.54%' },
    ],
    color: '#ffa116',
    icon: '🏆',
    description:
      'solving real world problems',
  },
  {
    name: 'Codeforces',
    handle: '@sujal_asodariya',
    url: 'https://codeforces.com/profile/sujal_asodariya',
    stats: [
      { label: 'Problems Solved', value: '78+' },
      { label: 'Max Rating', value: '928' },
      { label: 'Rank', value: 'newbie' },
    ],
    color: '#1890ff',
    icon: '⚔️',
    description:
      'Regular contest participation with a focus on competitive thinking and speed coding.',
  },
  {
    name: 'GeeksforGeeks',
    handle: 'sujalasodbbt2',
    url: 'https://practice.geeksforgeeks.org/leaderboard',
    stats: [
      { label: 'Problems Solved', value: 'Easy' },
    ],
    color: '#2f8d46',
    icon: '📗',
    description:
      'Built a strong DSA foundation through structured practice of core data structure problems.',
  },
  {
    name: 'CodeChef',
    handle: 'asodariyasujal',
    url: 'https://www.codechef.com/users/asodariyasujal',
    stats: [
    ],
    color: '#5b4638',
    icon: '👨‍🍳',
    description:
      'Participated in monthly long challenges and cook-off rounds to strengthen problem solving.',
  },
];

export default function Achievements() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Competitive Programming</span>
          <h1 className="section-title">Coding Achievements</h1>
          <p className="section-subtitle">
            My journey across competitive programming platforms — solving
            problems, competing in contests, and leveling up my skills.
          </p>
        </div>

        <div className={styles.platformsGrid}>
          {platforms.map((platform, i) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.platformCard}
              style={{
                '--platform-color': platform.color,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div className={styles.cardTop}>
                <span className={styles.platformIcon}>{platform.icon}</span>
                <div>
                  <h3 className={styles.platformName}>{platform.name}</h3>
                  <p className={styles.platformHandle}>{platform.handle}</p>
                </div>
              </div>
              <p className={styles.platformDesc}>{platform.description}</p>
              <div className={styles.statsRow}>
                {platform.stats.map((stat) => (
                  <div key={stat.label} className={styles.stat}>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className={styles.visitLink}>
                Visit Profile →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
