import { useState, useEffect } from 'react';
import type { PriceAlert, Crypto } from '@/types';
import * as storage from '@/services/localStorage';

/**
 * Hook to manage price alerts with localStorage persistence
 */
export function useAlerts(cryptoList: Crypto[] = []) {
  const [alerts, setAlerts] = useState<PriceAlert[]>([]);

  // Load alerts from localStorage on mount
  useEffect(() => {
    const savedAlerts = storage.getAlerts();
    setAlerts(savedAlerts);
  }, []);

  // Check alerts against current prices
  useEffect(() => {
    if (cryptoList.length === 0 || alerts.length === 0) return;

    alerts.forEach((alert) => {
      if (!alert.isActive || alert.triggeredAt) return;

      const crypto = cryptoList.find((c) => c.id === alert.cryptoId);
      if (!crypto) return;

      const shouldTrigger =
        (alert.condition === 'above' && crypto.current_price >= alert.targetPrice) ||
        (alert.condition === 'below' && crypto.current_price <= alert.targetPrice);

      if (shouldTrigger) {
        // Trigger notification
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('Price Alert Triggered!', {
            body: `${alert.name} is now ${alert.condition} $${alert.targetPrice}`,
            icon: '/icons/crypto.png',
          });
        }

        // Update alert as triggered
        storage.updateAlert(alert.id, {
          triggeredAt: new Date().toISOString(),
          isActive: false,
        });
        setAlerts(storage.getAlerts());
      }
    });
  }, [cryptoList, alerts]);

  // Add new alert
  const addAlert = (alert: PriceAlert) => {
    storage.addAlert(alert);
    setAlerts(storage.getAlerts());
  };

  // Remove alert
  const removeAlert = (id: string) => {
    storage.removeAlert(id);
    setAlerts(storage.getAlerts());
  };

  // Update alert
  const updateAlert = (id: string, updates: Partial<PriceAlert>) => {
    storage.updateAlert(id, updates);
    setAlerts(storage.getAlerts());
  };

  // Request notification permission
  const requestNotificationPermission = async () => {
    if ('Notification' in window && Notification.permission === 'default') {
      await Notification.requestPermission();
    }
  };

  return {
    alerts,
    addAlert,
    removeAlert,
    updateAlert,
    requestNotificationPermission,
  };
}
