import Link from 'next/link'

const articles = [
  {
    slug: 'multi-agent-orchestration-patterns',
    title: 'Six Patterns to Future-Proof Your Multi-Agent Stack',
    excerpt: 'Pydantic Shields, Hybrid DAGs, Experience Replay, Context Pruning, MCTS, and the Database Coherence Problem. The patterns that earn their complexity cost — and the graveyard of hype to skip entirely.',
    category: 'AI Architecture',
    date: 'April 2026',
    tag: 'deep-research',
    verdict: 'Top percentile stack. Precision engineering over framework adoption.',
  },
  {
    slug: 'venue-upgrade',
    title: 'Upgrading From the Venue DCT — The Honest Search',
    excerpt: 'The Venue DCT has been a great city car. Three kids later, space is the only real filter. The Seltos 2026 changes everything — here is the complete upgrade search.',
    category: 'Car Search',
    date: 'April 2026',
    tag: 'decision',
    verdict: 'Seltos 2026 Turbo DCT — the most honest upgrade from the Venue',
  },
]

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="hero-label">Research Hub</p>
          <h1>Deep reads.<br />Real decisions.</h1>
          <p>
            Long-form research on the things that matter — cars, farms, strategy, faith.
            No fluff. No corporate templates. Just sharp analysis on questions worth answering properly.
          </p>
        </div>
      </section>

      <section className="article-list">
        <div className="container">
          <h2>All Research</h2>
          {articles.map((article) => (
            <Link key={article.slug} href={`/articles/${article.slug}`} className="article-card">
              <div className="article-meta">
                <span className={`article-tag ${article.tag === 'decision' ? 'decision' : ''}`}>
                  {article.category}
                </span>
                <span className="article-date">{article.date}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
