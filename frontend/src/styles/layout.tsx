import type { Metadata } from 'next';

// These styles apply to every route in the application



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
