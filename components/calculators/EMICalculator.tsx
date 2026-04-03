'use client'

import { useState, useEffect } from 'react'
import { Slider } from '@/components/ui/slider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress, ProgressIndicator, ProgressTrack } from '@/components/ui/progress'

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
  const ratePct = ((rate - 7.5) / (14 - 7.5)) * 100

  return (
    <div className="space-y-8" style={{ '--primary': '#C4622D' } as React.CSSProperties}>
      {/* Loan Amount Section */}
      <Card className="bg-bg-warm border-border shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-text text-lg font-semibold">Loan Amount</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-between items-center">
            <label className="text-text-muted font-medium">Loan Amount</label>
            <span className="text-text font-bold text-xl">₹{(principal / 100000).toFixed(1)}L</span>
          </div>
          <Slider
            min={500000}
            max={3000000}
            step={50000}
            value={[principal]}
            onValueChange={(vals) => setPrincipal(vals[0])}
            className="[&_[data-slot=slider-range]]:bg-accent-rust"
          />
          <div className="flex justify-between text-sm text-text-light">
            <span>₹5L</span>
            <span>₹30L</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {PRESET_AMOUNTS.map((p) => (
              <button
                key={p.value}
                className={`px-4 py-2 rounded-full border ${principal === p.value ? 'bg-accent-rust text-white border-accent-rust' : 'bg-surface border-border text-text-muted hover:border-accent-rust'}`}
                onClick={() => setPrincipal(p.value)}
              >
                {p.label}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Loan Tenure Section */}
      <Card className="bg-bg-warm border-border shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-text text-lg font-semibold">Loan Tenure</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-between items-center">
            <label className="text-text-muted font-medium">Loan Tenure</label>
            <span className="text-text font-bold text-xl">{tenureYears} year{tenureYears !== 1 ? 's' : ''}</span>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
            {TENURE_YEARS.map((y) => (
              <button
                key={y}
                className={`py-3 rounded-lg border ${tenureYears === y ? 'bg-accent-rust text-white border-accent-rust' : 'bg-surface border-border text-text-muted hover:border-accent-rust'}`}
                onClick={() => setTenureYears(y)}
              >
                {y}y
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Interest Rate Section */}
      <Card className="bg-bg-warm border-border shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-text text-lg font-semibold">Interest Rate (p.a.)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-between items-center">
            <label className="text-text-muted font-medium">Interest Rate (p.a.)</label>
            <span className="text-text font-bold text-xl">{rate.toFixed(1)}%</span>
          </div>
          <Slider
            min={7.5}
            max={14}
            step={0.1}
            value={[rate]}
            onValueChange={(vals) => setRate(vals[0])}
            className="[&_[data-slot=slider-range]]:bg-accent-rust"
          />
          <div className="flex justify-between text-sm text-text-light">
            <span>7.5%</span>
            <span>14%</span>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      <Card className="bg-bg-warm border-border shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-text text-lg font-semibold">EMI Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="text-center">
            <div className="text-text-muted text-sm">Monthly EMI</div>
            <div className="text-accent-rust text-4xl font-bold">₹{emi.toLocaleString('en-IN')}</div>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Principal</span>
                <span className="text-text font-semibold">₹{(principal / 100000).toFixed(1)}L</span>
              </div>
              <Progress value={(principal / totalPayment) * 100}>
                <ProgressTrack className="bg-border">
                  <ProgressIndicator className="bg-text" style={{ width: `${(principal / totalPayment) * 100}%` }} />
                </ProgressTrack>
              </Progress>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Interest</span>
                <span className="text-accent-rust font-semibold">₹{(totalInterest / 100000).toFixed(1)}L</span>
              </div>
              <Progress value={(totalInterest / totalPayment) * 100}>
                <ProgressTrack className="bg-border">
                  <ProgressIndicator className="bg-accent-rust" style={{ width: `${(totalInterest / totalPayment) * 100}%` }} />
                </ProgressTrack>
              </Progress>
            </div>
            <div className="pt-4 border-t border-border">
              <div className="flex justify-between text-lg font-bold">
                <span className="text-text">Total Payment</span>
                <span className="text-text">₹{(totalPayment / 100000).toFixed(1)}L</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}