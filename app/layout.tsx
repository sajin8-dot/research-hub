import './globals.css'
import { Merriweather } from "next/font/google";
import { Raleway } from "next/font/google";
import { cn } from "@/lib/utils";

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-serif',
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Research Hub — Sebastian Chandy',
    template: '%s | Research Hub',
  },
  description: 'Deep research, long reads, and strategic analysis by Sebastian Chandy.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(raleway.variable, merriweather.variable, "font-sans")}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📡</text></svg>" />
      {/* PWA Meta Tags */}
      <meta name="theme-color" content="#C4622D" />
      {/* Open Graph */}
      <meta property="og:site_name" content="Research Hub" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Research Hub — Sebastian Chandy" />
      <meta property="og:description" content="Deep research on cars, farms, strategy, and faith. Real decisions, researched properly." />
      <meta property="og:image" content="/icons/icon-512.png" />

      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Research Hub" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icons/icon-192.png" />

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

      {/* Service Worker Registration */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
                  function(registration) {
                    console.log('SW registered:', registration.scope);
                  },
                  function(err) {
                    console.log('SW registration failed:', err);
                  }
                );
              });
            }
          `,
        }}
      />

      </body>
    </html>
  )
}
