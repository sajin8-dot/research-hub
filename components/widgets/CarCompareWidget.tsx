'use client'

import { useState } from 'react'

const CARS = [
  {
    id: 'seltos-2026-htk',
    name: 'Kia Seltos 2026 HTK+',
    price: 10.99,
    engine: '1.5L NA Petrol',
    bhp: '115 bhp',
    torque: '144 Nm',
    transmission: '6MT / IVT',
    boot: '447L',
    seats: 5,
    fuel: 'Petrol',
    efficiency: 16.8,
    bancap: '5-star',
    length: 4460,
    wheelbase: 2690,
    groundClearance: 200,
    warranty: '3 years / 100,000 km',
    features: ['Level 2 ADAS', 'Dual 12.3" screens', 'Panoramic sunroof', '6 airbags', 'Wireless charging'],
  },
  {
    id: 'seltos-2026-gtx',
    name: 'Kia Seltos 2026 GTX',
    price: 18.5,
    engine: '1.5L Turbo Petrol',
    bhp: '160 bhp',
    torque: '253 Nm',
    transmission: '7 DCT',
    boot: '447L',
    seats: 5,
    fuel: 'Petrol',
    efficiency: 15.8,
    bancap: '5-star',
    length: 4460,
    wheelbase: 2690,
    groundClearance: 200,
    warranty: '3 years / 100,000 km',
    features: ['Level 2 ADAS', 'Dual 12.3" screens', 'Panoramic sunroof', '8 airbags', 'Harman Kardon audio', 'Ventilated seats'],
  },
  {
    id: 'creta',
    name: 'Hyundai Creta',
    price: 13.99,
    engine: '1.5L Petrol',
    bhp: '115 bhp',
    torque: '144 Nm',
    transmission: '6MT / CVT',
    boot: '433L',
    seats: 5,
    fuel: 'Petrol',
    efficiency: 17.4,
    bancap: '4-star',
    length: 4300,
    wheelbase: 2610,
    groundClearance: 190,
    warranty: '3 years / 100,000 km',
    features: ['Level 2 ADAS', '10.25" screen', 'Panoramic sunroof', '6 airbags'],
  },
  {
    id: 'xl6-cng',
    name: 'Maruti XL6 Alpha CNG',
    price: 15.5,
    engine: '2.0L CNG',
    bhp: '103 bhp',
    torque: '137 Nm',
    transmission: '6MT',
    boot: '239L',
    seats: 6,
    fuel: 'CNG',
    efficiency: 26.6,
    bancap: '3-star',
    length: 4445,
    wheelbase: 2740,
    groundClearance: 180,
    warranty: '3 years / 100,000 km',
    features: ['SmartPlay Studio', 'Rear AC', 'Automatic AC', 'Roof rails'],
  },
  {
    id: 'carens',
    name: 'Kia Carens',
    price: 20.0,
    engine: '1.5L Diesel',
    bhp: '116 bhp',
    torque: '250 Nm',
    transmission: '6AT',
    boot: '445L',
    seats: 7,
    fuel: 'Diesel',
    efficiency: 18.2,
    bancap: '3-star',
    length: 4540,
    wheelbase: 2780,
    groundClearance: 190,
    warranty: '3 years / 100,000 km',
    features: ['Ventilated seats', '8" screen', '6 airbags', 'Wireless charging', ' captains seats option'],
  },
  {
    id: 'xuv700',
    name: 'Mahindra XUV700',
    price: 25.5,
    engine: '2.2L Diesel',
    bhp: '185 bhp',
    torque: '450 Nm',
    transmission: '6AT AWD',
    boot: '447L',
    seats: 7,
    fuel: 'Diesel',
    efficiency: 13.0,
    bancap: 'Expected 5',
    length: 4695,
    wheelbase: 2750,
    groundClearance: 210,
    warranty: '7 years / 100,000 km',
    features: ['Level 2 ADAS', 'Dual 12.3" screens', 'Panoramic sunroof', '10 airbags', 'AWD', 'AdrenoX Connect'],
  },
  {
    id: 'innova',
    name: 'Toyota Innova Hycross',
    price: 30.0,
    engine: '2.0L Hybrid',
    bhp: '186 bhp combined',
    torque: '221 Nm',
    transmission: 'e-CVT',
    boot: '340L (3rd row folded)',
    seats: 7,
    fuel: 'Hybrid',
    efficiency: 23.0,
    bancap: '5-star',
    length: 4755,
    wheelbase: 2850,
    groundClearance: 185,
    warranty: '5 years / 220,000 km',
    features: ['Hybrid synergy', 'Ambient lighting', '9 speaker JBL', 'Wireless charging', 'Captain seats 2nd row'],
  },
  {
    id: 'sierra',
    name: 'Tata Sierra ICE',
    price: 16.49,
    engine: '1.5L Turbo Petrol',
    bhp: '160 bhp',
    torque: '255 Nm',
    transmission: '6AT',
    boot: '622L',
    seats: 5,
    fuel: 'Petrol',
    efficiency: 17.5,
    bancap: '5-star',
    length: 4340,
    wheelbase: 2730,
    groundClearance: 200,
    warranty: '3 years / 125,000 km',
    features: ['Level 2 ADAS', 'Triple-screen dashboard', 'JBL 12-speaker', 'Panoramic sunroof', '360 camera'],
  },
  {
    id: 'harrier-ice',
    name: 'Tata Harrier ICE',
    price: 19.5,
    engine: '2.0L Diesel',
    bhp: '170 bhp',
    torque: '350 Nm',
    transmission: '6AT',
    boot: '447L',
    seats: 5,
    fuel: 'Diesel',
    efficiency: 16.0,
    bancap: '5-star',
    length: 4742,
    wheelbase: 2745,
    groundClearance: 220,
    warranty: '3 years / 125,000 km',
    features: ['Level 2 ADAS', '10.25" screen', 'Panoramic sunroof', '6 airbags', 'Terrain modes'],
  },
  {
    id: 'harrier-ev',
    name: 'Tata Harrier EV',
    price: 25.24,
    engine: '65 kWh Electric',
    bhp: '320 bhp AWD',
    torque: '510 Nm',
    transmission: 'Single Speed',
    boot: '447L',
    seats: 5,
    fuel: 'Electric',
    efficiency: 6.5,
    bancap: '5-star',
    length: 4742,
    wheelbase: 2745,
    groundClearance: 220,
    warranty: '3 years / 125,000 km',
    features: ['65 kWh battery', 'AWD', 'Vehicle-to-load', 'Level 2 ADAS', '10.25" screen'],
  },
]

type CarId = string

export default function CarCompareWidget() {
  const [carA, setCarA] = useState<CarId>('seltos-2026-htk')
  const [carB, setCarB] = useState<CarId>('harrier-ice')

  const a = CARS.find((c) => c.id === carA)!
  const b = CARS.find((c) => c.id === carB)!

  const specRows = [
    { label: 'Price (ex-showroom)', a: `₹${a.price}L`, b: `₹${b.price}L`, diff: Math.abs(a.price - b.price), unit: 'L', higherWorse: false },
    { label: 'Engine', a: a.engine, b: b.engine, diff: 0 },
    { label: 'Power', a: a.bhp, b: b.bhp, diff: 0 },
    { label: 'Torque', a: a.torque, b: b.torque, diff: 0 },
    { label: 'Transmission', a: a.transmission, b: b.transmission, diff: 0 },
    { label: 'Fuel', a: a.fuel, b: b.fuel, diff: 0 },
    { label: 'Efficiency', a: `${a.efficiency} km/L`, b: `${b.efficiency} km/L`, diff: Math.abs(a.efficiency - b.efficiency), unit: 'km/L', higherBetter: true },
    { label: 'Boot', a: a.boot, b: b.boot, diff: 0 },
    { label: 'Seats', a: `${a.seats}`, b: `${b.seats}`, diff: Math.abs(a.seats - b.seats), unit: 'seats', higherBetter: false },
    { label: 'BNCAP', a: a.bancap, b: b.bancap, diff: 0 },
    { label: 'Length', a: `${a.length} mm`, b: `${b.length} mm`, diff: Math.abs(a.length - b.length), unit: 'mm', higherBetter: true },
    { label: 'Wheelbase', a: `${a.wheelbase} mm`, b: `${b.wheelbase} mm`, diff: Math.abs(a.wheelbase - b.wheelbase), unit: 'mm', higherBetter: true },
    { label: 'Ground Clearance', a: `${a.groundClearance} mm`, b: `${b.groundClearance} mm`, diff: Math.abs(a.groundClearance - b.groundClearance), unit: 'mm', higherBetter: false },
    { label: 'Warranty', a: a.warranty, b: b.warranty, diff: 0 },
  ]

  // Determine winner for a spec row. Returns 'A', 'B', or null (no comparison)
  const getWinner = (label: string, valA: string, valB: string, higherBetter?: boolean) => {
    // Extract numeric value from strings like "₹10.99L", "170 bhp", "4460 mm", etc.
    const parseNum = (s: string) => {
      const m = String(s).match(/[\d.]+/)
      return m ? parseFloat(m[0]) : null
    }
    const numA = parseNum(valA)
    const numB = parseNum(valB)
    if (numA === null || numB === null || numA === numB) return null

    // Price: lower is better
    if (label === 'Price (ex-showroom)') return numA < numB ? 'A' : 'B'
    // Seats / ground clearance: higher is generally better for these use cases
    if (label === 'Seats' || label === 'Ground Clearance') return numA > numB ? 'A' : 'B'
    // Default: higher is better for performance specs
    if (higherBetter === true) return numA > numB ? 'A' : 'B'
    if (higherBetter === false) return numA < numB ? 'A' : 'B'
    return null
  }

  const allFeatures = Array.from(new Set([...a.features, ...b.features]))

  return (
    <div className="compare-widget">
      <div className="compare-selectors">
        <div className="compare-selector">
          <label className="compare-selector-label">Car A</label>
          <select
            className="compare-select"
            value={carA}
            onChange={(e) => setCarA(e.target.value)}
          >
            {CARS.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div className="compare-vs">VS</div>
        <div className="compare-selector">
          <label className="compare-selector-label">Car B</label>
          <select
            className="compare-select"
            value={carB}
            onChange={(e) => setCarB(e.target.value)}
          >
            {CARS.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="compare-table-wrap">
        <table className="compare-table">
          <thead>
            <tr>
              <th>Specification</th>
              <th className={carA === carB ? '' : 'winner-col'}>{a.name}</th>
              <th className={carA === carB ? '' : 'winner-col'}>{b.name}</th>
            </tr>
          </thead>
          <tbody>
            {specRows.map((row) => {
              const w = getWinner(row.label, row.a, row.b, ('higherBetter' in row ? row.higherBetter : undefined))
              return (
                <tr key={row.label}>
                  <td className="compare-spec-label">{row.label}</td>
                  <td className={w === 'A' ? 'compare-cell winner' : 'compare-cell'}>{row.a}</td>
                  <td className={w === 'B' ? 'compare-cell winner' : 'compare-cell'}>{row.b}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="compare-features">
        <h4>Features Check</h4>
        <div className="compare-features-grid">
          {allFeatures.map((f) => {
            const hasA = a.features.includes(f)
            const hasB = b.features.includes(f)
            return (
              <div key={f} className={`compare-feature-row ${hasA && hasB ? 'both' : hasA ? 'a' : 'b'}`}>
                <span className={`compare-feature-check ${hasA ? 'yes' : 'no'}`}>{hasA ? '✓' : '–'}</span>
                <span className="compare-feature-name">{f}</span>
                <span className={`compare-feature-check ${hasB ? 'yes' : 'no'}`}>{hasB ? '✓' : '–'}</span>
              </div>
            )
          })}
        </div>
        <div className="compare-features-header">
          <span>{a.name.split(' ')[0]}</span>
          <span>{b.name.split(' ')[0]}</span>
        </div>
      </div>
    </div>
  )
}
