import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'light', // Default theme
      toggleTheme: () =>
        set((state) => {
          const newTheme = state.theme === 'light' ? 'dark' : 'light';
          document.documentElement.classList.toggle('dark', newTheme === 'dark'); // Add/remove dark class
          return { theme: newTheme };
        }),
    }),
    {
      name: 'theme-storage', // Persist theme state in localStorage
    }
  )
);