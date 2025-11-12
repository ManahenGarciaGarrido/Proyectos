import type { Crypto } from '@/types';
import { formatCurrency, formatPercentage, formatCompactNumber } from '@/utils/formatters';
import clsx from 'clsx';

interface CryptoCardProps {
  crypto: Crypto;
  onClick?: () => void;
}

export default function CryptoCard({ crypto, onClick }: CryptoCardProps) {
  const isPositive = crypto.price_change_percentage_24h >= 0;

  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-colors cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <img
            src={crypto.image}
            alt={crypto.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{crypto.name}</h3>
            <p className="text-sm text-gray-500">{crypto.symbol.toUpperCase()}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-semibold text-gray-900">{formatCurrency(crypto.current_price)}</p>
          <p
            className={clsx(
              'text-sm font-medium',
              isPositive ? 'text-green-600' : 'text-red-600'
            )}
          >
            {formatPercentage(crypto.price_change_percentage_24h)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-gray-500">Market Cap</p>
          <p className="font-medium text-gray-900">{formatCompactNumber(crypto.market_cap)}</p>
        </div>
        <div>
          <p className="text-gray-500">Volume 24h</p>
          <p className="font-medium text-gray-900">{formatCompactNumber(crypto.total_volume)}</p>
        </div>
      </div>

      {crypto.sparkline_in_7d && (
        <div className="mt-3">
          <svg className="w-full h-12" viewBox="0 0 164 48" preserveAspectRatio="none">
            <polyline
              fill="none"
              stroke={isPositive ? '#16a34a' : '#dc2626'}
              strokeWidth="2"
              points={crypto.sparkline_in_7d.price
                .map((price, i) => {
                  const x = (i / crypto.sparkline_in_7d!.price.length) * 164;
                  const minPrice = Math.min(...crypto.sparkline_in_7d!.price);
                  const maxPrice = Math.max(...crypto.sparkline_in_7d!.price);
                  const y = 48 - ((price - minPrice) / (maxPrice - minPrice)) * 48;
                  return `${x},${y}`;
                })
                .join(' ')}
            />
          </svg>
        </div>
      )}
    </div>
  );
}
