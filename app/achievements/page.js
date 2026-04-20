import styles from './page.module.css';

const platforms = [
  {
    name: 'LeetCode',
    handle: '@your_handle',
    url: 'https://leetcode.com/your_handle',
    stats: [
      { label: 'Problems Solved', value: '350+' },
      { label: 'Contest Rating', value: '1820' },
      { label: 'Top %', value: '12%' },
    ],
    color: '#ffa116',
    icon: '🏆',
    description:
      'Consistent daily problem solving with focus on dynamic programming and graph algorithms.',
  },
  {
    name: 'Codeforces',
    handle: '@your_handle',
    url: 'https://codeforces.com/profile/your_handle',
    stats: [
      { label: 'Problems Solved', value: '200+' },
      { label: 'Max Rating', value: '1450' },
      { label: 'Rank', value: 'Specialist' },
    ],
    color: '#1890ff',
    icon: '⚔️',
    description:
      'Regular contest participation with a focus on competitive thinking and speed coding.',
  },
  {
    name: 'GeeksforGeeks',
    handle: '@your_handle',
    url: 'https://auth.geeksforgeeks.org/user/your_handle',
    stats: [
      { label: 'Problems Solved', value: '180+' },
      { label: 'Coding Score', value: '520' },
      { label: 'Institute Rank', value: '#5' },
    ],
    color: '#2f8d46',
    icon: '📗',
    description:
      'Built a strong DSA foundation through structured practice of core data structure problems.',
  },
  {
    name: 'HackerRank',
    handle: '@your_handle',
    url: 'https://hackerrank.com/your_handle',
    stats: [
      { label: 'Stars', value: '5⭐' },
      { label: 'Badges', value: '12' },
      { label: 'Certifications', value: '3' },
    ],
    color: '#1ba94c',
    icon: '🎯',
    description:
      'Earned gold badges in Problem Solving, Python, and SQL with multiple verified certifications.',
  },
  {
    name: 'CodeChef',
    handle: '@your_handle',
    url: 'https://codechef.com/users/your_handle',
    stats: [
      { label: 'Problems Solved', value: '100+' },
      { label: 'Max Rating', value: '1650' },
      { label: 'Stars', value: '3⭐' },
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
