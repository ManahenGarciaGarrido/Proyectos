import { useQuery } from '@tanstack/react-query';
import { getCryptoList, getCryptoChartData, getCryptoDetails } from '@/services/coingecko';
import type { Timeframe } from '@/types';

/**
 * Hook to fetch list of cryptocurrencies
 */
export function useCryptoList(limit = 100, page = 1) {
  return useQuery({
    queryKey: ['crypto-list', limit, page],
    queryFn: () => getCryptoList(limit, page),
    staleTime: 60000, // 1 minute
    refetchInterval: 60000, // Auto-refetch every 1 minute
  });
}

/**
 * Hook to fetch details for a specific cryptocurrency
 */
export function useCryptoDetails(id: string) {
  return useQuery({
    queryKey: ['crypto-details', id],
    queryFn: () => getCryptoDetails(id),
    enabled: !!id,
    staleTime: 30000, // 30 seconds
  });
}

/**
 * Hook to fetch chart data for a cryptocurrency
 */
export function useCryptoChart(id: string, timeframe: Timeframe) {
  const days = parseInt(timeframe);

  return useQuery({
    queryKey: ['crypto-chart', id, timeframe],
    queryFn: () => getCryptoChartData(id, days),
    enabled: !!id,
    staleTime: 60000, // 1 minute
  });
}
