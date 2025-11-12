import type { Crypto } from '@/types';
import { formatCurrency, formatPercentage, formatCompactNumber, formatNumber, formatDate } from '@/utils/formatters';
import PriceChart from './charts/PriceChart';
import clsx from 'clsx';

interface CryptoDetailProps {
  crypto: Crypto;
  onClose: () => void;
}

export default function CryptoDetail({ crypto, onClose }: CryptoDetailProps) {
  const isPositive = crypto.price_change_percentage_24h >= 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={crypto.image}
              alt={crypto.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">{crypto.name}</h2>
              <p className="text-sm text-gray-500">{crypto.symbol.toUpperCase()}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Price Section */}
          <div className="mb-8">
            <div className="flex items-end space-x-4 mb-2">
              <h3 className="text-4xl font-bold text-gray-900">
                {formatCurrency(crypto.current_price)}
              </h3>
              <span
                className={clsx(
                  'text-xl font-semibold',
                  isPositive ? 'text-green-600' : 'text-red-600'
                )}
              >
                {formatPercentage(crypto.price_change_percentage_24h)}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Rank #{crypto.market_cap_rank}
            </p>
          </div>

          {/* Chart */}
          <div className="mb-8">
            <PriceChart cryptoId={crypto.id} />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Market Cap</p>
              <p className="text-xl font-semibold text-gray-900">
                {formatCompactNumber(crypto.market_cap)}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">24h Volume</p>
              <p className="text-xl font-semibold text-gray-900">
                {formatCompactNumber(crypto.total_volume)}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Circulating Supply</p>
              <p className="text-xl font-semibold text-gray-900">
                {formatNumber(crypto.circulating_supply, 0)}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">24h High</p>
              <p className="text-xl font-semibold text-gray-900">
                {formatCurrency(crypto.high_24h)}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">24h Low</p>
              <p className="text-xl font-semibold text-gray-900">
                {formatCurrency(crypto.low_24h)}
              </p>
            </div>

            {crypto.total_supply && (
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-1">Total Supply</p>
                <p className="text-xl font-semibold text-gray-900">
                  {formatNumber(crypto.total_supply, 0)}
                </p>
              </div>
            )}

            {crypto.max_supply && (
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-1">Max Supply</p>
                <p className="text-xl font-semibold text-gray-900">
                  {formatNumber(crypto.max_supply, 0)}
                </p>
              </div>
            )}

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">All-Time High</p>
              <p className="text-xl font-semibold text-gray-900">
                {formatCurrency(crypto.ath)}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {formatDate(crypto.ath_date)}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">All-Time Low</p>
              <p className="text-xl font-semibold text-gray-900">
                {formatCurrency(crypto.atl)}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {formatDate(crypto.atl_date)}
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Additional Information</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Market Cap Change 24h:</span>
                <span
                  className={clsx(
                    'ml-2 font-medium',
                    crypto.market_cap_change_percentage_24h >= 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  )}
                >
                  {formatPercentage(crypto.market_cap_change_percentage_24h)}
                </span>
              </div>
              <div>
                <span className="text-gray-500">ATH Change:</span>
                <span className="ml-2 font-medium text-red-600">
                  {formatPercentage(crypto.ath_change_percentage)}
                </span>
              </div>
              <div>
                <span className="text-gray-500">ATL Change:</span>
                <span className="ml-2 font-medium text-green-600">
                  {formatPercentage(crypto.atl_change_percentage)}
                </span>
              </div>
              {crypto.fully_diluted_valuation && (
                <div>
                  <span className="text-gray-500">Fully Diluted Valuation:</span>
                  <span className="ml-2 font-medium text-gray-900">
                    {formatCompactNumber(crypto.fully_diluted_valuation)}
                  </span>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Last updated: {formatDate(crypto.last_updated)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}