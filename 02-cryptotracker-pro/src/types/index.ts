// Crypto data types from CoinGecko API
export interface Crypto {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  last_updated: string;
  sparkline_in_7d?: {
    price: number[];
  };
}

// Chart data point
export interface ChartDataPoint {
  timestamp: number;
  price: number;
  date: string;
}

// Portfolio holding
export interface PortfolioHolding {
  id: string;
  cryptoId: string;
  symbol: string;
  name: string;
  amount: number;
  purchasePrice: number;
  purchaseDate: string;
  image?: string;
}

// Alert
export interface PriceAlert {
  id: string;
  cryptoId: string;
  symbol: string;
  name: string;
  targetPrice: number;
  condition: 'above' | 'below';
  isActive: boolean;
  createdAt: string;
  triggeredAt?: string;
}

// Timeframe options for charts
export type Timeframe = '1' | '7' | '30' | '365';

// Sort options for crypto list
export type SortOption = 'market_cap' | 'price' | 'change_24h' | 'volume';
export type SortOrder = 'asc' | 'desc';
