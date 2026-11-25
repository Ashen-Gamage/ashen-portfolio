import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ashen Gamage | Data Science & Software Portfolio',
  description: 'Projects and experience of Ashen Gamage, a data science undergraduate and software builder in Sri Lanka.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
