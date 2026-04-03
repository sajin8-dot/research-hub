import Link from 'next/link'

export const metadata = {
  title: 'Upgrading From the Venue DCT — The Honest Search',
  description: 'The Hyundai Venue DCT has been a great city car for five years. Three kids later, space is the only real filter. Here is what an upgrade actually looks like.',
}

import '../../../components/calculators.css'

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

      {/* ── HERO ── */}
      <div className="bg-[#0B044C] w-full py-16 px-4">
        <div className="max-w-[760px] mx-auto">
          <Link href="/" className="inline-block text-white/60 hover:text-white text-sm mb-6 transition-colors">
            ← Back to Research
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Upgrading From the Venue DCT
          </h1>
          <p className="mt-4 text-white/70 text-base">
            The honest search — three kids, a Jack Russell, and five years of memories
          </p>
          <div className="flex items-center gap-3 mt-6">
            <span className="bg-[#C4622D] text-white text-xs font-semibold px-2 py-0.5 rounded uppercase tracking-wide">Car Search</span>
            <span className="text-white/50 text-sm">April 2026</span>
          </div>
        </div>
      </div>

      <div className="max-w-[760px] mx-auto px-4 py-12">

        {/* ── VERDICT BANNER ── */}
        <div className="bg-[#EFEBE5] border-l-4 border-[#C4622D] px-6 py-5 rounded-r mb-10">
          <p className="text-xs uppercase tracking-wider text-[#C4622D] font-semibold mb-2">The Core Finding</p>
          <p className="text-[#2C2A27] leading-relaxed">
            The Seltos 2026 is the most honest upgrade from the Venue — longer, wider,
            more powerful, safer, and significantly better value than everything else evaluated.
            If a compact SUV handles the space problem well enough, the Seltos at ₹11–20L
            is where this search ends.
          </p>
        </div>

        {/* ── TOC ── */}
        <nav className="border border-[#E5E0D8] rounded-lg p-5 bg-white mb-12">
          <h2 className="text-sm font-semibold text-[#2C2A27] uppercase tracking-wider mb-3">Contents</h2>
          <ol className="space-y-1.5 text-sm text-[#5C6B4F]">
            {[
              ['#the-baseline', 'The Baseline'],
              ['#the-trigger', 'The Upgrade Trigger'],
              ['#what-changed', 'What Changed in 2026'],
              ['#candidates', 'The 13 Candidates'],
              ['#financials', 'Financial Comparison'],
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

        {/* ── THE BASELINE ── */}
        <section id="the-baseline" className="mb-12">
          <h2 className="text-xl font-bold text-[#2C2A27] mb-4">The Baseline: What the Venue DCT Actually Has</h2>
          <div className="space-y-3 text-[#3D3B37] text-sm leading-relaxed">
            <p>
              The Hyundai Venue DCT was bought in 2019. It is a sub-4-metre compact SUV
              with a 1.0-litre turbo petrol engine producing approximately 120 bhp,
              mated to a 7-speed dual-clutch transmission. It is a brilliant city car —
              nimble, well-weighted steering, enough power to feel quick in urban traffic.
            </p>
            <p className="font-semibold text-[#2C2A27]">What the Venue DCT has held up well on:</p>
            <ul className="space-y-1.5 pl-4">
              <li><strong>City driving in Bangalore.</strong> The DCT is excellent in stop-start traffic. The compact size makes it easy to park and manoeuvre.</li>
              <li><strong>The driving experience.</strong> Seb has described this car as one he enjoys driving — planted, responsive, not disconnected. This matters. A replacement that feels like a chore to drive is a false economy.</li>
              <li><strong>Reliability.</strong> Five years of ownership with no major issues. Hyundai's service network in Bangalore is convenient and cost-effective.</li>
              <li><strong>Efficiency.</strong> Real-world around 12–14 kmpl in mixed city driving. Acceptable for a turbo petrol.</li>
            </ul>
            <p className="font-semibold text-[#2C2A27]">What the Venue DCT does not have — and increasingly needs to:</p>
            <ul className="space-y-1.5 pl-4">
              <li><strong>Rear seat legroom.</strong> Adequate for young children. Not adequate for Rahel at 11, or for adults on long drives.</li>
              <li><strong>Boot volume.</strong> Approximately 350 litres. Enough for a weekly shop. Not enough for a week of luggage for five people plus Luka.</li>
              <li><strong>Third-row flexibility.</strong> None. The Venue is a strict 5-seater. Any configuration requiring more than five seats is a non-starter.</li>
              <li><strong>Highway refinement at speed.</strong> The 1.0-litre turbo is vocal at 120 km/h. The cabin is not as insulated as newer products.</li>
            </ul>
          </div>
        </section>

        {/* ── UPGRADE TRIGGER ── */}
        <section id="the-trigger" className="mb-12">
          <h2 className="text-xl font-bold text-[#2C2A27] mb-4">The Upgrade Trigger</h2>
          <div className="space-y-3 text-[#3D3B37] text-sm leading-relaxed">
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

        {/* ── WHAT CHANGED ── */}
        <section id="what-changed" className="mb-12">
          <h2 className="text-xl font-bold text-[#2C2A27] mb-4">What Changed in 2026</h2>
          <div className="space-y-3 text-[#3D3B37] text-sm leading-relaxed">
            <p>Three significant changes since the previous version of this article:</p>
            <ul className="space-y-2 pl-4">
              <li><strong>The Seltos 2026 launched in January.</strong> A completely redesigned model — longer, wider, more powerful, 5-star BNCAP, Level 2 ADAS — at ₹10.99–19.99L. This is the most significant compact SUV launch in India this year and changes the entire competitive landscape.</li>
              <li><strong>The brief has been corrected.</strong> The farm road filter was removed — Vadakkancherry is reached via Coimbatore, not driven from Bangalore. AWD is welcome but not mandatory.</li>
              <li><strong>The baseline is the Venue DCT.</strong> This is an upgrade search, not a replacement-of-need search. The starting point matters — and the starting point is a well-driven 2019 Venue with strong resale value.</li>
            </ul>
          </div>
        </section>

        {/* ── CANDIDATES ── */}
        <section id="candidates" className="mb-12">
          <h2 className="text-xl font-bold text-[#2C2A27] mb-6">The 13 Candidates</h2>
          <div className="space-y-8">

            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-bold text-[#C4622D]">1</span>
                <h3 className="text-base font-bold text-[#2C2A27]">Kia Seltos 2026 — The Honest Upgrade</h3>
                <span className="text-xs bg-[#C4622D]/10 text-[#C4622D] px-2 py-0.5 rounded-full font-medium">₹11–20L</span>
                <span className="text-xs bg-[#5C6B4F]/10 text-[#5C6B4F] px-2 py-0.5 rounded-full font-medium">⭐5 BNCAP</span>
              </div>
              <div className="text-sm text-[#3D3B37] leading-relaxed space-y-2 pl-6">
                <p><strong>The car that ends this search.</strong> The Seltos 2026 launched January 2 with a comprehensive redesign — new platform, new engines, a significantly larger cabin, and a 5-star BNCAP safety rating.</p>
                <p>Key numbers vs the Venue: Length +95mm (4,460mm), Wheelbase +80mm (2,690mm), Boot 447L (+97L), 160bhp turbo DCT (+40bhp). The turbo petrol DCT is the variant to prioritise — it gives the Seltos the performance feel that made the Venue enjoyable, at a higher level.</p>
                <p>The dual 12.3-inch curved display, Level 2 ADAS, Bose audio, and 5-star safety make this a generational leap over the Venue at every meaningful dimension. At ₹17–20L for the GTX turbo DCT, it is priced correctly for what it delivers.</p>
                <p className="text-[#6B6860] italic">Best for: Upgrading from the Venue without moving up a vehicle class.</p>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-bold text-[#C4622D]">2</span>
                <h3 className="text-base font-bold text-[#2C2A27]">Hyundai Creta — The Familiar Step Up</h3>
                <span className="text-xs bg-[#F7F4F0] border border-[#E5E0D8] text-[#6B6860] px-2 py-0.5 rounded-full font-medium">₹11–24L</span>
                <span className="text-xs bg-[#5C6B4F]/10 text-[#5C6B4F] px-2 py-0.5 rounded-full font-medium">⭐4 BNCAP</span>
              </div>
              <div className="text-sm text-[#3D3B37] leading-relaxed space-y-2 pl-6">
                <p>India's best-selling SUV for years, refreshed with updated interior technology and feature content. The Creta EV is expected in late 2026 — worth waiting for if electric is the direction.</p>
                <p>Versus the Venue: wider cabin, more rear seat legroom, larger boot, stronger diesel option. The Hyundai ecosystem is a continuation of the Venue ownership experience — same service network, same brand trust.</p>
                <p className="text-[#6B6860] italic">Best for: Brand-loyal Hyundai owners who want the most recognised compact SUV in India.</p>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-bold text-[#C4622D]">3</span>
                <h3 className="text-base font-bold text-[#2C2A27]">Toyota Innova Hycross — The Class Jump</h3>
                <span className="text-xs bg-[#F7F4F0] border border-[#E5E0D8] text-[#6B6860] px-2 py-0.5 rounded-full font-medium">₹27–33L</span>
                <span className="text-xs bg-[#5C6B4F]/10 text-[#5C6B4F] px-2 py-0.5 rounded-full font-medium">⭐5 BNCAP</span>
              </div>
              <div className="text-sm text-[#3D3B37] leading-relaxed space-y-2 pl-6">
                <p>Not a compact SUV — a mid-size MPV that competes with vehicles twice its price. The space upgrade from the Venue is transformational, not incremental.</p>
                <p>The 2.0-litre self-charging hybrid produces approximately 186 bhp combined while returning 18–20 kmpl real-world — the most efficient vehicle in this list on 5-hour highway runs. The cabin width accommodates three adults in the second row with real armroom. The third row, folded flat, creates a cargo area that Luka the Jack Russell could sleep in.</p>
                <p>The trade-off is size: 4.7 metres long, harder to park in Bangalore than the Venue. That difference is real and daily.</p>
                <p className="text-[#6B6860] italic">Best for: Families who have honestly decided that maximum space is worth the additional footprint and price.</p>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-bold text-[#C4622D]">4</span>
                <h3 className="text-base font-bold text-[#2C2A27]">Kia Carens — The Value MPV</h3>
                <span className="text-xs bg-[#F7F4F0] border border-[#E5E0D8] text-[#6B6860] px-2 py-0.5 rounded-full font-medium">₹18–22L</span>
                <span className="text-xs bg-[#5C6B4F]/10 text-[#5C6B4F] px-2 py-0.5 rounded-full font-medium">⭐3 BNCAP</span>
              </div>
              <div className="text-sm text-[#3D3B37] leading-relaxed space-y-2 pl-6">
                <p>Consistently underestimated. The low loading height — closer to the ground than an SUV floor — is a genuine practical advantage for a large dog. The 7-seater with captain's seats on higher variants makes the second row genuinely comfortable for adults.</p>
                <p>At approximately ₹22–26L for a well-equipped 7-seater, the Carens undercuts the Creta and delivers more interior volume than vehicles at twice its price.</p>
                <p className="text-[#6B6860] italic">Best for: Maximum interior volume per rupee. Regularly carrying five people and luggage simultaneously.</p>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-bold text-[#C4622D]">5</span>
                <h3 className="text-base font-bold text-[#2C2A27]">Tata Sierra ICE — The Available Surprise</h3>
                <span className="text-xs bg-[#F7F4F0] border border-[#E5E0D8] text-[#6B6860] px-2 py-0.5 rounded-full font-medium">₹11.5–21L</span>
                <span className="text-xs bg-[#5C6B4F]/10 text-[#5C6B4F] px-2 py-0.5 rounded-full font-medium">⭐5 BNCAP</span>
              </div>
              <div className="text-sm text-[#3D3B37] leading-relaxed space-y-2 pl-6">
                <p>Launched November 2025, already delivering. At ₹11.49–21.29L ex-showroom, it undercuts the Seltos at the entry point. Key number: the 622-litre boot is the largest in this list by a significant margin — larger than most competitors with their seats folded.</p>
                <p>The triple-screen layout, Level 2 ADAS, and 12-speaker JBL Dolby Atmos are genuinely impressive at this price. The 1.5L turbo petrol 160bhp with 6-speed automatic matches the Seltos on performance.</p>
                <p className="text-[#6B6860] italic">Best for: Maximum boot and cabin volume for the budget. Already available, not waiting for a 2026 launch.</p>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-bold text-[#C4622D]">6</span>
                <h3 className="text-base font-bold text-[#2C2A27]">Mahindra XUV700 — The SUV Experience</h3>
                <span className="text-xs bg-[#F7F4F0] border border-[#E5E0D8] text-[#6B6860] px-2 py-0.5 rounded-full font-medium">₹24–27L</span>
              </div>
              <div className="text-sm text-[#3D3B37] leading-relaxed space-y-2 pl-6">
                <p>The best Mahindra product in years. The 2.2-litre turbo diesel produces 185 bhp and 450 Nm — genuinely quick at highway speeds. The ADAS suite adds a real layer of safety on long highway runs.</p>
                <p>At approximately ₹27.5L for the AX7 variant, it is meaningfully more expensive than the Seltos or Carens. The question is whether the additional size, power, and SUV presence justify the premium.</p>
                <p className="text-[#6B6860] italic">Best for: Someone who wants the SUV feel — higher driving position, road presence — and is willing to pay for it.</p>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-bold text-[#C4622D]">7</span>
                <h3 className="text-base font-bold text-[#2C2A27]">Tata Harrier ICE — The Highway Specialist</h3>
                <span className="text-xs bg-[#F7F4F0] border border-[#E5E0D8] text-[#6B6860] px-2 py-0.5 rounded-full font-medium">₹13–25L</span>
                <span className="text-xs bg-[#5C6B4F]/10 text-[#5C6B4F] px-2 py-0.5 rounded-full font-medium">⭐5 BNCAP</span>
              </div>
              <div className="text-sm text-[#3D3B37] leading-relaxed space-y-2 pl-6">
                <p>Updated for 2026 with revised features and improved NVH. The 2.0-litre Kryotec diesel produces 170 bhp and 350 Nm — the highest torque figure in this list below the XUV700. Relaxed and refined at cruising speeds on the highway.</p>
                <p>Built on the OMEGARC platform — the same land-rover-derived architecture used by the Defender. If the farm road at Kizhakkancherry is a factor, the Harrier's platform is genuinely more capable than the compact SUV class.</p>
                <p className="text-[#6B6860] italic">Best for: Safety, structural integrity, and genuine highway composure. Non-urban driving conditions.</p>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-bold text-[#C4622D]">8</span>
                <h3 className="text-base font-bold text-[#2C2A27]">Maruti XL6 CNG — The Budget Intelligent Choice</h3>
                <span className="text-xs bg-[#F7F4F0] border border-[#E5E0D8] text-[#6B6860] px-2 py-0.5 rounded-full font-medium">₹15–17L</span>
              </div>
              <div className="text-sm text-[#3D3B37] leading-relaxed space-y-2 pl-6">
                <p>The 2.0-litre CNG option reduces running costs to approximately one-third of petrol. At 15,000 km per year, the fuel saving versus petrol alternatives is approximately ₹80,000 over five years — a meaningful number.</p>
                <p>The 6-seater configuration with captain's seats is the most comfortable layout for four adults on long drives. Maruti's service network is ubiquitous in Bangalore and Karnataka.</p>
                <p className="text-[#6B6860] italic">Best for: Budget-conscious buyers who want a genuine step up in practicality without the price of a compact SUV.</p>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-bold text-[#C4622D]">9</span>
                <h3 className="text-base font-bold text-[#2C2A27]">Tata Harrier EV — The Electric Highway Cruiser</h3>
                <span className="text-xs bg-[#F7F4F0] border border-[#E5E0D8] text-[#6B6860] px-2 py-0.5 rounded-full font-medium">₹21–29L</span>
                <span className="text-xs bg-[#5C6B4F]/10 text-[#5C6B4F] px-2 py-0.5 rounded-full font-medium">⭐5 BNCAP</span>
              </div>
              <div className="text-sm text-[#3D3B37] leading-relaxed space-y-2 pl-6">
                <p>Already on sale at ₹21.49–28.99L ex-showroom with a claimed range of 350–500 km per charge. The dual-motor AWD is available on higher variants. The electric drivetrain changes the highway touring character entirely — no gear shifts, instant torque, refinement that diesel cannot match at speed.</p>
                <p>Charging infrastructure along the Bangalore–Coorg route has improved significantly and is sufficient for practical EV touring.</p>
                <p className="text-[#6B6860] italic">Best for: Someone who wants the Harrier's safety and platform, with the EV driving experience for highway touring.</p>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-bold text-[#C4622D]">10</span>
                <h3 className="text-base font-bold text-[#2C2A27]">Kia Syros EV — The Electric Alternative</h3>
                <span className="text-xs bg-[#F7F4F0] border border-[#E5E0D8] text-[#6B6860] px-2 py-0.5 rounded-full font-medium">₹14–30L</span>
                <span className="text-xs bg-[#5C6B4F]/10 text-[#5C6B4F] px-2 py-0.5 rounded-full font-medium">Coming Mid-2026</span>
              </div>
              <div className="text-sm text-[#3D3B37] leading-relaxed space-y-2 pl-6">
                <p>Kia's upcoming electric compact SUV, expected mid-2026 with approximately 400–500 km range per charge. The running cost at approximately one-third of petrol is a significant long-term saving for primarily city driving.</p>
                <p>Worth a test drive when it launches — but the Seltos petrol or diesel is the more complete vehicle today.</p>
                <p className="text-[#6B6860] italic">Best for: Someone with home charging capability who wants to move into electric as the primary direction.</p>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-bold text-[#C4622D]">11</span>
                <h3 className="text-base font-bold text-[#2C2A27]">Hyundai Creta EV — The Electric Creta</h3>
                <span className="text-xs bg-[#F7F4F0] border border-[#E5E0D8] text-[#6B6860] px-2 py-0.5 rounded-full font-medium">₹18–22L</span>
                <span className="text-xs bg-[#5C6B4F]/10 text-[#5C6B4F] px-2 py-0.5 rounded-full font-medium">Coming Late 2026</span>
              </div>
              <div className="text-sm text-[#3D3B37] leading-relaxed space-y-2 pl-6">
                <p>Expected around the second half of 2026. If the Creta platform is already the preferred choice, waiting for the EV variant is a reasonable option — particularly if the primary use case is city driving with occasional highway runs.</p>
                <p>For everyone else, the Seltos 2026 is available now and represents the more complete package at this stage of EV infrastructure maturity.</p>
                <p className="text-[#6B6860] italic">Best for: Someone who has decided on the Creta platform and is willing to wait 6–9 months for the electric version.</p>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-bold text-[#C4622D]">12</span>
                <h3 className="text-base font-bold text-[#2C2A27]">Tata Curvv EV — The Electric Option</h3>
                <span className="text-xs bg-[#F7F4F0] border border-[#E5E0D8] text-[#6B6860] px-2 py-0.5 rounded-full font-medium">₹15–24L</span>
                <span className="text-xs bg-[#5C6B4F]/10 text-[#5C6B4F] px-2 py-0.5 rounded-full font-medium">Coming 2026</span>
              </div>
              <div className="text-sm text-[#3D3B37] leading-relaxed space-y-2 pl-6">
                <p>Expected in 2026 with pricing between ₹15–24L. The electric mid-size SUV offers a range of approximately 400–500 km per charge. Tata's electric drivetrain is proven — the Nexon EV has accumulated significant real-world usage data in India.</p>
                <p className="text-[#6B6860] italic">Best for: Someone committed to electric who wants a larger cabin than the Venue and is willing to wait for the 2026 launch.</p>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-bold text-[#C4622D]">13</span>
                <h3 className="text-base font-bold text-[#2C2A27]">Renault Duster 7-Seater — The Wildcard</h3>
                <span className="text-xs bg-[#F7F4F0] border border-[#E5E0D8] text-[#6B6860] px-2 py-0.5 rounded-full font-medium">₹10–20L</span>
                <span className="text-xs bg-[#5C6B4F]/10 text-[#5C6B4F] px-2 py-0.5 rounded-full font-medium">Coming Late 2026</span>
              </div>
              <div className="text-sm text-[#3D3B37] leading-relaxed space-y-2 pl-6">
                <p>Expected in late 2026 with a 7-seater configuration and a hybrid powertrain option. Pricing estimated at ₹10–20L — significantly cheaper than everything else in this list if the estimates hold.</p>
                <p>The previous Duster was praised for its ride quality and practicality. The new model is expected to build on this foundation with updated technology and a larger cabin.</p>
                <p className="text-[#6B6860] italic">Best for: Someone with a flexible timeline who wants to wait and see what competitive pricing the Duster delivers.</p>
              </div>
            </div>

          </div>
        </section>

        {/* ── FINANCIAL COMPARISON ── */}
        <section id="financials" className="mb-12">
          <h2 className="text-xl font-bold text-[#2C2A27] mb-4">Financial Comparison</h2>
          <p className="text-xs text-[#6B6860] mb-4">
            Prices are ex-showroom or on-road Bangalore estimates, April 2026.
            Annual usage: 15,000 km at 70% highway, 30% city. Confirm exact prices with dealers before any decision.
          </p>
          <div className="overflow-x-auto rounded-lg border border-[#E5E0D8]">
            <table className="w-full text-sm min-w-[520px]">
              <thead>
                <tr className="bg-[#F7F4F0] border-b border-[#E5E0D8]">
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-[#2C2A27]">Vehicle</th>
                  <th scope="col" className="text-right px-4 py-3 font-semibold text-[#2C2A27]">Price</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-[#2C2A27] hidden md:table-cell">Engine</th>
                  <th scope="col" className="text-center px-4 py-3 font-semibold text-[#2C2A27] hidden sm:table-cell">Boot</th>
                  <th scope="col" className="text-center px-4 py-3 font-semibold text-[#2C2A27]">BNCAP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0EDE8]">
                {FINANCIAL_TABLE.map(([vehicle, price, engine, boot,, bncaps, isHighlight]) => (
                  <tr key={vehicle} className={`${isHighlight ? 'bg-[#EFEBE5]' : 'bg-white'} hover:bg-[#F7F4F0] transition-colors`}>
                    <td className="px-4 py-3 font-medium text-[#2C2A27] text-xs">{vehicle}</td>
                    <td className="px-4 py-3 text-right text-[#3D3B37] text-xs">{price}</td>
                    <td className="px-4 py-3 text-[#6B6860] hidden md:table-cell text-xs">{engine}</td>
                    <td className="px-4 py-3 text-center text-[#6B6860] hidden sm:table-cell text-xs">{boot}</td>
                    <td className={`px-4 py-3 text-center font-semibold text-xs ${isHighlight ? 'text-[#C4622D]' : 'text-[#3D3B37]'}`}>{bncaps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-[#6B6860]">
            <strong className="not-italic text-[#2C2A27]">The honest comparison:</strong> The Seltos 2026 base variant (₹10.99L)
            costs approximately the same as the Venue DCT did in 2019. The top-spec Seltos GTX turbo DCT (₹17–20L) is where the meaningful upgrade sits —
            more power, significantly more space, Level 2 ADAS, 5-star safety, and a dual-screen interior that feels generational.
          </p>
        </section>


        {/* ── THREE PATHS ── */}
        <section id="three-paths" className="mb-12">
          <h2 className="text-xl font-bold text-[#2C2A27] mb-6">Three Paths Forward</h2>
          <div className="space-y-5">
            {[
              {
                path: 'Path 1 — Close the Search Today',
                car: 'Seltos 2026 GTX Turbo DCT',
                body: <>
                  <p>The Seltos 2026 GTX with the 1.5-litre turbo petrol engine and 7-speed DCT is the most honest upgrade available from the Venue DCT. More power. Significantly more space. 5-star safety. Level 2 ADAS. A dual-screen interior that makes the Venue feel like a 2019 product. Priced at approximately ₹17–20L — firmly within the budget range.</p>
                  <p>This is the car that ends the search. Drive it, negotiate, sell the Venue, move on.</p>
                </>,
              },
              {
                path: 'Path 2 — If Space Is the Only Real Criterion',
                car: 'Innova Hycross',
                body: <>
                  <p>If the honest self-assessment is that the Venue's cabin is genuinely inadequate — not slightly cramped, but inadequate — then the Innova Hycross is the answer. It is a class above. The hybrid efficiency makes it the most sensible highway touring vehicle in this list.</p>
                  <p>The trade-off is size and price. At ₹27–33L, it is a meaningful premium. And at 4.7 metres, it is not the city car the Venue is. That trade-off is real and daily.</p>
                  <p><strong>Test drive both.</strong> The question is not which is better. The question is which is better for your specific use case.</p>
                </>,
              },
              {
                path: 'Path 3 — If Electric Is the Direction',
                car: 'Wait for the Syros EV or Creta EV',
                body: <>
                  <p>If the intent is to move to electric for the running cost savings and the Bangalore city driving profile suits an EV, the Syros EV (₹14–30L, mid-2026) or Creta EV (₹18–22L, late 2026) are both worth waiting for.</p>
                  <p>The honest constraint: EVs make most sense when home charging is available. If that is not yet in place, a petrol or diesel vehicle is the pragmatic choice today.</p>
                </>,
              },
            ].map(({ path, car, body }) => (
              <div key={path} className="bg-[#EFEBE5] rounded-xl p-5 border-l-4 border-[#C4622D]">
                <h3 className="text-xs font-bold text-[#C4622D] uppercase tracking-wide mb-1">{path}</h3>
                <p className="text-sm font-bold text-[#2C2A27] mb-3">{car}</p>
                <div className="text-sm text-[#3D3B37] leading-relaxed space-y-2">{body}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── RECOMMENDATION ── */}
        <section id="recommendation" className="mb-12">
          <h2 className="text-xl font-bold text-[#2C2A27] mb-4">What I'd Do</h2>
          <div className="space-y-3 text-sm text-[#3D3B37] leading-relaxed">
            <p><strong>Drive the Seltos 2026 GTX turbo DCT first.</strong> It is the most direct upgrade from the Venue DCT — same brand ecosystem familiarity, same fun-to-drive character, significantly more space and safety. At ₹17–20L, it is priced correctly for what it delivers.</p>
            <p><strong>Then drive the Innova Hycross.</strong> Not as the comparison that makes the Seltos feel inadequate. As the comparison that clarifies whether the additional cabin width and hybrid efficiency are worth the size premium to <em>you</em>.</p>
            <p><strong>The Venue DCT has been a great car.</strong> It earned its upgrade. The Seltos 2026 is the most honest recognition of that investment — a car that takes everything the Venue did well and does it at a higher level, without requiring a category jump.</p>
            <p><strong>What to watch:</strong> The Kia Syros EV (mid-2026) and Creta EV (late 2026) are wildcard entries. If either delivers the range and pricing expected, they could reframe the entire EV vs petrol argument for this use case.</p>
          </div>
        </section>

        {/* ── SOURCES ── */}
        <section id="sources" className="mb-12">
          <h2 className="text-base font-bold text-[#2C2A27] mb-4">Sources</h2>
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
                <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-[#C4622D] underline">{label}</a>
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
