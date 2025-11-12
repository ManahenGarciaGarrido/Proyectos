import type { Crypto } from '@/types';
import CryptoCard from './CryptoCard';

interface CryptoListProps {
  cryptos: Crypto[];
  isLoading?: boolean;
  onCryptoClick?: (crypto: Crypto) => void;
}

export default function CryptoList({ cryptos, isLoading, onCryptoClick }: CryptoListProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-lg p-4 animate-pulse"
          >
            <div className="h-20 bg-gray-200 rounded mb-3"></div>
            <div className="h-16 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (cryptos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No cryptocurrencies found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cryptos.map((crypto) => (
        <CryptoCard
          key={crypto.id}
          crypto={crypto}
          onClick={() => onCryptoClick?.(crypto)}
        />
      ))}
    </div>
  );
}
