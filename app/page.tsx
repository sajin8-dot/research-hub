import Link from 'next/link'

const articles = [
  {
    slug: 'car-kodiaq-vs-rivals',
    title: 'The Kodiaq Question: ₹54L Dream or ₹37L Wisdom?',
    excerpt: 'Family SUV search for Bangalore. Kodiaq vs Tucson vs Compass vs Tiguan — research, numbers, and a verdict that split the team.',
    category: 'Car Decision',
    date: 'April 3, 2026',
    tag: 'decision',
    verdict: 'Tucson — but Kodiaq deserves another look',
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
