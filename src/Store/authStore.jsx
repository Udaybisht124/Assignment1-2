import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";
import PATH_URL from "../utils/constant";

// Helper functions for manual cookie management
const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = `${name}=${
    value || ""
  }${expires}; path=/; Secure; SameSite=Strict`;
};

const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const removeCookie = (name) => {
  document.cookie = `${name}=; Max-Age=-99999999; path=/; Secure; SameSite=Strict`;
};

// Set default axios headers for all requests
axios.interceptors.request.use((config) => {
  const token = getCookie("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

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
            throw new Error("Please fill all fields");
          }

          // COMMENTED: LocalStorage login logic
          // const users = JSON.parse(localStorage.getItem('users') || '[]');
          // const user = users.find((u) => u.email === email);
          // if (!user) {
          //   throw new Error('User not found');
          // }
          // if (user.password !== password) {
          //   throw new Error('Incorrect');
          // }
          // const token = `mock-jwt-${user.id}`;
          // set({
          //   isLoggedIn: true,
          //   userInfo: { id: user.id, username: user.username, email: user.email },
          //   token,
          // });

          const response = await axios.post(`${PATH_URL}api/auth/login`, {
            email,
            password,
          });
          const { token, user } = response.data;

          // Store token in cookie with 7 days expiry
          setCookie("auth_token", token, 7);

          set({
            isLoggedIn: true,
            userInfo: user,
            token,
          });
          return { success: true };
        } catch (error) {
          console.error("Login error:", error);
          return {
            success: false,
            error:
              error.response?.data?.msg ||
              error.response?.data?.error ||
              error.message,
          };
        }
      },

      signup: async (userData) => {
        try {
          const { name, email, password } = userData;
          if (!name || !email || !password) {
            throw new Error("Please fill all fields");
          }

          // COMMENTED: LocalStorage signup logic
          // let users = JSON.parse(localStorage.getItem('users') || '[]');
          // if (users.some((u) => u.email === email)) {
          //   throw new Error('Email already registered');
          // }
          // const newUser = { id: Date.now(), username, email, password };
          // users.push(newUser);
          // localStorage.setItem('users', JSON.stringify(users));

          const response = await axios.post(`${PATH_URL}api/auth/signup`, {
            name,
            email,
            password,
          });
          return { success: true, message: "Signup successful, please log in" };
        } catch (error) {
          console.error("Signup error:", error);
          return {
            success: false,
            error:
              error.response?.data?.msg ||
              error.response?.data?.error ||
              error.message,
          };
        }
      },

      contact: async (contactData) => {
        try {
          const { name, message } = contactData;
          if (!name || !message) {
            throw new Error("Please fill all fields");
          }
          const response = await axios.post(
            `${PATH_URL}api/contact_messages/contact`,
            {
              name,
              message,
            }
          );
          return {
            success: true,
            message: response.data.message,
          };
        } catch (error) {
          console.error("Contact error:", error);
          return {
            success: false,
            error:
              error.response?.data?.message ||
              error.response?.data?.msg ||
              error.response?.data?.error ||
              error.message,
          };
        }
      },

      logout: () => {
        removeCookie("auth_token");
        set({ isLoggedIn: false, userInfo: null, token: null });
      },

      clearStorage: () => {
        // localStorage.removeItem('users'); // COMMENTED: No longer needed
        removeCookie("auth_token");
        localStorage.removeItem("auth-storage");
        set({ isLoggedIn: false, userInfo: null, token: null });
        return { success: true };
      },

      initializeAuth: () => {
        const token = getCookie("auth_token");
        if (token) {
          set({ token });
          return { success: true, token };
        }
        return { success: false };
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => ({
        getItem: (key) => localStorage.getItem(key),
        setItem: (key, value) => {
          localStorage.setItem(key, value);
        },
        removeItem: (key) => localStorage.removeItem(key),
      })),
    }
  )
);
