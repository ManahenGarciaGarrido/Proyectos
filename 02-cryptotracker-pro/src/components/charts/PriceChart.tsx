import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { Timeframe } from '@/types';
import { useCryptoChart } from '@/hooks/useCryptoData';
import { formatCurrency } from '@/utils/formatters';
import clsx from 'clsx';

interface PriceChartProps {
  cryptoId: string;
}

const TIMEFRAMES: { value: Timeframe; label: string }[] = [
  { value: '1', label: '24H' },
  { value: '7', label: '7D' },
  { value: '30', label: '30D' },
  { value: '365', label: '1Y' },
];

export default function PriceChart({ cryptoId }: PriceChartProps) {
  const [timeframe, setTimeframe] = useState<Timeframe>('7');
  const { data: chartData = [], isLoading } = useCryptoChart(cryptoId, timeframe);

  if (isLoading) {
    return (
      <div className="w-full h-96 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
        <p className="text-gray-500">Loading chart...</p>
      </div>
    );
  }

  if (chartData.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-50 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No chart data available</p>
      </div>
    );
  }

  const firstPrice = chartData[0]?.price || 0;
  const lastPrice = chartData[chartData.length - 1]?.price || 0;
  const isPositive = lastPrice >= firstPrice;

  return (
    <div className="w-full">
      {/* Timeframe Selector */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Price Chart</h3>
        <div className="flex space-x-2">
          {TIMEFRAMES.map((tf) => (
            <button
              key={tf.value}
              onClick={() => setTimeframe(tf.value)}
              className={clsx(
                'px-3 py-1 rounded-lg text-sm font-medium transition-colors',
                timeframe === tf.value
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
            >
              {tf.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-96 bg-white border border-gray-200 rounded-lg p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="date"
              stroke="#6b7280"
              style={{ fontSize: '12px' }}
              tickMargin={10}
            />
            <YAxis
              stroke="#6b7280"
              style={{ fontSize: '12px' }}
              tickFormatter={(value) => formatCurrency(value, 0)}
              width={80}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '12px',
              }}
              labelStyle={{ color: '#374151', fontWeight: 600 }}
              formatter={(value: number) => [formatCurrency(value), 'Price']}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke={isPositive ? '#16a34a' : '#dc2626'}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
