'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

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
  if (!higherBetter) score = 10 - score
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Weights Panel */}
      <Card className="bg-bg-warm border-border shadow-md">
        <CardHeader>
          <CardTitle className="text-text text-lg font-semibold">Adjust Your Priorities</CardTitle>
          <p className="text-text-muted text-sm mt-1">
            Drag the weights to match what matters to you. Higher = more important.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {CRITERIA.map((c) => (
            <div key={c.key} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-text font-medium">{c.label}</span>
                <span className="text-accent-rust font-bold">{weights[c.key]}/10</span>
              </div>
              <Slider
                min={0}
                max={10}
                step={1}
                value={[weights[c.key]]}
                onValueChange={(vals) => setWeights({ ...weights, [c.key]: vals[0] })}
                className="[&_[data-slot=slider-range]]:bg-accent-rust"
              />
            </div>
          ))}
          <div className="pt-4 border-t border-border text-text-muted text-sm">
            Total weight: <span className="font-bold">{totalWeight}</span> points
          </div>
        </CardContent>
      </Card>

      {/* Rankings Panel */}
      <Card className="bg-bg-warm border-border shadow-md">
        <CardHeader>
          <CardTitle className="text-text text-lg font-semibold">Rankings by Weighted Score</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {ranked.map((car, i) => (
            <div
              key={car.id}
              className={cn(
                'flex items-center gap-4 p-4 rounded-lg border',
                i === 0
                  ? 'border-accent-rust bg-surface'
                  : 'border-border bg-surface'
              )}
            >
              <div className="flex-shrink-0">
                <Badge
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center text-white font-bold',
                    i === 0 ? 'bg-yellow-500' : i === 1 ? 'bg-gray-400' : i === 2 ? 'bg-amber-700' : 'bg-border text-text-muted'
                  )}
                >
                  #{i + 1}
                </Badge>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-text truncate">{car.name}</div>
                <div className="text-sm text-text-muted mt-1">
                  ₹{car.price}L · {car.boot}L boot · {car.efficiency} km/L · {car.power} bhp · {car.bancap}-star
                </div>
                <div className="mt-3 flex items-end gap-1 h-6">
                  {CRITERIA.map((c) => (
                    <div
                      key={c.key}
                      className="flex-1 bg-border rounded-t-sm"
                      title={`${c.label}: ${car.breakdown[c.key]}`}
                    >
                      <div
                        className="bg-accent-rust rounded-t-sm transition-all"
                        style={{
                          height: `${(car.breakdown[c.key] / 3) * 100}%`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 text-right">
                <div className="text-2xl font-bold text-text">{car.totalScore}</div>
                <div className="text-sm text-text-light">/10</div>
              </div>
            </div>
          ))}
          <p className="text-sm text-text-light italic mt-6">
            * Scores normalized 0–10 per criterion. Weights applied as proportions of total. Price inverted (lower price = higher score).
          </p>
        </CardContent>
      </Card>
    </div>
  )
}