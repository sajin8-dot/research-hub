'use client'

import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'

export default function MultiAgentOrchestrationArticle() {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch('/articles/multi-agent-orchestration-patterns.md')
      .then(res => res.text())
      .then(text => setContent(text))
      .catch(console.error)
  }, [])

  return (
    <main>
      <header className="article-header">
        <div className="container">
          <Link href="/" className="back-link">← Back to Research</Link>
          <h1>Six Patterns to Future-Proof Your Multi-Agent Stack</h1>
          <p className="article-subtitle">
            Seb's OpenClaw agent architecture is already in the top percentile of enterprise deployments. The next evolution isn't about adopting every hyped framework — it's about precision engineering. Here's what to build, what to skip, and why.
          </p>
          <div className="article-meta">
            <span className="article-tag">AI Architecture</span>
            <span className="article-date">April 2026</span>
          </div>
        </div>
      </header>

      <div className="container-article">
        <div className="article-body">
          {content ? (
            <ReactMarkdown>{content}</ReactMarkdown>
          ) : (
            <p style={{ opacity: 0.5 }}>Loading...</p>
          )}
        </div>
      </div>
    </main>
  )
}
