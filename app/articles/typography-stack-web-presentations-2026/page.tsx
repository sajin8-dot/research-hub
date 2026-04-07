import Link from 'next/link'

export const metadata = {
  title: 'The Typography Stack for Web Presentations in 2026',
  description: 'How to assemble a modern typography stack for web presentations: CSS‑native features, lightweight JavaScript utilities, and framework‑specific integrations.',
}

export default function TypographyStackArticle() {
  return (
    <main>

      {/* ── HERO HEADER ── */}
      <header className="article-header">
        <div className="container">
          <Link href="/" className="back-link">← Back to Research</Link>
          <h1>The Typography Stack for Web Presentations in 2026</h1>
          <p className="article-subtitle">CSS‑native features, lightweight JavaScript utilities, and framework‑specific integrations</p>
          <div className="article-meta">
            <span className="article-tag">Web Development</span>
            <span className="article-tag">Typography</span>
            <span className="article-date">April 2026</span>
          </div>
        </div>
      </header>

      {/* ── ARTICLE BODY ── */}
      <div className="container-article">
        <div className="article-body">

          {/* VERDICT */}
          <div className="verdict-box">
            <p className="verdict-label">The Core Finding</p>
            <p className="verdict-text">
              The era of standalone typography libraries is over. Modern web presentations are built on a stack of CSS‑native features (clamp(), text‑box‑trim), lightweight JavaScript utilities (Fitty, textfit), framework‑aware tools (GSAP + SplitText, Fontsource), and a clear framework matrix (reveal.js, Slidev, Marp). This combination delivers control without bloat, performance without juggling.
            </p>
          </div>

          {/* TOC */}
          <nav className="toc">
            <p className="toc-title">Contents</p>
            <ol className="toc-list">
              <li><a href="#foundation">CSS‑Native Typography</a></li>
              <li><a href="#fitting">Text Fitting & Responsive Scale</a></li>
              <li><a href="#animation">The Animation Layer</a></li>
              <li><a href="#font-loading">Font Loading That Doesn't Break Things</a></li>
              <li><a href="#framework-matrix">The Framework Matrix</a></li>
              <li><a href="#type-scale">Fluid Type Scale Tools</a></li>
              <li><a href="#accessibility">Accessibility & i18n</a></li>
              <li><a href="#export">Export Pipeline</a></li>
              <li><a href="#speaker-notes">Speaker Notes — Implementation</a></li>
              <li><a href="#recommended-stack">The Recommended Stack</a></li>
              <li><a href="#bottom-line">The Bottom Line</a></li>
            </ol>
          </nav>

          {/* INTRO */}
          <p>
            The landscape has shifted—standalone typography libraries are dead. What replaced them isn't a single monolithic framework but a strategic combination of CSS‑native features, lightweight JavaScript utilities, and framework‑specific integrations. 2026 is all about assembling a stack that gives you control without the bloat, performance without the juggling.
          </p>
          <p>
            Here's the stack that works today.
          </p>

          {/* 1. CSS‑Native Typography */}
          <section id="foundation">
            <h2>1. The New Foundation: CSS‑Native Typography</h2>
            <p>
              Typography on the web has matured. The era of massive JavaScript libraries dictating font sizes is over. Modern browsers now handle the heavy lifting with three critical CSS features:
            </p>
            <ul>
              <li><strong>clamp() for fluid font sizing</strong> — Replace media queries with a single function. <code>font‑size: clamp(1rem, 2vw + 0.5rem, 2.5rem)</code> creates responsive text that scales smoothly between minimum and maximum bounds.</li>
              <li><strong>text‑box‑trim (Chrome 133+, Safari 18.2+)</strong> — This property removes the gap between the font's bounding box and its actual glyphs, enabling precise vertical rhythm without manual adjustment.</li>
              <li><strong>Why JS killed itself</strong> — Libraries like FitText or BigText used to solve problems CSS couldn't handle. Today, those problems have solutions—shipped in browsers, not scripts.</li>
            </ul>
            <pre><code>{`/* Fluid typography with clamp() */
h1 { font-size: clamp(2rem, 5vw, 4rem); }
h2 { font-size: clamp(1.5rem, 3vw, 2.5rem); }`}</code></pre>
            <p>
              Result: No dependencies. No layout shifts. Just typography that breathes.
            </p>
          </section>

          {/* 2. Text Fitting & Responsive Scale */}
          <section id="fitting">
            <h2>2. Text Fitting & Responsive Scale</h2>
            <p>
              Not every title fits its container. For those moments, three tools dominate:
            </p>
            <ul>
              <li><strong>Fitty</strong> — Best for headlines. It shrinks text to fit containers dynamically—no predefined ratios or manual tweaking.</li>
              <li><strong>textfit</strong> (npm package) — A binary search alternative to Fitty. It dials font size up or down until the text fits exactly.</li>
              <li><strong>r‑fit‑text</strong> — Built into reveal.js. Toggles full‑width text containers that scale responsively.</li>
            </ul>
            <pre><code>{`// Fitty: auto‑fit headlines
new Fitty('.headline', { maxFontSize: 48 });

// textfit: binary search fit
textFit(document.querySelector('#description'));

// reveal.js: automatic
<h2 class="r-fit-text">Title that fits</h2>`}</code></pre>
            <p>
              Use Fitty for design‑driven projects where precision matters. Use textfit when you need predictable behavior. Use r‑fit‑text when you're already in reveal.js and want zero setup.
            </p>
          </section>

          {/* 3. The Animation Layer */}
          <section id="animation">
            <h2>3. The Animation Layer</h2>
            <p>
              Animation separates good presentations from great ones. Today, you have three tiers:
            </p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Tool</th>
                  <th>Best For</th>
                  <th>Size</th>
                  <th>Commercial Use</th>
                  <th>Timeline Control</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>GSAP + SplitText</strong></td>
                  <td>Complex timelines</td>
                  <td>~50KB</td>
                  <td>Yes (free)</td>
                  <td>Full</td>
                </tr>
                <tr>
                  <td><strong>Anime.js</strong></td>
                  <td>Lightweight reveals</td>
                  <td>~10KB</td>
                  <td>Yes</td>
                  <td>Limited</td>
                </tr>
                <tr>
                  <td><strong>Motion/Framer Motion</strong></td>
                  <td>React/Vue components</td>
                  <td>~20KB</td>
                  <td>Yes</td>
                  <td>Full</td>
                </tr>
              </tbody>
            </table>
            <pre><code>{`// GSAP + SplitText: split letters for animation
const splitText = new SplitText("#headline", { type: "chars" });
gsap.from(splitText.chars, {
  opacity: 0,
  y: 100,
  stagger: 0.1,
  duration: 0.8
});`}</code></pre>
            <p>
              Choose GSAP when you need choreographed character animations or multi‑layer reveals. Use Anime.js for simple fades and slides. Use Motion/Framer Motion if your stack is React/Vue and you want component‑level animations.
            </p>
          </section>

          {/* 4. Font Loading That Doesn't Break Things */}
          <section id="font-loading">
            <h2>4. Font Loading That Doesn't Break Things</h2>
            <p>
              Self‑hosted fonts, done right. Key players:
            </p>
            <ul>
              <li><strong>Fontsource</strong> — Eliminates CDN dependency. Install via npm: <code>npm install @fontsource/roboto</code>. Import in your entry file: <code>import '@fontsource/roboto';</code>.</li>
              <li><strong>font‑display</strong> — Control fallback behavior. <code>font‑display: optional</code> hides FOUT if the font isn't ready. <code>swap</code> flashes a fallback then swaps.</li>
              <li><strong>FontFaceObserver</strong> — Script‑based timing. Detect when a custom font loads, then trigger animation or reveal content only when typography is stable.</li>
            </ul>
            <pre><code>{`/* font‑display: optional */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter.woff2') format('woff2');
  font-display: optional;
}

/* FontFaceObserver */
new FontFaceObserver('Inter').load().then(() => {
  document.body.classList.add('fonts-loaded');
});`}</code></pre>
            <p>
              Self‑host fonts via Fontsource. Use <code>optional</code> for critical text, <code>swap</code> for secondary content. Observe font load states to avoid layout shifts during animations.
            </p>
          </section>

          {/* 5. The Framework Matrix */}
          <section id="framework-matrix">
            <h2>5. The Framework Matrix</h2>
            <p>
              Not all frameworks treat typography equally. Here's how they stack up:
            </p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Criteria</th>
                  <th>reveal.js</th>
                  <th>Slidev</th>
                  <th>Marp</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Workflow</td>
                  <td>HTML/CSS/JS</td>
                  <td>Markdown + Vue components</td>
                  <td>Markdown</td>
                </tr>
                <tr>
                  <td>Target Audience</td>
                  <td>Developers, engineers</td>
                  <td>Designers, content creators</td>
                  <td>Markdown purists</td>
                </tr>
                <tr>
                  <td>Customizability</td>
                  <td>High (full control)</td>
                  <td>Medium (Vue overrides)</td>
                  <td>Low (theme‑based)</td>
                </tr>
                <tr>
                  <td>Export Fidelity</td>
                  <td>Medium (Puppeteer quirks)</td>
                  <td>High (native Playwright)</td>
                  <td>Low (browser PDF)</td>
                </tr>
                <tr>
                  <td>Learning Curve</td>
                  <td>Steep</td>
                  <td>Moderate</td>
                  <td>Shallow</td>
                </tr>
                <tr>
                  <td>Maintenance</td>
                  <td>Community‑driven</td>
                  <td>Active core team</td>
                  <td>Stable but slow</td>
                </tr>
              </tbody>
            </table>
            <ul>
              <li>Use <strong>reveal.js</strong> when you need pixel‑perfect control over every glyph.</li>
              <li>Use <strong>Slidev</strong> when your audience includes designers who want to tweak fonts via Vue components.</li>
              <li>Use <strong>Marp</strong> for simple decks where Markdown is the primary interface.</li>
            </ul>
            <p>
              Trade‑offs: reveal.js gives you power but asks for patience. Slidev balances ease and flexibility. Marp prioritizes simplicity over precision.
            </p>
          </section>

          {/* 6. Fluid Type Scale Tools */}
          <section id="type-scale">
            <h2>6. Fluid Type Scale Tools</h2>
            <p>
              Two calculators dominate today:
            </p>
            <ul>
              <li><strong>Utopia</strong> — Generates <code>clamp()</code> formulas using a visual builder. Define min/max viewport sizes and base font size. Utopia outputs the CSS—plug and play.</li>
              <li><strong>Type Scale</strong> — Generates static type scales using modular ratios (e.g., golden ratio, major third). Outputs reusable CSS variables.</li>
            </ul>
            <pre><code>{`/* Utopia‑generated */
:root {
  --step--2: clamp(0.781rem, calc(0.733rem + 0.239vw), 0.938rem);
  --step-0: clamp(1rem, calc(0.944rem + 0.278vw), 1.25rem);
  --step-2: clamp(1.266rem, calc(1.185rem + 0.401vw), 1.562rem);
}`}</code></pre>
            <p>
              Fluid scales are the future. Utopia for responsive projects, Type Scale for systems with rigid ratios. Both eliminate manual breakpoint hunting.
            </p>
          </section>

          {/* 7. Accessibility & i18n */}
          <section id="accessibility">
            <h2>7. Accessibility & i18n</h2>
            <p>
              Typography isn't just aesthetics—it's legibility. WCAG 2.1 AA demands:
            </p>
            <ul>
              <li>Minimum <strong>16px</strong> base font size for body text</li>
              <li><strong>4.5:1</strong> contrast ratio for normal text</li>
              <li><strong>3:1</strong> for large text (18.66px+ bold or 24px+ normal)</li>
              <li><strong>Rem units</strong> for user scalability</li>
            </ul>
            <p>
              For international content:
            </p>
            <ul>
              <li><strong>Noto Sans</strong> — Covers Devanagari, Malayalam, Tamil, and 100+ scripts—fully open‑source.</li>
              <li><strong>Language‑specific font stacks</strong> — Define fallbacks per language to preserve readability.</li>
            </ul>
            <pre><code>{`/* Accessible typography */
body {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

/* Malayalam content */
body[lang="ml"] {
  font-family: 'Noto Sans Malayalam', sans-serif;
}`}</code></pre>
            <p>
              WCAG isn't optional. Test contrast with <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener">WebAIM Contrast Checker</a>. For i18n, use Noto Sans or system fonts that cover your target scripts.
            </p>
          </section>

          {/* 8. Export Pipeline */}
          <section id="export">
            <h2>8. Export Pipeline</h2>
            <p>
              Live URLs vs. static PDFs: the eternal debate. Each format has trade‑offs:
            </p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Format</th>
                  <th>Tool</th>
                  <th>Fidelity</th>
                  <th>Workaround</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>reveal.js</strong></td>
                  <td>Decktape + Puppeteer</td>
                  <td>High</td>
                  <td>Specify <code>--size</code> for viewport; self‑host fonts via @font‑face for embedding</td>
                </tr>
                <tr>
                  <td><strong>Slidev</strong></td>
                  <td>Native Playwright</td>
                  <td>Excellent</td>
                  <td>No hacks needed</td>
                </tr>
                <tr>
                  <td><strong>Marp</strong></td>
                  <td>Browser PDF</td>
                  <td>Medium</td>
                  <td>Use Chrome, avoid Gill Sans</td>
                </tr>
              </tbody>
            </table>
            <pre><code>{`# reveal.js export with viewport specification
decktape reveal --size 1280x720 index.html output.pdf`}</code></pre>
            <p>
              Strategic rule:
            </p>
            <ul>
              <li>Use <strong>live URLs</strong> for interactive talks, demos, or workshops</li>
              <li>Use <strong>static PDFs</strong> for archival, email sharing, or low‑bandwidth contexts</li>
            </ul>
            <p>
              Choose Slidev for fidelity. Use reveal.js when you need live interactivity. Avoid Marp for anything mission‑critical—its PDF output is too fragile.
            </p>
          </section>

          {/* 9. Speaker Notes — Implementation */}
          <section id="speaker-notes">
            <h2>9. Speaker Notes — Implementation</h2>
            <p>
              Notes aren't an afterthought—they're part of the performance. Here's how to implement them:
            </p>
            <ul>
              <li><strong>reveal.js</strong> — Override default styles for <code>.speaker‑notes‑content</code>. Add custom CSS to make notes readable without disrupting the slide.</li>
              <li><strong>Slidev</strong> — Use <code>.slidev‑presenter .slidev‑note</code>. Slidev renders notes in presenter mode automatically.</li>
              <li><strong>Browser zoom</strong> — Never assume 100% zoom. Test at 125% and 150% to ensure notes remain legible under magnification.</li>
            </ul>
            <pre><code>{`/* reveal.js speaker notes enhancement */
.speaker-notes {
  background: #f5f5f5;
  padding: 1rem;
  max-width: 300px;
}`}</code></pre>
            <p>
              Notes are your safety net. Style them for readability, not decoration. Presenters, test your setup at target zoom levels—10% of your audience uses non‑default zoom.
            </p>
          </section>

          {/* 10. The Recommended Stack */}
          <section id="recommended-stack">
            <h2>10. The Recommended Stack</h2>
            <p>
              For 2026: <strong>reveal.js + Fitty + GSAP + Fontsource + clamp()</strong>
            </p>
            <p>
              Why this combo:
            </p>
            <ul>
              <li><strong>reveal.js</strong> handles structure and navigation</li>
              <li><strong>Fitty</strong> scales headlines perfectly</li>
              <li><strong>GSAP</strong> choreographs animations with precision</li>
              <li><strong>Fontsource</strong> self‑hosts fonts reliably</li>
              <li><strong>clamp()</strong> ensures fluid responsive typography without media queries</li>
            </ul>
            <pre><code>{`<!-- Minimal viable stack -->
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <script src="https://cdnjs.cloudflare.com/reveal.js/4.6.1/reveal.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/fitty@2.0.0/dist/fitty.js"></script>
  <script src="https://cdnjs.cloudflare.com/reveal.js/4.6.1/plugin/notes/notes.js"></script>
</head>
<body>
  <div class="reveal">
    <div class="slides">
      <section>
        <h1 class="headline" data-fittext>Build the stack</h1>
        <p>Typography that works today, not in theory</p>
      </section>
    </div>
  </div>
  <script>
    new Reveal({ plugins: [ RevealNotes ] }).initialize();
    new Fitty('.headline');
  </script>
</body>
</html>`}</code></pre>
            <p>
              This stack gives you performance, control, and reliability. No external CDNs (except reveal.js), no bloated libraries, no font loading wars. Just typography that serves your content—not the other way around.
            </p>
          </section>

          {/* 11. The Bottom Line */}
          <section id="bottom-line">
            <h2>The Bottom Line</h2>
            <p>
              The death of standalone typography libraries isn't a loss—it's a liberation. Today's stack treats typography as a native capability, not a hack. Fluid scales, precise fitting, self‑hosted fonts, and framework‑aware tools combine into a system that scales from a 5‑minute lightning talk to a multi‑day workshop.
            </p>
            <p>
              2026's winning presentations won't dazzle with gratuitous animations or proprietary font stacks. They'll impress with flawless rhythm, perfect legibility, and seamless delivery. That's not future tech—that's the stack you're building right now.
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}