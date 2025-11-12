import { useState, useEffect } from 'react';
import type { PortfolioHolding } from '@/types';
import * as storage from '@/services/localStorage';

/**
 * Hook to manage portfolio holdings with localStorage persistence
 */
export function usePortfolio() {
  const [holdings, setHoldings] = useState<PortfolioHolding[]>([]);

  // Load portfolio from localStorage on mount
  useEffect(() => {
    const portfolio = storage.getPortfolio();
    setHoldings(portfolio);
  }, []);

  // Add new holding to portfolio
  const addHolding = (holding: PortfolioHolding) => {
    storage.addToPortfolio(holding);
    setHoldings(storage.getPortfolio());
  };

  // Remove holding from portfolio
  const removeHolding = (id: string) => {
    storage.removeFromPortfolio(id);
    setHoldings(storage.getPortfolio());
  };

  // Update existing holding
  const updateHolding = (id: string, updates: Partial<PortfolioHolding>) => {
    storage.updatePortfolioHolding(id, updates);
    setHoldings(storage.getPortfolio());
  };

  return {
    holdings,
    addHolding,
    removeHolding,
    updateHolding,
  };
}
