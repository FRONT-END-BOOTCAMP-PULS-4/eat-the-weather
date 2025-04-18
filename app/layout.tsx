import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from './components/NavBar';

export const metadata: Metadata = {
  title: 'Eat The Weather',
  description: '날씨를 잇다, 잇더웨더',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gradient-to-b from-sky-100 to-white min-h-screen flex flex-col items-center pt-[env(safe-area-inset-top)]">
        <div className="w-full max-w-md bg-white min-h-screen shadow-md relative z-10 ">
          {children}
        </div>
        <Navbar />
      </body>
    </html>
  );
}