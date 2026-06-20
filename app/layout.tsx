
import type { Metadata } from 'next';
// @ts-ignore
import './globals.css';

export const metadata: Metadata = {
  title: 'Premium Portfolio | Front-End Developer',
  description: 'Modern developer portfolio with projects, skills, and contact.',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: 'Premium Portfolio | Front-End Developer',
    description: 'Modern developer portfolio with projects, skills, and contact.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
