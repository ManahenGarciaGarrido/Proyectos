import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CryptoList from './components/CryptoList';
import CryptoDetail from './components/CryptoDetail';
import { useCryptoList } from './hooks/useCryptoData';
import type { Crypto } from './types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function CryptoTrackerApp() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState<Crypto | null>(null);
  const { data: cryptos = [], isLoading, error } = useCryptoList(50);

  // Filter cryptos by search query
  const filteredCryptos = cryptos.filter((crypto) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      crypto.name.toLowerCase().includes(query) ||
      crypto.symbol.toLowerCase().includes(query)
    );
  });

  const handleCryptoClick = (crypto: Crypto) => {
    setSelectedCrypto(crypto);
  };

  const handleCloseDetail = () => {
    setSelectedCrypto(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Top Cryptocurrencies
          </h2>
          <SearchBar onSearch={setSearchQuery} />
        </div>

        {/* Error State */}
        {error && (
          <div className="max-w-2xl mx-auto mb-8 bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800">
              Failed to load cryptocurrency data. Please try again later.
            </p>
          </div>
        )}

        {/* Crypto List */}
        <CryptoList
          cryptos={filteredCryptos}
          isLoading={isLoading}
          onCryptoClick={handleCryptoClick}
        />

        {/* Stats Footer */}
        {!isLoading && cryptos.length > 0 && (
          <div className="mt-12 text-center text-sm text-gray-500">
            <p>Showing {filteredCryptos.length} of {cryptos.length} cryptocurrencies</p>
            <p className="mt-2">Data updates every minute</p>
          </div>
        )}
      </main>

      {/* Crypto Detail Modal */}
      {selectedCrypto && (
        <CryptoDetail crypto={selectedCrypto} onClose={handleCloseDetail} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CryptoTrackerApp />
    </QueryClientProvider>
  );
}
