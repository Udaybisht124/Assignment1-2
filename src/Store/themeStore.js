import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Creates and exports a Zustand store for theme state management with persistence.
 * @type {Object}
 * @property {string} theme - The current theme ('light' or 'dark').
 * @property {Function} toggleTheme - Toggles between light and dark themes.
 */
export const useThemeStore = create(
  persist(
    (set) => ({
      /**
       * The initial theme state.
       * @type {string}
       */
      theme: 'light',

      /**
       * Toggles the theme between light and dark modes.
       * Updates the document's class list and persists the new theme.
       */
      toggleTheme: () =>
        set((state) => {
          /**
           * The new theme based on the current state.
           * @type {string}
           */
          const newTheme = state.theme === 'light' ? 'dark' : 'light';
          document.documentElement.classList.toggle('dark', newTheme === 'dark');
          return { theme: newTheme };
        }),
      }
    ),
    {
      /**
       * The key used for persisting the theme state in localStorage.
       * @type {string}
       */
      name: 'theme-storage',
    }
  )
);