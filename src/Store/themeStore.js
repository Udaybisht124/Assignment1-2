// Import Zustand's create function for state management
import { create } from 'zustand';
// Import persist middleware for state persistence
import { persist } from 'zustand/middleware';

// Create and export theme store with persistence
export const useThemeStore = create(
  // Wrap store with persist middleware to save theme preference
  persist(
    // Store factory function that receives set function
    (set) => ({
      // Initial theme state set to light mode
      theme: 'light', // Default theme
      // Function to toggle between light and dark themes
      toggleTheme: () =>
        // Update state using set function with state parameter
        set((state) => {
          // Determine new theme by toggling current theme
          const newTheme = state.theme === 'light' ? 'dark' : 'light';
          // Apply theme to document by toggling 'dark' class on html element
          document.documentElement.classList.toggle('dark', newTheme === 'dark'); // Add/remove dark class
          // Return new state with updated theme
          return { theme: newTheme };
        }),
    }),
    // Persistence configuration object
    {
      // Key name for localStorage to persist theme state
      name: 'theme-storage', // Persist theme state in localStorage
    }
  )
);