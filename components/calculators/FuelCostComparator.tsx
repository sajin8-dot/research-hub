'use client'

import { useState } from 'react'

const CARS = [
  { name: 'Kia Seltos 2026 HTK+', fuel: 'Petrol', efficiency: 16.8, tank: 50 },
  { name: 'Kia Seltos 2026 GTX', fuel: 'Petrol', efficiency: 15.8, tank: 50 },
  { name: 'Hyundai Creta', fuel: 'Petrol', efficiency: 17.4, tank: 50 },
  { name: 'Maruti XL6 Alpha CNG', fuel: 'CNG', efficiency: 26.6, tank: 11 }, // kg
  { name: 'Kia Carens', fuel: 'Diesel', efficiency: 18.2, tank: 45 },
  { name: 'Mahindra XUV700', fuel: 'Diesel', efficiency: 13.0, tank: 60 },
  { name: 'Toyota Innova Hycross', fuel: 'Hybrid', efficiency: 23.0, tank: 45 },
  { name: 'Tata Sierra ICE', fuel: 'Petrol', efficiency: 17.5, tank: 55 },
  { name: 'Tata Harrier ICE', fuel: 'Diesel', efficiency: 16.0, tank: 50 },
  { name: 'Tata Harrier EV', fuel: 'Electric', efficiency: 6.5, tank: 75 }, // km per kWh
  { name: 'Renault Duster', fuel: 'Petrol', efficiency: 16.0, tank: 50 },
]

const FUEL_PRICES: Record<string, number> = {
  Petrol: 108.5,   // per litre
  Diesel: 93.5,    // per litre
  CNG: 82.0,       // per kg
  Hybrid: 108.5,    // petrol for hybrid
  Electric: 9.5,    // per kWh (home charging)
}

const FUEL_UNITS: Record<string, string> = {
  Petrol: 'L',
  Diesel: 'L',
  CNG: 'kg',
  Hybrid: 'L',
  Electric: 'kWh',
}

const FUEL_COLORS: Record<string, string> = {
  Petrol: '#C4622D',
  Diesel: '#5C6B4F',
  CNG: '#2E7D9B',
  Hybrid: '#7B5EA7',
  Electric: '#1A8A5C',
}

type FuelType = 'All' | 'Petrol' | 'Diesel' | 'CNG' | 'Hybrid' | 'Electric'

export default function FuelCostComparator() {
  const [monthlyKm, setMonthlyKm] = useState(1500)
  const [fuelFilter, setFuelFilter] = useState<FuelType>('All')
  const [showPerKm, setShowPerKm] = useState(false)

  const kmPct = ((monthlyKm - 200) / (5000 - 200)) * 100

  const filtered = CARS.filter((c) => fuelFilter === 'All' || c.fuel === fuelFilter)

  const annualKm = monthlyKm * 12

  const rows = filtered
    .map((car) => {
      let costPerMonth: number
      if (car.fuel === 'Electric') {
        costPerMonth = (annualKm / car.efficiency) * FUEL_PRICES.Electric / 12
      } else if (car.fuel === 'CNG') {
        costPerMonth = (annualKm / car.efficiency) * FUEL_PRICES.CNG / 12
      } else {
        costPerMonth = (annualKm / car.efficiency) * FUEL_PRICES[car.fuel as keyof typeof FUEL_PRICES] / 12
      }
      const annual = costPerMonth * 12
      return { ...car, costPerMonth, annual }
    })
    .sort((a, b) => a.costPerMonth - b.costPerMonth)

  const cheapest = rows[0]

  return (
    <div className="fuel-calc">
      <div className="fuel-controls">
        <div className="fuel-control">
          <div className="calc-label-row">
            <label className="calc-label">Monthly Driving</label>
            <span className="calc-value-display">{monthlyKm.toLocaleString('en-IN')} km</span>
          </div>
          <input
            type="range"
            min={200}
            max={5000}
            step={50}
            value={monthlyKm}
            onChange={(e) => setMonthlyKm(Number(e.target.value))}
            className="calc-slider"
            style={{ '--fill-pct': `${kmPct}%` } as React.CSSProperties}
          />
          <div className="calc-range-labels">
            <span>200 km</span>
            <span>5,000 km</span>
          </div>
        </div>

        <div className="fuel-filter-row">
          <span className="calc-label">Fuel type:</span>
          <div className="fuel-filter-btns">
            {(['All', 'Petrol', 'Diesel', 'CNG', 'Hybrid', 'Electric'] as FuelType[]).map((f) => (
              <button
                key={f}
                className={`fuel-filter-btn ${fuelFilter === f ? 'active' : ''}`}
                onClick={() => setFuelFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="fuel-toggle">
          <button
            className={`fuel-toggle-btn ${!showPerKm ? 'active' : ''}`}
            onClick={() => setShowPerKm(false)}
          >
            Monthly Cost
          </button>
          <button
            className={`fuel-toggle-btn ${showPerKm ? 'active' : ''}`}
            onClick={() => setShowPerKm(true)}
          >
            Per km
          </button>
        </div>
      </div>

      <div className="fuel-ranking">
        {rows.map((car, i) => {
          const display = showPerKm
            ? `₹${(car.costPerMonth / monthlyKm).toFixed(2)}/km`
            : `₹${Math.round(car.costPerMonth).toLocaleString('en-IN')}/mo`
          const pct = cheapest ? (car.costPerMonth / cheapest.costPerMonth) * 100 : 100
          const barWidth = cheapest ? 100 - ((cheapest.costPerMonth - car.costPerMonth) / cheapest.costPerMonth) * 100 : 100

          return (
            <div key={car.name} className={`fuel-row ${i === 0 ? 'cheapest' : ''}`}>
              <div className="fuel-rank">#{i + 1}</div>
              <div className="fuel-info">
                <div className="fuel-name">{car.name}</div>
                <div className="fuel-meta">
                  <span
                    className="fuel-badge"
                    style={{ background: FUEL_COLORS[car.fuel] || '#666' }}
                  >
                    {car.fuel}
                  </span>
                  <span className="fuel-efficiency">{car.efficiency} {car.fuel === 'Electric' ? 'km/kWh' : car.fuel === 'CNG' ? 'km/kg' : 'km/L'}</span>
                </div>
              </div>
              <div className="fuel-bar-wrap">
                <div
                  className="fuel-bar"
                  style={{
                    width: `${barWidth}%`,
                    background: i === 0 ? '#1A8A5C' : FUEL_COLORS[car.fuel] || '#C4622D',
                  }}
                />
              </div>
              <div className="fuel-cost">{display}</div>
            </div>
          )
        })}
      </div>

      <p className="fuel-note">
        * Based on current fuel prices: Petrol ₹108.5/L · Diesel ₹93.5/L · CNG ₹82/kg · EV ₹9.5/kWh (home charging)
      </p>
    </div>
  )
}
