"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { setTheme } from '@/store/themeSlice';

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setMounted(true);
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme) {
      dispatch(setTheme(theme === 'dark'));
    }
  }, [dispatch]);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="light"
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  );
}
