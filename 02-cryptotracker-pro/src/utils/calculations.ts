import type { PortfolioHolding } from '@/types';

/**
 * Calculate profit/loss for a portfolio holding
 */
export function calculateProfitLoss(
  currentPrice: number,
  purchasePrice: number,
  amount: number
): {
  profitLoss: number;
  profitLossPercentage: number;
} {
  const currentValue = currentPrice * amount;
  const purchaseValue = purchasePrice * amount;
  const profitLoss = currentValue - purchaseValue;
  const profitLossPercentage =
    ((currentPrice - purchasePrice) / purchasePrice) * 100;

  return {
    profitLoss,
    profitLossPercentage,
  };
}

/**
 * Calculate total portfolio value
 */
export function calculatePortfolioValue(
  holdings: PortfolioHolding[],
  currentPrices: Record<string, number>
): {
  totalValue: number;
  totalProfitLoss: number;
  totalProfitLossPercentage: number;
} {
  let totalCurrentValue = 0;
  let totalPurchaseValue = 0;

  holdings.forEach((holding) => {
    const currentPrice = currentPrices[holding.cryptoId] || 0;
    totalCurrentValue += currentPrice * holding.amount;
    totalPurchaseValue += holding.purchasePrice * holding.amount;
  });

  const totalProfitLoss = totalCurrentValue - totalPurchaseValue;
  const totalProfitLossPercentage =
    totalPurchaseValue > 0
      ? (totalProfitLoss / totalPurchaseValue) * 100
      : 0;

  return {
    totalValue: totalCurrentValue,
    totalProfitLoss,
    totalProfitLossPercentage,
  };
}

/**
 * Calculate portfolio distribution by asset
 */
export function calculatePortfolioDistribution(
  holdings: PortfolioHolding[],
  currentPrices: Record<string, number>
): Array<{ name: string; value: number; percentage: number }> {
  const { totalValue } = calculatePortfolioValue(holdings, currentPrices);

  if (totalValue === 0) return [];

  return holdings.map((holding) => {
    const currentPrice = currentPrices[holding.cryptoId] || 0;
    const value = currentPrice * holding.amount;
    const percentage = (value / totalValue) * 100;

    return {
      name: holding.symbol.toUpperCase(),
      value,
      percentage,
    };
  });
}
