import Link from 'next/link'

export const metadata = {
  title: 'Upgrading From the Venue DCT — The Honest Search',
  description: 'The Hyundai Venue DCT has been a great city car for five years. Three kids later, space is the only real filter. Here is what an upgrade actually looks like.',
}

import '../../../components/calculators.css'
import EMICalculator from '../../../components/calculators/EMICalculator'
import FuelCostComparator from '../../../components/calculators/FuelCostComparator'
import CarCompareWidget from '../../../components/widgets/CarCompareWidget'
import WeightedScores from '../../../components/calculators/WeightedScores'

const FINANCIAL_TABLE: Array<[string,string,string,string,string,string,boolean]> = [
  ['Kia Seltos 2026 HTK+', '₹10.99L', '1.5L NA Petrol', '447L', '5', '⭐5', false],
  ['Kia Seltos 2026 GTX Turbo', '₹17–20L', '1.5L Turbo Petrol DCT', '447L', '5', '⭐5', true],
  ['Hyundai Creta Epsilon', '₹11–24L', '1.5L Petrol/Diesel', '433L', '5', '⭐4', false],
  ['Maruti XL6 Alpha CNG', '₹15–17L', '2.0L CNG', '239L', '6', '⭐3', false],
  ['Kia Carens Luxury Plus', '₹18–22L', '1.5L Diesel AT', '445L', '7', '⭐3', false],
  ['Mahindra XUV700 AX7', '₹24–27L', '2.2L Diesel AT', '447L', '7', 'Expected ⭐5', false],
  ['Toyota Innova Hycross ZX', '₹27–33L', '2.0L Hybrid', '340L (3rd row folded)', '7', '⭐5', false],
  ['Tata Sierra ICE Pure+', '₹11.49–21.29L', '1.5L Turbo Petrol AT', '622L', '5', '⭐5', false],
  ['Tata Harrier ICE XZ+', '₹12.89–25.35L', '2.0L Diesel', '447L', '5', '⭐5', false],
  ['Tata Harrier EV XZ+ AWD', '₹21.49–28.99L', '65kWh Electric AWD', '447L', '5', '⭐5', false],
]

export default function VenueUpgradeArticle() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] overflow-x-hidden">

      {/* ── HERO ── full viewport width */}
      <div className="relative w-full h-[55vh] min-h-[420px] overflow-hidden">
        <img
          src="/article-hero.png"
          alt="A compact SUV on a winding road at dusk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 pb-10">
          <div className="max-w-[760px] mx-auto">
            <Link href="/" className="inline-block text-white/80 hover:text-white text-sm mb-4 transition-colors">
              ← Back to Research
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Upgrading From the Venue DCT
            </h1>
            <p className="mt-3 text-white/90 text-base md:text-lg max-w-[600px]">
              The honest search — three kids, a Jack Russell, and five years of memories
            </p>
          </div>
        </div>
      </div>

      {/* ── ARTICLE META ── */}
      <div className="max-w-[760px] mx-auto px-4 pt-8 pb-4">
        <div className="flex flex-wrap items-center gap-2 text-sm text-[#6B6860]">
          <span className="bg-[#C4622D]/10 text-[#C4622D] px-2 py-0.5 rounded font-medium text-xs uppercase tracking-wide">Car Search</span>
          <span>April 2026</span>
        </div>
      </div>

      <div className="max-w-[760px] mx-auto px-4">

        {/* ── VERDICT BANNER ── */}
        <div className="my-8 bg-[#EFEBE5] border-l-4 border-[#C4622D] px-6 py-5 rounded-r">
          <p className="text-xs uppercase tracking-wider text-[#C4622D] font-semibold mb-2">The Core Finding</p>
          <p className="text-[#2C2A27] leading-relaxed">
            The Seltos 2026 is the most honest upgrade from the Venue — longer, wider,
            more powerful, safer, and significantly better value than everything else evaluated.
            If a compact SUV handles the space problem well enough, the Seltos at ₹11–20L
            is where this search ends.
          </p>
        </div>

        {/* ── TOC ── */}
        <nav className="my-10 border border-[#E5E0D8] rounded-lg p-5 bg-white">
          <h2 className="text-sm font-semibold text-[#2C2A27] uppercase tracking-wider mb-3">Contents</h2>
          <ol className="space-y-1.5 text-sm text-[#5C6B4F]">
            {[
              ['#the-baseline', 'The Baseline: What the Venue DCT Actually Has'],
              ['#the-trigger', 'The Upgrade Trigger'],
              ['#what-changed', 'What Changed in 2026'],
              ['#candidates', 'The Candidates'],
              ['#gallery', 'Gallery — All 10 Candidates'],
              ['#tools', 'Interactive Tools'],
              ['#financials', 'Financial Comparison'],
              ['#videos', 'Video Reviews'],
              ['#three-paths', 'Three Paths Forward'],
              ['#recommendation', "What I'd Do"],
              ['#sources', 'Sources'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#C4622D] transition-colors">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── SECTION: THE BASELINE ── */}
        <section className="py-12 border-b border-[#E5E0D8]">
          <h2 id="the-baseline" className="text-2xl font-bold text-[#2C2A27] mb-6">The Baseline: What the Venue DCT Actually Has</h2>
          <div className="space-y-4 text-[#3D3B37] leading-relaxed">
            <p>
              The Hyundai Venue DCT was bought in 2019. It is a sub-4-metre compact SUV
              with a 1.0-litre turbo petrol engine producing approximately 120 bhp,
              mated to a 7-speed dual-clutch transmission. It is a brilliant city car —
              nimble, well-weighted steering, enough power to feel quick in urban traffic.
            </p>
            <p className="font-medium text-[#2C2A27]">What the Venue DCT has held up well on:</p>
            <ul className="space-y-2">
              <li><strong>City driving in Bangalore.</strong> The DCT is excellent in stop-start traffic. The compact size makes it easy to park and manoeuvre.</li>
              <li><strong>The driving experience.</strong> Seb has described this car as one he enjoys driving — planted, responsive, not disconnected. This matters. A replacement that feels like a chore to drive is a false economy.</li>
              <li><strong>Reliability.</strong> Five years of ownership with no major issues. Hyundai's service network in Bangalore is convenient and cost-effective.</li>
              <li><strong>Efficiency.</strong> Real-world around 12–14 kmpl in mixed city driving. Acceptable for a turbo petrol.</li>
            </ul>
            <p className="font-medium text-[#2C2A27]">What the Venue DCT does not have — and increasingly needs to:</p>
            <ul className="space-y-2">
              <li><strong>Rear seat legroom.</strong> Adequate for young children. Not adequate for Rahel at 11, or for adults on long drives.</li>
              <li><strong>Boot volume.</strong> Approximately 350 litres. Enough for a weekly shop. Not enough for a week of luggage for five people plus Luka.</li>
              <li><strong>Third-row flexibility.</strong> None. The Venue is a strict 5-seater. Any configuration requiring more than five seats is a non-starter.</li>
              <li><strong>Highway refinement at speed.</strong> The 1.0-litre turbo is vocal at 120 km/h. The cabin is not as insulated as newer products.</li>
            </ul>
          </div>
        </section>

        {/* ── SECTION: UPGRADE TRIGGER ── */}
        <section className="py-12 border-b border-[#E5E0D8]">
          <h2 id="the-trigger" className="text-2xl font-bold text-[#2C2A27] mb-6">The Upgrade Trigger</h2>
          <div className="space-y-4 text-[#3D3B37] leading-relaxed">
            <p>
              Space. Not power. Not features. Not badge. Space — specifically the space
              that three growing children and a large dog require simultaneously.
            </p>
            <p>
              This is the only filter that matters in this search. Everything else —
              engine options, transmission types, ADAS suites, connected car features —
              is secondary. The primary question is: <strong>does this car hold
              significantly more than the Venue without being significantly harder to drive
              in Bangalore?</strong>
            </p>
            <p>
              The secondary question is whether the space upgrade justifies the price delta.
              The Venue DCT, at 5 years old, has significant resale value. Every car
              on this list is an upgrade — the question is which upgrade is worth the asking price.
            </p>
          </div>
        </section>

        {/* ── SECTION: WHAT CHANGED ── */}
        <section className="py-12 border-b border-[#E5E0D8]">
          <h2 id="what-changed" className="text-2xl font-bold text-[#2C2A27] mb-6">What Changed in 2026</h2>
          <div className="space-y-4 text-[#3D3B37] leading-relaxed">
            <p>Three significant changes since the previous version of this article:</p>
            <ul className="space-y-3">
              <li><strong>The Seltos 2026 launched in January.</strong> A completely redesigned model — longer, wider, more powerful, 5-star BNCAP, Level 2 ADAS — at ₹10.99–19.99L. This is the most significant compact SUV launch in India this year and changes the entire competitive landscape.</li>
              <li><strong>The brief has been corrected.</strong> The farm road filter was removed — Vadakkancherry is reached via Coimbatore, not driven from Bangalore. AWD is welcome but not mandatory.</li>
              <li><strong>The baseline is the Venue DCT.</strong> This is an upgrade search, not a replacement-of-need search. The starting point matters — and the starting point is a well-driven 2019 Venue with strong resale value.</li>
            </ul>
          </div>
        </section>

        {/* ── SECTION: CANDIDATES ── */}
        <section id="candidates" className="py-12 border-b border-[#E5E0D8]">
          <h2 className="text-2xl font-bold text-[#2C2A27] mb-8">The Candidates</h2>
          <div className="space-y-10">

            {/* Seltos 2026 */}
            <div>
              <h3 className="text-lg font-bold text-[#2C2A27] mb-3">1. Kia Seltos 2026 — The Honest Upgrade</h3>
              <div className="space-y-3 text-[#3D3B37] leading-relaxed text-sm">
                <p><strong>The car that ends this search.</strong> The Seltos 2026 launched on January 2, 2026 with a comprehensive redesign — new platform, new engine options, a significantly larger cabin, and a 5-star BNCAP safety rating.</p>
                <p>The numbers that matter versus the Venue DCT:</p>
                <ul className="space-y-1">
                  <li>Length: +95mm (4,460mm vs 3,995mm Venue)</li>
                  <li>Wheelbase: +80mm (2,690mm vs 2,610mm Venue)</li>
                  <li>Boot: 447 litres (vs ~350 litres Venue)</li>
                  <li>Engine options: 115bhp NA petrol / 160bhp turbo petrol / 116bhp diesel</li>
                  <li>Top engine (turbo petrol DCT): 160bhp vs Venue's 120bhp — a meaningful step up</li>
                </ul>
                <p>The turbo petrol variant at 160 bhp is the one to prioritise — it gives the Seltos the kind of performance feel that made the Venue enjoyable to drive, at a higher level. The DCT is available with the turbo engine.</p>
                <p>The interior is a generational leap over the Venue. The panoramic curved display — dual 12.3-inch screens — is genuinely impressive. Level 2 ADAS includes adaptive cruise, lane keep, and forward collision warning.</p>
                <p>The 5-star BNCAP rating for adult and child occupancy is the safety proof that a family of five needs. <strong>Who it is for:</strong> Someone upgrading from the Venue who wants a genuine step forward in space, safety, and driving refinement — without moving into a different vehicle class.</p>
              </div>
            </div>

            {/* Hyundai Creta */}
            <div>
              <h3 className="text-lg font-bold text-[#2C2A27] mb-3">2. Hyundai Creta — The Familiar Step Up</h3>
              <div className="space-y-3 text-[#3D3B37] leading-relaxed text-sm">
                <p>The Creta has been India's best-selling SUV for years. The updated version brings a refreshed front fascia, updated interior technology, and improved feature content. The Creta EV is expected in 2026.</p>
                <p>Versus the Venue DCT: wider cabin, more rear seat legroom, larger boot, stronger diesel engine option. The Creta's advantage over the Seltos is primarily the brand familiarity — if the Venue has been hassle-free, the Creta's Hyundai ecosystem is a continuation of that experience.</p>
                <p><strong>Who it is for:</strong> Someone brand-loyal to Hyundai who wants the most recognised compact SUV in India with improved space and feature content over the Venue.</p>
              </div>
            </div>

            {/* Kia Syros EV */}
            <div>
              <h3 className="text-lg font-bold text-[#2C2A27] mb-3">3. Kia Syros EV — The Electric Alternative</h3>
              <div className="space-y-3 text-[#3D3B37] leading-relaxed text-sm">
                <p>The Syros EV is Kia's upcoming electric compact SUV, expected to launch in 2026 with a range of approximately 400–500 km per charge. Pricing expected between ₹14–30 lakh.</p>
                <p>For primarily city driving and occasional highway runs, the Syros EV's running cost — approximately one-third of petrol — is a significant long-term saving.</p>
                <p><strong>Who it is for:</strong> Someone with home charging capability who wants to move into electric. Worth a test drive when it launches — but the Seltos petrol or diesel is the more complete vehicle today.</p>
              </div>
            </div>

            {/* Hyundai Creta EV */}
            <div>
              <h3 className="text-lg font-bold text-[#2C2A27] mb-3">4. Hyundai Creta EV — The Electric Creta</h3>
              <div className="space-y-3 text-[#3D3B37] leading-relaxed text-sm">
                <p>The Creta EV is expected around the second half of 2026, with pricing estimated at ₹18–22 lakh. Real-world range approximately 350–400 km.</p>
                <p><strong>Who it is for:</strong> Someone who has decided on the Creta platform and is willing to wait 6–9 months for the electric version. For everyone else, the Seltos 2026 is available now.</p>
              </div>
            </div>

            {/* Toyota Innova Hycross */}
            <div>
              <h3 className="text-lg font-bold text-[#2C2A27] mb-3">5. Toyota Innova Hycross — The Class Jump</h3>
              <div className="space-y-3 text-[#3D3B37] leading-relaxed text-sm">
                <p>The Innova Hycross is not a compact SUV. It is a mid-size MPV that competes with vehicles twice its price. It is included here because the space upgrade from the Venue is transformational — not incremental.</p>
                <p>The hybrid engine — Toyota's 2.0-litre self-charging hybrid — produces approximately 186 bhp combined while returning 18–20 kmpl real-world. On 5-hour highway runs, this is the most efficient vehicle in this list.</p>
                <p>The cabin width is the real story. Three adults in the second row with real armroom. The third row, folded flat, creates a cargo area that Luka the Jack Russell could sleep in.</p>
                <p>The trade-off is size. The Hycross is 4.7 metres long — harder to park and manoeuvre in Bangalore than the Venue. That difference is real and daily.</p>
                <p><strong>Who it is for:</strong> A family that has honestly evaluated the Venue's limitations and decided that maximum space is worth the additional footprint.</p>
              </div>
            </div>

            {/* Kia Carens */}
            <div>
              <h3 className="text-lg font-bold text-[#2C2A27] mb-3">6. Kia Carens — The Value MPV</h3>
              <div className="space-y-3 text-[#3D3B37] leading-relaxed text-sm">
                <p>The Carens is consistently underestimated. It is categorised as a compact MPV, but its interior volume rivals vehicles at twice its price. The low loading height — closer to the ground than an SUV floor — is a genuine practical advantage for Luka.</p>
                <p>The 7-seater configuration with captain's seats on higher variants makes the second row genuinely comfortable for adults. At approximately ₹22–26L, the Carens undercuts the Creta and Seltos significantly when configured as a 7-seater.</p>
                <p><strong>Who it is for:</strong> Someone who wants maximum interior volume per rupee. The most intelligent buy in its price category if the use case involves regularly carrying five people and luggage simultaneously.</p>
              </div>
            </div>

            {/* Mahindra XUV700 */}
            <div>
              <h3 className="text-lg font-bold text-[#2C2A27] mb-3">7. Mahindra XUV700 — The SUV Experience</h3>
              <div className="space-y-3 text-[#3D3B37] leading-relaxed text-sm">
                <p>The XUV700 is the best Mahindra product in years. The 2.2-litre turbo diesel produces 185 bhp and 450 Nm — genuinely quick at highway speeds. The ADAS suite adds a real layer of safety on long highway runs.</p>
                <p>At approximately ₹27.5L for the AX7 variant, it is meaningfully more expensive than the Seltos or Creta. The question is whether the additional size, power, and features justify the premium.</p>
                <p><strong>Who it is for:</strong> Someone who wants the SUV feel — higher driving position, road presence — and is willing to pay for it.</p>
              </div>
            </div>

            {/* Maruti XL6 CNG */}
            <div>
              <h3 className="text-lg font-bold text-[#2C2A27] mb-3">8. Maruti XL6 CNG — The Budget Intelligent Choice</h3>
              <div className="space-y-3 text-[#3D3B37] leading-relaxed text-sm">
                <p>The XL6 Alpha CNG at approximately ₹18–20L is in a different financial category. The 2.0-litre CNG option reduces running costs to approximately one-third of petrol. At 15,000 km per year, the fuel saving versus petrol alternatives is approximately ₹80,000 over five years.</p>
                <p>The 6-seater configuration — captain's seats in the second row — is the most comfortable layout for four adults on long drives.</p>
                <p><strong>Who it is for:</strong> The budget-conscious buyer who wants a genuine step up in practicality from the Venue without the price of a compact SUV.</p>
              </div>
            </div>

            {/* Tata Curvv EV */}
            <div>
              <h3 className="text-lg font-bold text-[#2C2A27] mb-3">9. Tata Curvv EV — The Electric Option</h3>
              <div className="space-y-3 text-[#3D3B37] leading-relaxed text-sm">
                <p>The Tata Curvv EV is expected in 2026 with pricing between ₹15–24L. The electric mid-size SUV offers a range of approximately 400–500 km per charge.</p>
                <p>Tata's electric drivetrain is proven — the Nexon EV has accumulated significant real-world usage data in India.</p>
                <p><strong>Who it is for:</strong> Someone committed to electric who wants a larger cabin than the Venue and is willing to wait for the Curvv EV's 2026 launch.</p>
              </div>
            </div>

            {/* Tata Sierra ICE */}
            <div>
              <h3 className="text-lg font-bold text-[#2C2A27] mb-3">10. Tata Sierra ICE — The Available Surprise</h3>
              <div className="space-y-3 text-[#3D3B37] leading-relaxed text-sm">
                <p>The Tata Sierra ICE launched in November 2025 with deliveries commencing January 2026. At ₹11.49–21.29L ex-showroom (approximately ₹13.3–24.9L on-road Bangalore), it undercuts the Seltos at the entry point.</p>
                <p>Key numbers: Length 4,340mm (+345mm vs Venue), Wheelbase 2,730mm (+120mm vs Venue), Boot 622 litres (yes, 622L — the largest in this list), 1.5L turbo petrol 160bhp with 6-speed automatic.</p>
                <p>The triple-screen layout — driver display, central infotainment, co-passenger screen — is genuinely impressive at this price. Level 2 ADAS, 12-speaker JBL Dolby Atmos.</p>
                <p><strong>Who it is for:</strong> Someone who wants maximum interior and boot volume for the budget. The Sierra delivers SUV proportions, a massive boot, and the latest Tata cabin technology — already available, not waiting for a 2026 launch.</p>
              </div>
            </div>

            {/* Tata Harrier ICE */}
            <div>
              <h3 className="text-lg font-bold text-[#2C2A27] mb-3">11. Tata Harrier ICE — The Highway Specialist</h3>
              <div className="space-y-3 text-[#3D3B37] leading-relaxed text-sm">
                <p>The Tata Harrier in its ICE form has been updated for 2026 with revised features and improved NVH. At ₹12.89–25.35L ex-showroom, it sits between the Seltos and Innova Hycross in pricing.</p>
                <p>The 2.0-litre Kryotec diesel produces 170 bhp and 350 Nm of torque — the highest torque figure in this list below the XUV700. On highway runs, this engine is relaxed and refined at cruising speeds. The 5-star BNCAP rating is the strongest safety argument in this segment.</p>
                <p><strong>Who it is for:</strong> Someone who values safety, structural integrity, and genuine highway composure. The most serious vehicle in this price band for non-urban driving conditions.</p>
              </div>
            </div>

            {/* Tata Harrier EV */}
            <div>
              <h3 className="text-lg font-bold text-[#2C2A27] mb-3">12. Tata Harrier EV — The Electric Highway Cruiser</h3>
              <div className="space-y-3 text-[#3D3B37] leading-relaxed text-sm">
                <p>The Tata Harrier EV is already on sale at ₹21.49–28.99L ex-showroom. It uses a 65 kWh battery with a claimed range of 350–500 km per charge. The dual-motor AWD configuration is available on higher variants.</p>
                <p>The electric drivetrain changes the highway touring character entirely — no gear shifts, instant torque, and a refinement level that diesel and petrol engines cannot match at highway speeds.</p>
                <p><strong>Who it is for:</strong> Someone who wants the Harrier's safety and platform as a base, but wants the EV driving experience for highway touring. The running cost saving versus diesel is significant over a 5-year ownership horizon.</p>
              </div>
            </div>

            {/* Renault Duster */}
            <div>
              <h3 className="text-lg font-bold text-[#2C2A27] mb-3">13. Renault Duster 7-Seater — The Wildcard</h3>
              <div className="space-y-3 text-[#3D3B37] leading-relaxed text-sm">
                <p>The new Renault Duster is expected in late 2026 with a 7-seater configuration and a hybrid powertrain option. Pricing estimated at ₹10–20L — significantly cheaper than everything else in this list.</p>
                <p>The Duster nameplate carries genuine off-road credibility. The previous Duster was praised for its ride quality and practicality.</p>
                <p><strong>Who it is for:</strong> Someone with a flexible timeline who wants to wait and see what the Duster 7-seater offers. Late 2026 is a long wait — but if the pricing is as competitive as expected, it could be worth holding off.</p>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION: FINANCIAL COMPARISON ── */}
        <section id="financials" className="py-12 border-b border-[#E5E0D8]">
          <h2 className="text-2xl font-bold text-[#2C2A27] mb-6">Financial Comparison</h2>
          <p className="text-xs text-[#6B6860] mb-4 leading-relaxed">
            Prices are ex-showroom or on-road Bangalore estimates, April 2026.
            Annual usage: 15,000 km at 70% highway, 30% city. Confirm exact prices with dealers before any decision.
          </p>
          <div className="overflow-x-auto rounded-lg border border-[#E5E0D8]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F7F4F0] border-b border-[#E5E0D8]">
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-[#2C2A27] whitespace-nowrap">Vehicle</th>
                  <th scope="col" className="text-right px-4 py-3 font-semibold text-[#2C2A27]">Price</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-[#2C2A27] hidden md:table-cell">Engine</th>
                  <th scope="col" className="text-center px-4 py-3 font-semibold text-[#2C2A27] hidden sm:table-cell">Boot</th>
                  <th scope="col" className="text-center px-4 py-3 font-semibold text-[#2C2A27] hidden sm:table-cell">Seats</th>
                  <th scope="col" className="text-center px-4 py-3 font-semibold text-[#2C2A27]">BNCAP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0EDE8]">
                {FINANCIAL_TABLE.map(([vehicle, price, engine, boot, seats, bncaps, isHighlight]) => (
                  <tr key={vehicle} className={`${isHighlight ? 'bg-[#EFEBE5]' : 'bg-white'} hover:bg-[#F7F4F0] transition-colors`}>
                    <td className="px-4 py-3 font-medium text-[#2C2A27] whitespace-nowrap">{vehicle}</td>
                    <td className="px-4 py-3 text-right text-[#3D3B37]">{price}</td>
                    <td className="px-4 py-3 text-[#6B6860] hidden md:table-cell">{engine}</td>
                    <td className="px-4 py-3 text-center text-[#6B6860] hidden sm:table-cell">{boot}</td>
                    <td className="px-4 py-3 text-center text-[#6B6860] hidden sm:table-cell">{seats}</td>
                    <td className={`px-4 py-3 text-center font-semibold ${isHighlight ? 'text-[#C4622D]' : 'text-[#3D3B37]'}`}>{bncaps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm text-[#6B6860] leading-relaxed italic">
            <strong className="not-italic text-[#2C2A27]">The honest comparison:</strong> The Seltos 2026 at its base variant (₹10.99L)
            costs approximately the same as the Venue DCT did in 2019. The top-spec Seltos GTX turbo DCT (₹17–20L) is where the meaningful
            upgrade sits — more power than the Venue, significantly more space, Level 2 ADAS, 5-star safety, and a dual-screen interior
            that feels generational.
          </p>
        </section>

        {/* ── SECTION: GALLERY ── */}
        <section id="gallery" className="py-12 border-b border-[#E5E0D8]">
          <h2 className="text-2xl font-bold text-[#2C2A27] mb-2">Gallery — All 10 Candidates</h2>
          <p className="text-sm text-[#6B6860] mb-8">Ten cars. Ten different arguments for an upgrade. Here's how they look in the metal.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              ['/cars/kia-seltos-2026.jpg', 'Kia Seltos 2026', '₹10.99–20L'],
              ['/cars/hyundai-creta.jpg', 'Hyundai Creta', '₹11–24L'],
              ['/cars/maruti-xl6.jpg', 'Maruti XL6 Alpha', '₹15–17L'],
              ['/cars/kia-carens.jpg', 'Kia Carens', '₹18–22L'],
              ['/cars/mahindra-xuv700.jpg', 'Mahindra XUV700', '₹24–27L'],
              ['/cars/toyota-innova-hycross.jpg', 'Toyota Innova Hycross', '₹27–33L'],
              ['/cars/tata-sierra.jpg', 'Tata Sierra ICE', '₹11.49–21.29L'],
              ['/cars/tata-harrier-ice.jpg', 'Tata Harrier ICE', '₹12.89–25.35L'],
              ['/cars/tata-harrier-ev.jpg', 'Tata Harrier EV', '₹21.49–28.99L'],
              ['/cars/renault-duster.jpg', 'Renault Duster', '₹12–18L'],
            ].map(([src, name, price]) => (
              <div key={src} className="bg-[#F7F4F0] rounded-lg overflow-hidden">
                <img src={src} alt={name} loading="lazy" className="w-full aspect-square object-cover" />
                <div className="px-3 py-2">
                  <p className="text-xs font-semibold text-[#2C2A27]">{name}</p>
                  <p className="text-xs text-[#6B6860]">{price}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#9B9590]">Images sourced from CarWale. All photos show the right front three-quarter angle.</p>
        </section>

        {/* ── SECTION: TOOLS ── */}
        <section id="tools" className="py-12 border-b border-[#E5E0D8]">
          <h2 className="text-2xl font-bold text-[#2C2A27] mb-2">Interactive Tools</h2>
          <p className="text-sm text-[#6B6860] mb-8">Skip the static tables. These tools let you run the numbers on your specific situation.</p>
          <div className="space-y-10">
            <div className="bg-white rounded-xl border border-[#E5E0D8] p-5 overflow-hidden max-w-full">
              <h3 id="emi-calculator" className="text-base font-bold text-[#2C2A27] mb-1">EMI Calculator</h3>
              <p className="text-xs text-[#6B6860] mb-4">Adjust loan amount, tenure, and interest rate. Default: ₹15L at 9.5% p.a. over 5 years.</p>
              <div className="overflow-hidden rounded"><EMICalculator defaultAmount={1500000} /></div>
            </div>
            <div className="bg-white rounded-xl border border-[#E5E0D8] p-5 overflow-hidden max-w-full">
              <h3 id="weighted-scores" className="text-base font-bold text-[#2C2A27] mb-1">Weighted Rankings</h3>
              <p className="text-xs text-[#6B6860] mb-4">Adjust weights for boot space, power, safety, and more — watch the ranking reorder in real time.</p>
              <div className="overflow-hidden rounded"><WeightedScores /></div>
            </div>
            <div className="bg-white rounded-xl border border-[#E5E0D8] p-5 overflow-hidden max-w-full">
              <h3 id="fuel-cost-comparator" className="text-base font-bold text-[#2C2A27] mb-1">Running Cost Comparison</h3>
              <p className="text-xs text-[#6B6860] mb-4">Fuel type changes everything. Adjust your monthly driving to see which car costs the least at the pump.</p>
              <div className="overflow-hidden rounded"><FuelCostComparator /></div>
            </div>
            <div className="bg-white rounded-xl border border-[#E5E0D8] p-5 overflow-hidden max-w-full">
              <h3 id="car-compare" className="text-base font-bold text-[#2C2A27] mb-1">Compare Any Two Cars</h3>
              <p className="text-xs text-[#6B6860] mb-4">Pick any two candidates and see how they stack up side by side on price, power, features, and practicality.</p>
              <div className="overflow-hidden rounded"><CarCompareWidget /></div>
            </div>
          </div>
        </section>

        {/* ── SECTION: VIDEOS ── */}
        <section id="videos" className="py-12 border-b border-[#E5E0D8]">
          <h2 className="text-2xl font-bold text-[#2C2A27] mb-8">Video Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Kia Seltos 2026 — First Look Review',
                id: '5xV85V2hJjw',
                desc: 'The redesigned Seltos 2026 — new platform, new engines, 5-star BNCAP, and a cabin that leapfrogs the competition.',
              },
              {
                title: 'Kia Seltos vs Hyundai Creta — Compact SUV Showdown',
                id: 'wj3xRizySZQ',
                desc: 'The two biggest-selling compact SUVs in India — direct comparison on space, features, and value.',
              },
              {
                title: 'Toyota Innova Hycross — Full Road Test',
                id: 'BCFqH00GKYE',
                desc: "The class jump — why the Innova Hycross is in a different category and whether it's worth the premium over the Seltos.",
              },
              {
                title: 'Kia Carens — The Honest Review',
                id: '0D5vJ5gFS0U',
                desc: 'The most underrated 7-seater in India — why the Carens deserves a spot on every shortlist.',
              },
            ].map(({ title, id, desc }) => (
              <div key={id}>
                <h3 className="text-sm font-bold text-[#2C2A27] mb-2">{title}</h3>
                <div className="overflow-hidden rounded-lg">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="w-full aspect-video block"
                  />
                </div>
                <p className="mt-2 text-xs text-[#6B6860] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION: THREE PATHS ── */}
        <section id="three-paths" className="py-12 border-b border-[#E5E0D8]">
          <h2 className="text-2xl font-bold text-[#2C2A27] mb-8">Three Paths Forward</h2>
          <div className="space-y-6">
            {[
              {
                path: 'Path 1 — If the Upgrade Can Be Closed Today',
                car: 'Seltos 2026 Turbo DCT',
                body: (
                  <>
                    <p>The Seltos 2026 GTX with the 1.5-litre turbo petrol engine and 7-speed DCT is the most honest upgrade available from the Venue DCT. More power. Significantly more space. 5-star safety. Level 2 ADAS. A dual-screen interior that makes the Venue feel like a 2019 product. And priced at approximately ₹17–20L — firmly within the budget range.</p>
                    <p>This is the car that ends the search. Drive it, negotiate, sell the Venue, move on.</p>
                  </>
                ),
              },
              {
                path: 'Path 2 — If Space Is the Only Real Criterion',
                car: 'Innova Hycross',
                body: (
                  <>
                    <p>If the honest self-assessment is that the Venue's cabin is genuinely inadequate — not slightly cramped, but inadequate — then the Innova Hycross is the answer. It is a class above. The hybrid efficiency makes it the most sensible highway touring vehicle in this list. The cabin width with three adults in the second row is genuinely remarkable.</p>
                    <p>The trade-off is size and price. At ₹27–33L, it is a meaningful premium over the Seltos. And at 4.7 metres, it is not the city car the Venue is. That trade-off is real and daily.</p>
                    <p><strong>Test drive both.</strong> The question is not which is better. The question is which is better for your specific use case.</p>
                  </>
                ),
              },
              {
                path: 'Path 3 — If Electric Is the Direction',
                car: 'Wait for the Syros EV or Creta EV',
                body: (
                  <>
                    <p>If the intent is to move to electric for the running cost savings and the Bangalore city driving profile suits an EV, the Syros EV (₹14–30L, 2026) or Creta EV (₹18–22L, late 2026) are both worth waiting for.</p>
                    <p>The honest constraint: EVs make most sense when home charging is available. If that is not yet in place, a petrol or diesel vehicle is the pragmatic choice today.</p>
                  </>
                ),
              },
            ].map(({ path, car, body }) => (
              <div key={path} className="bg-[#EFEBE5] rounded-xl p-5 border-l-4 border-[#C4622D]">
                <h3 className="text-sm font-bold text-[#C4622D] uppercase tracking-wide mb-1">{path}</h3>
                <p className="text-base font-bold text-[#2C2A27] mb-3">{car}</p>
                <div className="space-y-2 text-sm text-[#3D3B37] leading-relaxed">{body}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION: RECOMMENDATION ── */}
        <section id="recommendation" className="py-12 border-b border-[#E5E0D8]">
          <h2 className="text-2xl font-bold text-[#2C2A27] mb-6">What I'd Do</h2>
          <div className="space-y-4 text-[#3D3B37] leading-relaxed">
            <p><strong>Drive the Seltos 2026 GTX turbo DCT first.</strong> It is the most direct upgrade from the Venue DCT — same brand ecosystem familiarity, same fun-to-drive character, significantly more space and safety. At ₹17–20L, it is priced correctly for what it delivers.</p>
            <p><strong>Then drive the Innova Hycross.</strong> Not as the comparison that makes the Seltos feel inadequate. As the comparison that clarifies whether the additional cabin width and hybrid efficiency are worth the size premium to <em>you</em>.</p>
            <p><strong>The Venue DCT has been a great car.</strong> It earned its upgrade. The Seltos 2026 is the most honest recognition of that investment — a car that takes everything the Venue did well and does it at a higher level, without requiring a category jump.</p>
            <p><strong>What to watch:</strong> The Kia Syros EV (mid-2026) and Creta EV (late 2026) are the wildcard entries. If either delivers the range and pricing expected, they could reframe the entire EV vs petrol argument for this use case.</p>
          </div>
        </section>

        {/* ── SOURCES ── */}
        <section id="sources" className="py-12">
          <h2 className="text-lg font-bold text-[#2C2A27] mb-4">Sources</h2>
          <ul className="space-y-2 text-sm text-[#5C6B4F]">
            {[
              ['https://www.ndtv.com/auto/2026-kia-seltos-to-launch-in-india-on-jan-2-here-are-5-big-changes-9789777', 'NDTV — Kia Seltos 2026 launched in India'],
              ['https://www.carwale.com/kia-cars/seltos/', 'CarWale — Kia Seltos specifications'],
              ['https://www.carwale.com/tata-cars/safari/', 'CarWale — Tata Safari specifications'],
              ['https://www.carwale.com/toyota-cars/innova-hycross/', 'CarWale — Toyota Innova Hycross specifications'],
              ['https://www.cardekho.com/upcomingcars/SUV', 'CarDekho — Upcoming SUVs India 2026'],
              ['https://www.team-bhp.com/new-cars/kia/seltos/', "Team-BHP — Kia Seltos 2026 forum"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-[#C4622D] underline transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </section>

      </div>

      {/* ── FOOTER ── */}
      <footer className="max-w-[760px] mx-auto px-4 py-10 text-center border-t border-[#E5E0D8]">
        <p className="text-xs text-[#9B9590]">Research by Sebastian Chandy · April 2026</p>
        <p className="text-xs text-[#B5B0A8] mt-1">Prices are indicative estimates. Always confirm with authorised dealers before any purchase decision.</p>
      </footer>

    </main>
  )
}
