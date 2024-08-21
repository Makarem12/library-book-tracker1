"use client";
import './globals.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import ThemeWrapper from './context/theme';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col dark:bg-black">
        <ThemeWrapper>
          <Header />
          <main className="flex-grow dark:bg-black">
            {children}
          </main>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
