'use client'

import { useState, useMemo } from 'react'

const CARS = [
  { id: 'seltos-htk', name: 'Kia Seltos 2026 HTK+', price: 10.99, boot: 447, efficiency: 16.8, power: 115, bancap: 5, seats: 5, features: 6 },
  { id: 'seltos-gtx', name: 'Kia Seltos 2026 GTX', price: 18.5, boot: 447, efficiency: 15.8, power: 160, bancap: 5, seats: 5, features: 8 },
  { id: 'creta', name: 'Hyundai Creta', price: 13.99, boot: 433, efficiency: 17.4, power: 115, bancap: 4, seats: 5, features: 5 },
  { id: 'xl6', name: 'Maruti XL6 Alpha CNG', price: 15.5, boot: 239, efficiency: 26.6, power: 103, bancap: 3, seats: 6, features: 4 },
  { id: 'carens', name: 'Kia Carens', price: 20.0, boot: 445, efficiency: 18.2, power: 116, bancap: 3, seats: 7, features: 6 },
  { id: 'xuv700', name: 'Mahindra XUV700', price: 25.5, boot: 447, efficiency: 13.0, power: 185, bancap: 5, seats: 7, features: 9 },
  { id: 'innova', name: 'Toyota Innova Hycross', price: 30.0, boot: 340, efficiency: 23.0, power: 186, bancap: 5, seats: 7, features: 7 },
  { id: 'sierra', name: 'Tata Sierra ICE', price: 16.49, boot: 622, efficiency: 17.5, power: 160, bancap: 5, seats: 5, features: 8 },
  { id: 'harrier-ice', name: 'Tata Harrier ICE', price: 19.5, boot: 447, efficiency: 16.0, power: 170, bancap: 5, seats: 5, features: 7 },
  { id: 'harrier-ev', name: 'Tata Harrier EV', price: 25.24, boot: 447, efficiency: 6.5, power: 320, bancap: 5, seats: 5, features: 7 },
]

const CRITERIA = [
  { key: 'price', label: 'Price', unit: 'L', higherBetter: false, max: 35, min: 5 },
  { key: 'boot', label: 'Boot Space', unit: 'L', higherBetter: true, max: 650, min: 200 },
  { key: 'efficiency', label: 'Fuel Efficiency', unit: 'km/L', higherBetter: true, max: 30, min: 5 },
  { key: 'power', label: 'Power', unit: 'bhp', higherBetter: true, max: 350, min: 80 },
  { key: 'bancap', label: 'Safety (BNCAP)', unit: 'stars', higherBetter: true, max: 5, min: 1 },
  { key: 'seats', label: 'Seats', unit: '', higherBetter: true, max: 8, min: 4 },
  { key: 'features', label: 'Features', unit: '', higherBetter: true, max: 12, min: 2 },
]

function normalize(carVal: number, min: number, max: number, higherBetter: boolean): number {
  if (max === min) return 5
  let score = (carVal - min) / (max - min) * 10
  if (!higherBetter) score = 10 - score  // invert for price
  return Math.round(Math.max(0, Math.min(10, score)) * 10) / 10
}

export default function WeightedScores() {
  const [weights, setWeights] = useState<Record<string, number>>({
    price: 8,
    boot: 9,
    efficiency: 6,
    power: 5,
    bancap: 9,
    seats: 7,
    features: 4,
  })

  const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0)

  const ranked = useMemo(() => {
    return CARS.map((car) => {
      let totalScore = 0
      const breakdown: Record<string, number> = {}
      CRITERIA.forEach((c) => {
        const rawScore = normalize(
          car[c.key as keyof typeof car] as number,
          c.min, c.max, c.higherBetter
        )
        const weighted = (rawScore * weights[c.key]) / totalWeight
        breakdown[c.key] = Math.round(weighted * 10) / 10
        totalScore += weighted
      })
      return {
        ...car,
        totalScore: Math.round(totalScore * 10) / 10,
        breakdown,
      }
    }).sort((a, b) => b.totalScore - a.totalScore)
  }, [weights])

  return (
    <div className="weighted-scores">
      {/* Weight sliders */}
      <div className="ws-weight-panel">
        <div className="ws-panel-header">
          <h3>Adjust Your Priorities</h3>
          <p className="ws-hint">Drag the weights to match what matters to you. Higher = more important.</p>
        </div>
        <div className="ws-sliders">
          {CRITERIA.map((c) => (
            <div key={c.key} className="ws-slider-row">
              <div className="ws-slider-label">
                <span className="ws-label-name">{c.label}</span>
                <span className="ws-label-val">{weights[c.key]}/10</span>
              </div>
              <input
                type="range"
                min={0}
                max={10}
                value={weights[c.key]}
                onChange={(e) => setWeights({ ...weights, [c.key]: Number(e.target.value) })}
                className="ws-slider"
                style={{ '--fill-pct': `${(weights[c.key] / 10) * 100}%` } as React.CSSProperties}
              />
            </div>
          ))}
        </div>
        <div className="ws-total">Total weight: {totalWeight} points</div>
      </div>

      {/* Rankings */}
      <div className="ws-rankings">
        <div className="ws-rankings-header">
          <span className="ws-rank-col">Rank</span>
          <span className="ws-name-col">Car</span>
          <span className="ws-score-col">Score</span>
        </div>
        {ranked.map((car, i) => (
          <div key={car.id} className={`ws-car-row ${i === 0 ? 'ws-top' : ''}`}>
            <div className="ws-rank-col">
              <span className={`ws-rank-badge ${i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : ''}`}>
                #{i + 1}
              </span>
            </div>
            <div className="ws-name-col">
              <div className="ws-car-name">{car.name}</div>
              <div className="ws-car-sub">
                ₹{car.price}L · {car.boot}L boot · {car.efficiency} km/L · {car.power} bhp · {car.bancap}-star
              </div>
              <div className="ws-breakdown-bars">
                {CRITERIA.map((c) => (
                  <div key={c.key} className="ws-breakdown-bar" title={`${c.label}: ${car.breakdown[c.key]}`}>
                    <div
                      className="ws-bar-fill"
                      style={{
                        height: `${(car.breakdown[c.key] / 3) * 100}%`,
                        background: i === 0 ? '#C4622D' : '#9C9590',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="ws-score-col">
              <span className="ws-score-val">{car.totalScore}</span>
              <span className="ws-score-max">/10</span>
            </div>
          </div>
        ))}
      </div>

      <p className="ws-note">
        * Scores normalized 0–10 per criterion. Weights applied as proportions of total. Price inverted (lower price = higher score).
      </p>
    </div>
  )
}
