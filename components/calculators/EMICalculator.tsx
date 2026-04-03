'use client'

import { useState, useEffect } from 'react'

const PRESET_AMOUNTS = [
  { label: '₹10L', value: 1000000 },
  { label: '₹15L', value: 1500000 },
  { label: '₹20L', value: 2000000 },
  { label: '₹25L', value: 2500000 },
]

const TENURE_YEARS = [1, 2, 3, 4, 5, 6, 7]

export default function EMICalculator({ defaultAmount = 1500000 }: { defaultAmount?: number }) {
  const [principal, setPrincipal] = useState(defaultAmount)
  const [tenureYears, setTenureYears] = useState(5)
  const [rate, setRate] = useState(9.5)
  const [emi, setEmi] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)
  const [totalPayment, setTotalPayment] = useState(0)

  useEffect(() => {
    const monthlyRate = rate / 12 / 100
    const n = tenureYears * 12
    if (monthlyRate === 0) {
      setEmi(principal / n)
    } else {
      const emiAmount = (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1)
      setEmi(Math.round(emiAmount))
    }
    const total = emi * n
    setTotalInterest(total - principal)
    setTotalPayment(total)
  }, [principal, tenureYears, rate])

  const principalPct = ((principal - 500000) / (3000000 - 500000)) * 100

  return (
    <div className="emi-calc">
      {/* Amount */}
      <div className="calc-section">
        <div className="calc-label-row">
          <label className="calc-label">Loan Amount</label>
          <span className="calc-value-display">₹{(principal / 100000).toFixed(1)}L</span>
        </div>
        <input
          type="range"
          min={500000}
          max={3000000}
          step={50000}
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
          className="calc-slider"
          style={{ '--fill-pct': `${principalPct}%` } as React.CSSProperties}
        />
        <div className="calc-range-labels">
          <span>₹5L</span>
          <span>₹30L</span>
        </div>
        <div className="calc-presets">
          {PRESET_AMOUNTS.map((p) => (
            <button
              key={p.value}
              className={`calc-preset ${principal === p.value ? 'active' : ''}`}
              onClick={() => setPrincipal(p.value)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tenure */}
      <div className="calc-section">
        <div className="calc-label-row">
          <label className="calc-label">Loan Tenure</label>
          <span className="calc-value-display">{tenureYears} year{tenureYears !== 1 ? 's' : ''}</span>
        </div>
        <div className="calc-tenure-grid">
          {TENURE_YEARS.map((y) => (
            <button
              key={y}
              className={`calc-tenure-btn ${tenureYears === y ? 'active' : ''}`}
              onClick={() => setTenureYears(y)}
            >
              {y}y
            </button>
          ))}
        </div>
      </div>

      {/* Interest Rate */}
      <div className="calc-section">
        <div className="calc-label-row">
          <label className="calc-label">Interest Rate (p.a.)</label>
          <span className="calc-value-display">{rate.toFixed(1)}%</span>
        </div>
        <input
          type="range"
          min={7.5}
          max={14}
          step={0.1}
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className="calc-slider"
          style={{ '--fill-pct': `${((rate - 7.5) / (14 - 7.5)) * 100}%` } as React.CSSProperties}
        />
        <div className="calc-range-labels">
          <span>7.5%</span>
          <span>14%</span>
        </div>
      </div>

      {/* Results */}
      <div className="emi-results">
        <div className="emi-monthly">
          <span className="emi-label">Monthly EMI</span>
          <span className="emi-amount">₹{emi.toLocaleString('en-IN')}</span>
        </div>
        <div className="emi-breakdown">
          <div className="emi-breakdown-item">
            <span className="emi-breakdown-label">Principal</span>
            <span className="emi-breakdown-val">₹{(principal / 100000).toFixed(1)}L</span>
            <div className="emi-bar-track">
              <div className="emi-bar-fill principal" style={{ width: `${(principal / totalPayment) * 100}%` }} />
            </div>
          </div>
          <div className="emi-breakdown-item">
            <span className="emi-breakdown-label">Interest</span>
            <span className="emi-breakdown-val accent-rust">₹{(totalInterest / 100000).toFixed(1)}L</span>
            <div className="emi-bar-track">
              <div className="emi-bar-fill interest" style={{ width: `${(totalInterest / totalPayment) * 100}%` }} />
            </div>
          </div>
          <div className="emi-breakdown-item total">
            <span className="emi-breakdown-label">Total Payment</span>
            <span className="emi-breakdown-val">₹{(totalPayment / 100000).toFixed(1)}L</span>
          </div>
        </div>
      </div>
    </div>
  )
}
