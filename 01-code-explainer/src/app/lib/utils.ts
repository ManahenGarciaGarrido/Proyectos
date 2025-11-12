import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function detectLanguage(code: string): string {
  // Simple language detection based on common patterns
  if (code.includes('import React') || code.includes('useState')) return 'javascript';
  if (code.includes('def ') && code.includes(':')) return 'python';
  if (code.includes('public class') || code.includes('public static void main')) return 'java';
  if (code.includes('func ') && code.includes('package main')) return 'go';
  if (code.includes('fn ') && code.includes('let mut')) return 'rust';
  if (code.includes('#include') || code.includes('std::')) return 'cpp';
  if (code.includes('const ') || code.includes('let ') || code.includes('var ')) return 'javascript';

  return 'text';
}

export function formatCode(code: string): string {
  return code.trim();
}
