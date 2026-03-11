import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sergeev Consulting | Сергеев Консалтинг — Профессиональный AI Консалтинг',
  description: 'Sergeev Consulting помогает организациям использовать возможности искусственного интеллекта для инноваций и роста.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">{children}</body>
    </html>
  );
}
