'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const CARS = [
  { name: 'Kia Seltos 2026 HTK+', fuel: 'Petrol', efficiency: 16.8, tank: 50 },
  { name: 'Kia Seltos 2026 GTX', fuel: 'Petrol', efficiency: 15.8, tank: 50 },
  { name: 'Hyundai Creta', fuel: 'Petrol', efficiency: 17.4, tank: 50 },
  { name: 'Maruti XL6 Alpha CNG', fuel: 'CNG', efficiency: 26.6, tank: 11 },
  { name: 'Kia Carens', fuel: 'Diesel', efficiency: 18.2, tank: 45 },
  { name: 'Mahindra XUV700', fuel: 'Diesel', efficiency: 13.0, tank: 60 },
  { name: 'Toyota Innova Hycross', fuel: 'Hybrid', efficiency: 23.0, tank: 45 },
  { name: 'Tata Sierra ICE', fuel: 'Petrol', efficiency: 17.5, tank: 55 },
  { name: 'Tata Harrier ICE', fuel: 'Diesel', efficiency: 16.0, tank: 50 },
  { name: 'Tata Harrier EV', fuel: 'Electric', efficiency: 6.5, tank: 75 },
  { name: 'Renault Duster', fuel: 'Petrol', efficiency: 16.0, tank: 50 },
]

const FUEL_PRICES: Record<string, number> = {
  Petrol: 108.5,
  Diesel: 93.5,
  CNG: 82.0,
  Hybrid: 108.5,
  Electric: 9.5,
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
    <div className="space-y-8" style={{ '--primary': '#C4622D' } as React.CSSProperties}>
      {/* Controls Card */}
      <Card className="bg-bg-warm border-border shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-text text-lg font-semibold">Fuel Cost Comparator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Monthly Driving Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-text-muted font-medium">Monthly Driving</label>
              <span className="text-text font-bold text-xl">{monthlyKm.toLocaleString('en-IN')} km</span>
            </div>
            <Slider
              min={200}
              max={5000}
              step={50}
              value={[monthlyKm]}
              onValueChange={(vals) => setMonthlyKm(vals[0])}
              className="[&_[data-slot=slider-range]]:bg-accent-rust"
            />
            <div className="flex justify-between text-sm text-text-light">
              <span>200 km</span>
              <span>5,000 km</span>
            </div>
          </div>

          {/* Fuel Type Filter */}
          <div className="space-y-4">
            <label className="text-text-muted font-medium block">Fuel Type</label>
            <div className="flex flex-wrap gap-2">
              {(['All', 'Petrol', 'Diesel', 'CNG', 'Hybrid', 'Electric'] as FuelType[]).map((f) => (
                <button
                  key={f}
                  className={`px-4 py-2 rounded-full border ${fuelFilter === f ? 'bg-accent-rust text-white border-accent-rust' : 'bg-surface border-border text-text-muted hover:border-accent-rust'}`}
                  onClick={() => setFuelFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Toggle Monthly/Per km */}
          <div className="space-y-4">
            <label className="text-text-muted font-medium block">View Mode</label>
            <Tabs defaultValue="monthly" className="w-full">
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="monthly" onClick={() => setShowPerKm(false)}>
                  Monthly Cost
                </TabsTrigger>
                <TabsTrigger value="perkm" onClick={() => setShowPerKm(true)}>
                  Per km
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      {/* Ranking Card */}
      <Card className="bg-bg-warm border-border shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-text text-lg font-semibold">Ranking by Fuel Cost</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {rows.map((car, i) => {
            const display = showPerKm
              ? `₹${(car.costPerMonth / monthlyKm).toFixed(2)}/km`
              : `₹${Math.round(car.costPerMonth).toLocaleString('en-IN')}/mo`
            const barWidth = cheapest ? ((car.costPerMonth / cheapest.costPerMonth) * 100) : 100

            return (
              <div key={car.name} className={`flex items-center gap-4 p-4 rounded-lg border ${i === 0 ? 'border-accent-rust bg-surface' : 'border-border'}`}>
                <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full ${i === 0 ? 'bg-accent-rust text-white' : 'bg-border text-text-muted'}`}>
                  #{i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-text truncate">{car.name}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge
                      className="text-white font-medium border-0"
                      style={{ backgroundColor: FUEL_COLORS[car.fuel] || '#666' }}
                    >
                      {car.fuel}
                    </Badge>
                    <span className="text-sm text-text-muted">
                      {car.efficiency} {car.fuel === 'Electric' ? 'km/kWh' : car.fuel === 'CNG' ? 'km/kg' : 'km/L'}
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="relative h-2 bg-border rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full rounded-full"
                        style={{
                          width: `${barWidth}%`,
                          backgroundColor: i === 0 ? '#1A8A5C' : FUEL_COLORS[car.fuel] || '#C4622D',
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 text-right">
                  <div className="text-xl font-bold text-text">{display}</div>
                  <div className="text-sm text-text-light">annual ₹{Math.round(car.annual).toLocaleString('en-IN')}</div>
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      <p className="text-sm text-text-muted italic">
        * Based on current fuel prices: Petrol ₹108.5/L · Diesel ₹93.5/L · CNG ₹82/kg · EV ₹9.5/kWh (home charging)
      </p>
    </div>
  )
}