"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import DarkModeToggle from '@/components/DarkModeToggle';
import Footer from './Footer';
import ThemeToggle from '@/components/ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="w-full bg-transparent py-4">
        <ThemeToggle />
        <div className="max-w-7xl mx-auto px-4 items-center relative min-h-[48px] hidden md:flex">
          <nav className="absolute left-1/2 -translate-x-1/2 gap-10 text-sm flex">
            <span className="opacity-60 cursor-pointer flex relative group">About <span className="ml-1"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1" xmlns="http://www.w3.org/2000/svg"><path d="M4 6L8 10L12 6" stroke="#01C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span></span>
            <span className="cursor-pointer font-semibold">FAQ</span>
            <span className="opacity-60 cursor-pointer flex relative group">Trader's Library <span className="ml-1"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1" xmlns="http://www.w3.org/2000/svg"><path d="M4 6L8 10L12 6" stroke="#01C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span></span>
            <span className="opacity-60 cursor-pointer">Affiliate</span>
            <span className="opacity-60 cursor-pointer">LeaderBoard</span>
          </nav>
          <div className="flex items-center gap-2 ml-auto">
            <div className="relative rounded-md p-[3px] bg-gradient-to-r from-[#7F5FFF] to-[#01C8FF]">
              <button
                className="font-bold text-white text-sm px-2 py-1 bg-[#181a2a] rounded-md cursor-pointer"
                style={{ boxShadow: '0 0 0 1.5px #23244a' }}
              >
                Trading Place
              </button>
            </div>
            <span className="flex items-center px-2 py-1 rounded-lg bg-transparent border-none">
              <Image src="https://flagcdn.com/24x18/gb.png" alt="English" width={28} height={20} className="inline-block rounded-sm border border-white/30" />
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#01C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>
        <div className="flex md:hidden flex-row-reverse items-center gap-3 px-4 max-w-7xl mx-auto">
          <div className="rounded-xl p-[3px] bg-gradient-to-r from-[#7F5FFF] to-[#01C8FF]">
            <button
              className="flex items-center justify-center w-10 h-10 bg-[#181a2a] rounded-xl"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
          <span className="flex items-center px-2 py-1 rounded-lg bg-transparent border-none">
            <Image src="https://flagcdn.com/24x18/gb.png" alt="English" width={28} height={20} className="inline-block rounded-sm border border-white/30" />
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="#01C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <div className="relative rounded-xl p-[3px] bg-gradient-to-r from-[#7F5FFF] to-[#01C8FF]">
            <button
              className="font-bold text-white text-sm px-3 py-2 bg-[#181a2a] rounded-xl cursor-pointer"
              style={{ boxShadow: '0 0 0 1.5px #23244a' }}
            >
              Trading Place
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="absolute top-20 right-4 w-56 bg-[#181a2a] rounded-xl shadow-lg border border-[#23244a] z-50 flex flex-col gap-2 p-4 md:hidden animate-fade-in">
            <span className="opacity-60 cursor-pointer py-2 px-2 rounded hover:bg-[#23244a] transition">About <span className="ml-1"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1" xmlns="http://www.w3.org/2000/svg"><path d="M4 6L8 10L12 6" stroke="#01C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span></span>
            <span className="opacity-60 cursor-pointer font-semibold py-2 px-2 rounded hover:bg-[#23244a] transition">FAQ</span>
            <span className="opacity-60 cursor-pointer py-2 px-2 rounded hover:bg-[#23244a] transition">Trader's Library <span className="ml-1"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1" xmlns="http://www.w3.org/2000/svg"><path d="M4 6L8 10L12 6" stroke="#01C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span></span>
            <span className="opacity-60 cursor-pointer py-2 px-2 rounded hover:bg-[#23244a] transition">Affiliate</span>
            <span className="opacity-60 cursor-pointer py-2 px-2 rounded hover:bg-[#23244a] transition">LeaderBoard</span>
          </div>
        )}
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 