export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="rounded-lg p-2 bg-gray-50 border border-gray-200">
              <svg
                className="w-7 h-7 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">CryptoTracker Pro</h1>
              <p className="text-sm text-gray-500">Real-time Market Dashboard</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              Powered by CoinGecko
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
