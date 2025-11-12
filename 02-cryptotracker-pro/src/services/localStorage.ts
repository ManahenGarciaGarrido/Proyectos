import type { PortfolioHolding, PriceAlert } from '@/types';

const PORTFOLIO_KEY = 'cryptotracker_portfolio';
const ALERTS_KEY = 'cryptotracker_alerts';

// Portfolio management
export function getPortfolio(): PortfolioHolding[] {
  try {
    const data = localStorage.getItem(PORTFOLIO_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading portfolio from localStorage:', error);
    return [];
  }
}

export function savePortfolio(portfolio: PortfolioHolding[]): void {
  try {
    localStorage.setItem(PORTFOLIO_KEY, JSON.stringify(portfolio));
  } catch (error) {
    console.error('Error saving portfolio to localStorage:', error);
  }
}

export function addToPortfolio(holding: PortfolioHolding): void {
  const portfolio = getPortfolio();
  portfolio.push(holding);
  savePortfolio(portfolio);
}

export function removeFromPortfolio(id: string): void {
  const portfolio = getPortfolio();
  const filtered = portfolio.filter((h) => h.id !== id);
  savePortfolio(filtered);
}

export function updatePortfolioHolding(
  id: string,
  updates: Partial<PortfolioHolding>
): void {
  const portfolio = getPortfolio();
  const index = portfolio.findIndex((h) => h.id === id);
  if (index !== -1) {
    portfolio[index] = { ...portfolio[index], ...updates };
    savePortfolio(portfolio);
  }
}

// Alerts management
export function getAlerts(): PriceAlert[] {
  try {
    const data = localStorage.getItem(ALERTS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading alerts from localStorage:', error);
    return [];
  }
}

export function saveAlerts(alerts: PriceAlert[]): void {
  try {
    localStorage.setItem(ALERTS_KEY, JSON.stringify(alerts));
  } catch (error) {
    console.error('Error saving alerts to localStorage:', error);
  }
}

export function addAlert(alert: PriceAlert): void {
  const alerts = getAlerts();
  alerts.push(alert);
  saveAlerts(alerts);
}

export function removeAlert(id: string): void {
  const alerts = getAlerts();
  const filtered = alerts.filter((a) => a.id !== id);
  saveAlerts(filtered);
}

export function updateAlert(id: string, updates: Partial<PriceAlert>): void {
  const alerts = getAlerts();
  const index = alerts.findIndex((a) => a.id === id);
  if (index !== -1) {
    alerts[index] = { ...alerts[index], ...updates };
    saveAlerts(alerts);
  }
}
