import './globals.css'

export const metadata = {
  title: {
    default: 'Research Hub — Sebastian Chandy',
    template: '%s | Research Hub',
  },
  description: 'Deep research, long reads, and strategic analysis by Sebastian Chandy.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📡</text></svg>" />
      </head>
      <body>
        <header className="site-header">
          <div className="container">
            <div className="site-logo">
              SEB<span>.</span>CHANDY
            </div>
            <nav className="site-nav">
              <a href="/">Research</a>
              <a href="/about">About</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Sebastian Chandy. Deep work, long reads.</p>
            <p>Built with curiosity.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
