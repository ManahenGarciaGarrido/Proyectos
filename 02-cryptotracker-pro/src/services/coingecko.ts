import axios from 'axios';
import type { Crypto, ChartDataPoint } from '@/types';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

/**
 * Get list of cryptocurrencies with market data
 * @param limit - Number of items to fetch (default: 100)
 * @param page - Page number (default: 1)
 */
export async function getCryptoList(limit = 100, page = 1): Promise<Crypto[]> {
  try {
    const response = await api.get<Crypto[]>('/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: limit,
        page,
        sparkline: true,
        price_change_percentage: '24h',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto list:', error);
    throw new Error('Failed to fetch cryptocurrency data');
  }
}

/**
 * Get detailed data for a specific cryptocurrency
 * @param id - Cryptocurrency ID (e.g., 'bitcoin', 'ethereum')
 */
export async function getCryptoDetails(id: string): Promise<Crypto> {
  try {
    const response = await api.get<Crypto>(`/coins/markets`, {
      params: {
        vs_currency: 'usd',
        ids: id,
        sparkline: true,
      },
    });
    return response.data[0];
  } catch (error) {
    console.error(`Error fetching details for ${id}:`, error);
    throw new Error('Failed to fetch cryptocurrency details');
  }
}

/**
 * Get historical market data for a cryptocurrency
 * @param id - Cryptocurrency ID
 * @param days - Number of days (1, 7, 30, 365)
 */
export async function getCryptoChartData(
  id: string,
  days: number
): Promise<ChartDataPoint[]> {
  try {
    const response = await api.get(`/coins/${id}/market_chart`, {
      params: {
        vs_currency: 'usd',
        days,
      },
    });

    // Transform API response to our format
    const prices = response.data.prices as [number, number][];
    return prices.map(([timestamp, price]) => ({
      timestamp,
      price,
      date: new Date(timestamp).toLocaleDateString(),
    }));
  } catch (error) {
    console.error(`Error fetching chart data for ${id}:`, error);
    throw new Error('Failed to fetch chart data');
  }
}

/**
 * Search cryptocurrencies by query
 * @param query - Search query
 */
export async function searchCrypto(query: string) {
  try {
    const response = await api.get('/search', {
      params: { query },
    });
    return response.data.coins || [];
  } catch (error) {
    console.error('Error searching cryptocurrencies:', error);
    throw new Error('Failed to search cryptocurrencies');
  }
}
