import { create } from "zustand";

const useAuthStore = create((set) => ({
  // State for user authentication
  user: null,
  isAuthenticated: false,

  // Action to log in the user
  login: (userData) => set({ user: userData, isAuthenticated: true }),

  // Action to sign up the user
  signup: (userData) => set({ user: userData, isAuthenticated: true }),

  // Action to log out the user
  logout: () => set({ user: null, isAuthenticated: false }),
}));

export default useAuthStore;