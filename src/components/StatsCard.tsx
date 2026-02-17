import { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string
  icon: LucideIcon
  color: string
  bgColor: string
}

export function StatsCard({ title, value, icon: Icon, color, bgColor }: StatsCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
      </div>
    </div>
  )
}
