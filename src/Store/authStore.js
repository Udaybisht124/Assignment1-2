import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      userInfo: null,
      token: null,

      login: async (credentials) => {
        try {
          const { email, password } = credentials;
          if (!email || !password) {
            throw new Error('Please fill all fields');
          }

          // Get users from localStorage
          const users = JSON.parse(localStorage.getItem('users') || '[]');
          const user = users.find((u) => u.email === email);

          if (!user) {
            throw new Error('User not found');
          }
          if (user.password !== password) {
            throw new Error('Incorrect');
          }

          const token = `mock-jwt-${user.id}`;
          set({
            isLoggedIn: true,
            userInfo: { id: user.id, username: user.username, email: user.email },
            token,
          });
          return { success: true };
        } catch (error) {
          console.error('Login error:', error);
          return { success: false, error: error.message };
        }
      },

      signup: async (userData) => {
        try {
          const { username, email, password } = userData;
          if (!username || !email || !password) {
            throw new Error('Please fill all fields');
          }

          // Always reload users from localStorage to get the latest data
          let users = JSON.parse(localStorage.getItem('users') || '[]');
          console.log('Current users in localStorage:', users);

          // Check if user exists
          if (users.some((u) => u.email === email)) {
            throw new Error('Email already registered');
          }

          // Create new user
          const newUser = {
            id: Date.now(),
            username,
            email,
            password,
          };
          users.push(newUser);
          const usersString = JSON.stringify(users);
          if (!usersString) {
            throw new Error('Failed to serialize users');
          }
          console.log('Saving users to localStorage:', usersString);
          localStorage.setItem('users', usersString);

          // After saving, reload users to ensure state is up to date (optional, for debug)
          users = JSON.parse(localStorage.getItem('users') || '[]');
          console.log('Users after signup:', users);
alert('User Signup Successfully');
navigator('/login');
// Do NOT set isLoggedIn to prevent navigation
          return { success: true, message: 'Signup successful, please log in' };
        } catch (error) {
          console.error('Signup error:', error);
          return { success: false, error: error.message };
        }
      },

      logout: () => set({ isLoggedIn: false, userInfo: null, token: null }),

      clearStorage: () => {
        localStorage.removeItem('users');
        localStorage.removeItem('auth-storage');
        set({ isLoggedIn: false, userInfo: null, token: null });
        return { success: true };
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => ({
        getItem: (key) => localStorage.getItem(key),
        setItem: (key, value) => {
          console.log('setItem:', key, value); // Debug
          localStorage.setItem(key, value);
        },
        removeItem: (key) => localStorage.removeItem(key),
      })),
    }
  )
);