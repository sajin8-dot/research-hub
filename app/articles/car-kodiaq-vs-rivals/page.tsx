import Link from 'next/link'

export const metadata = {
  title: 'The Kodiaq Question: ₹54L Dream or ₹37L Wisdom?',
  description: 'Family SUV search for Bangalore. Kodiaq vs Tucson vs Compass vs Tiguan — research, numbers, and a verdict that split the team.',
}

export default function KodiaqArticle() {
  return (
    <main>
      <div className="article-header">
        <div className="container">
          <Link href="/" className="back-link">← Back to Research</Link>
          <div className="article-meta">
            <span className="article-tag decision">Car Decision</span>
            <span className="article-date">April 3, 2026</span>
          </div>
          <h1>The Kodiaq Question: ₹54L Dream or ₹37L Wisdom?</h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--gray-600)', lineHeight: 1.7 }}>
            Family SUV search for Bangalore. Kodiaq vs Tucson vs Compass vs Tiguan — research,
            numbers, and a verdict that split the team.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="verdict-box" style={{ margin: '32px 0' }}>
          <p className="verdict-label">Final Verdict — Anton (QA)</p>
          <p className="verdict-text">
            Tucson. Budget is firm. Depreciation math doesn't lie. Kodiaq loses ₹7L more in
            absolute rupees than Tucson — for a buyer who said resale matters.
          </p>
        </div>

        <div className="article-body">
          <h2>The Brief</h2>
          <p>
            Seb needs a primary family SUV. Has a Tiago EV for 95% city driving. Budget: firm ₹40L
            on-road Bangalore. Family of 5 + Luka the Jack Russell. Long trips to Coorg, Goa,
            and back to Coimbatore. Space matters. Badge matters less. Depreciation is a real concern.
          </p>

          <h2>The Contenders</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Car</th>
                <th>On-Road Bangalore</th>
                <th>5-Year TCO</th>
                <th>Depreciation</th>
                <th>Retention</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="verdict">Skoda Kodiaq Style</td>
                <td>~₹54L</td>
                <td>₹37.35L</td>
                <td>₹27.00L</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>Hyundai Tucson Platinum+</td>
                <td className="highlight">₹36.64L ✓</td>
                <td>₹26.85L</td>
                <td>₹19.79L</td>
                <td>46%</td>
              </tr>
              <tr>
                <td>Jeep Compass Limited+</td>
                <td>₹37.76L</td>
                <td>₹27.45L</td>
                <td>₹20.39L</td>
                <td>46%</td>
              </tr>
              <tr>
                <td>VW Tiguan Elegance</td>
                <td>~₹45L</td>
                <td>₹32.83L</td>
                <td>₹24.30L</td>
                <td>46%</td>
              </tr>
            </tbody>
          </table>

          <h2>Research Findings</h2>

          <h3>1. City Drivability — Does Size Matter?</h3>
          <p>
            <strong>Kodiaq is the largest.</strong> 4.7m length, worst turning radius in the group.
            Tucson and Compass are noticeably easier in Bangalore traffic.
          </p>
          <p>
            <strong>But — it doesn't matter for Seb.</strong> The Tiago EV handles all city driving.
            This car only hits the highway and weekend routes. The Kodiaq's size becomes irrelevant
            when you're not parking it at Mantri Square.
          </p>

          <h3>2. Space — The Decisive Factor</h3>
          <p>
            <strong>Kodiaq is the only genuine 3-row in this group.</strong> With 5 people + Luka,
            every other car forces compromises. The Kodiaq's third row isn't a token seat —
            adults can actually sit there on a 6-hour drive.
          </p>
          <p>
            Boot space is also class-leading. Luka gets a proper area to rest on long trips.
            The other three cars have decent boots but nothing that fits a large dog + 5 people
            + luggage comfortably.
          </p>

          <h3>3. The Perfect Garage Math</h3>
          <p>
            Seb's setup — Tiago EV for city + one SUV for everything else — is genuinely smart.
            The EV handles the daily grind cheaply. The SUV is reserved for the trips that matter.
          </p>
          <p>
            This means the SUV's fuel inefficiency in city traffic is irrelevant. The Kodiaq's
            turbo petrol will sip fuel on the highway, and the Tiago EV means Seb barely notices
            the Kodiaq's city running costs.
          </p>

          <h3>4. Depreciation — The Ugly Numbers</h3>
          <p>
            Here's where the Kodiaq story falls apart for a budget-conscious buyer:
          </p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Car</th>
                <th>Absolute ₹ Lost (5yr)</th>
                <th>Per Year Cost of Depreciation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="verdict">Kodiaq</td>
                <td>₹27.00L</td>
                <td>₹5.40L/year</td>
              </tr>
              <tr>
                <td>Tucson</td>
                <td className="highlight">₹19.79L</td>
                <td>₹3.96L/year</td>
              </tr>
              <tr>
                <td>Compass</td>
                <td>₹20.39L</td>
                <td>₹4.08L/year</td>
              </tr>
              <tr>
                <td>Tiguan</td>
                <td>₹24.30L</td>
                <td>₹4.86L/year</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Anton's cut:</strong> Kodiaq costs ₹7L more in depreciation than Tucson.
            For a buyer who explicitly said resale value matters, this is not a minor detail.
          </p>

          <h3>5. Service & Practicality</h3>
          <p>
            Skoda service in Bangalore is mature — but premium. ~₹10k per visit vs ~₹7-8k
            for Hyundai. Hyundai's service network in Bangalore is also more extensive,
            which matters for a family car you want to keep running smoothly.
          </p>

          <h2>The Heart vs The Head</h2>

          <div className="pull-quote">
            "Buy the Kodiaq. Your heart is smarter than your Excel sheet. Stop cheaping out
            on the one experience that will matter years from now."
            <br /><br />
            <span style={{ fontSize: '0.85rem', fontStyle: 'normal', color: 'var(--gray-600)', fontFamily: 'var(--font-body)' }}>
              — Cobain, emotionally
            </span>
          </div>

          <div className="pull-quote" style={{ borderLeftColor: 'var(--deep-navy)' }}>
            "Recommending a ₹54L car to a buyer with a ₹40L firm budget is not a recommendation.
            It's a rejection of the brief dressed up as confidence."
            <br /><br />
            <span style={{ fontSize: '0.85rem', fontStyle: 'normal', color: 'var(--gray-600)', fontFamily: 'var(--font-body)' }}>
              — Anton, coldly
            </span>
          </div>

          <h2>The Three Lanes</h2>

          <h3>Lane 1: If Space Is Non-Negotiable → Kodiaq</h3>
          <p>
            The only car that genuinely solves the 5-people + dog problem. Everything else is
            a compromise. If those rare long trips are important enough to justify stretching
            the budget, the Kodiaq is worth it — and Seb shouldn't feel guilty about it.
          </p>

          <h3>Lane 2: If Budget Is Firm → Tucson</h3>
          <p>
            Hyundai Tucson Platinum+ at ₹36.64L is the smart play. Leaves ₹3.36L in the bank
            for accessories, extended warranty, or just keeping liquid. Depreciation math
            respects Seb's stated priorities. It's a genuinely good car.
          </p>

          <h3>Lane 3: The X Factor — Atto 3</h3>
          <p>
            BYD Atto 3 was on Seb's original shortlist. It vanished from the analysis.
            As an EV highway complement to the Tiago EV, it deserves a proper look —
            zero fuel cost on highway trips, and BYD's back-to-back service model is solid.
            This needs a separate research piece.
          </p>

          <h2>What I'd Do</h2>
          <p>
            <strong>Test drive both.</strong> Take the Tucson and Kodiaq back-to-back.
            Sit in the third row of each. Live with the decision for 48 hours after each drive.
            If the Kodiaq's space still feels worth ₹14L after that — stretch to it.
            If not, Tucson is the rational, well-executed choice.
          </p>
          <p>
            The budget argument is real but not absolute. ₹14L over 5 years on a car you own
            for a decade isn't the same as ₹14L you can't afford. The question is whether the
            emotional value of that third row outweighs the rational cost of carrying the loan.
          </p>

          <div className="sources">
            <h3>Sources & Data</h3>
            <ul>
              <li>On-road Bangalore pricing — Spinny (verified)</li>
              <li>Depreciation data — Spinny / Cars24</li>
              <li>TCO calculations — Cody (Rogan + Cody subagent research)</li>
              <li>Nimbleness / space analysis — Team-BHP ownership reviews</li>
              <li>Service cost data — Team-BHP, CarWale</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
