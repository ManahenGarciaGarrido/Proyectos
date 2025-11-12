import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CodeExplainer - AI-Powered Code Analysis',
  description: 'Understand any code instantly with AI-powered explanations using Google Gemini',
  keywords: ['code', 'explanation', 'AI', 'Gemini', 'programming', 'learning'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
