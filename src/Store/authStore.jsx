// Import Zustand's create function for state management
import { create } from "zustand";
// Import Zustand middleware for state persistence and JSON storage
import { persist, createJSONStorage } from "zustand/middleware";
// Import axios for HTTP requests
import axios from "axios";
// Import API base URL constant
import PATH_URL from "../utils/constant";

// Helper functions for manual cookie management
// Function to set a cookie with name, value, and expiration days
const setCookie = (name, value, days) => {
  // Initialize expires string
  let expires = "";
  // If days parameter is provided, calculate expiration date
  if (days) {
    // Create new date object
    const date = new Date();
    // Set time to current time plus specified days in milliseconds
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    // Convert to UTC string format for cookie expires attribute
    expires = "; expires=" + date.toUTCString();
  }
  // Set cookie with security flags (Secure and SameSite=Strict)
  document.cookie = `${name}=${
    value || ""
  }${expires}; path=/; Secure; SameSite=Strict`;
};

// Function to retrieve a cookie value by name
const getCookie = (name) => {
  // Create search string with equals sign
  const nameEQ = name + "=";
  // Split all cookies by semicolon
  const ca = document.cookie.split(";");
  // Loop through all cookies
  for (let i = 0; i < ca.length; i++) {
    // Get current cookie
    let c = ca[i];
    // Remove leading whitespace
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    // If cookie starts with our search string, return its value
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  // Return null if cookie not found
  return null;
};

// Function to remove a cookie by setting it to expire in the past
const removeCookie = (name) => {
  // Set cookie with negative Max-Age to delete it
  document.cookie = `${name}=; Max-Age=-99999999; path=/; Secure; SameSite=Strict`;
};

// Set default axios headers for all requests
// Axios request interceptor to automatically add authorization header
axios.interceptors.request.use((config) => {
  // Get authentication token from cookies
  const token = getCookie("auth_token");
  // If token exists, add it to Authorization header
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  // Return modified config
  return config;
});

// Create and export the authentication store using Zustand
export const useAuthStore = create(
  // Wrap store with persist middleware for data persistence
  persist(
    // Store factory function that receives set and get functions
    (set, get) => ({
      // Initial state: user is not logged in
      isLoggedIn: false,
      // Initial state: no user information stored
      userInfo: null,
      // Initial state: no authentication token
      token: null,

      // Async function to handle user login
      login: async (credentials) => {
        try {
          // Destructure email and password from credentials object
          const { email, password } = credentials;
          // Validate that both email and password are provided
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

          // Make POST request to login endpoint with credentials
          const response = await axios.post(`${PATH_URL}api/auth/login`, {
            email,
            password,
          });

          // Extract token and user data from response
          const { token, user } = response.data;

          // Store token in cookie with 7 days expiry
          setCookie("auth_token", token, 7);

          // Update store state with successful login data
          set({
            isLoggedIn: true,
            userInfo: user,
            token,
          });
          // Return success response
          return { success: true };
        } catch (error) {
          // Log error for debugging
          console.error("Login error:", error);
          // Always return 'Invalid credentials' for authentication errors
          let errorMsg = "Invalid credentials";
          // If the backend provides a more specific error, use it
          if (error.response?.data?.msg) errorMsg = error.response.data.msg;
          else if (error.response?.data?.error) errorMsg = error.response.data.error;
          else if (error.message && error.message !== "Request failed with status code 401") errorMsg = error.message;
          // Return error response
          return {
            success: false,
            error: errorMsg,
          };
        }
      },

      // Async function to handle user signup/registration
      signup: async (userData) => {
        try {
          // Destructure user data from the userData object
          const { name, email, password, image } = userData;
          // Validate that all required fields are provided
          if (!name || !email || !password || !image) {
            throw new Error("Please fill all fields");
          }

          // Prepare FormData for file upload
          const formData = new FormData();
          // Append name field to form data
          formData.append("name", name);
          // Append email field to form data
          formData.append("email", email);
          // Append password field to form data
          formData.append("password", password);
          // Append image file to form data (image should be a File object)
          formData.append("image", image); // image should be a File object

          // Make POST request to signup endpoint with form data
          const response = await axios.post(
            `${PATH_URL}api/auth/signup`,
            formData,
            {
              headers: {
                // Let axios set the Content-Type with boundary
                'Content-Type': 'multipart/form-data',
              },
            }
          );
          // Return success response
          return { success: true, message: "Signup successful, please log in" };
        } catch (error) {
          // Log error for debugging
          console.error("Signup error:", error);
          // Return error response with appropriate error message
          return {
            success: false,
            error:
              error.response?.data?.msg ||
              error.response?.data?.error ||
              error.message,
          };
        }
      },

      // Async function to handle contact form submission
      contact: async (contactData) => {
        try {
          // Destructure name and message from contact data
          const { name, message } = contactData;
          // Validate that both fields are provided
          if (!name || !message) {
            throw new Error("Please fill all fields");
          }
          // Make POST request to contact endpoint
          const response = await axios.post(
            `${PATH_URL}api/contact_messages/contact`,
            {
              name,
              message,
            }
          );
          // Return success response with server message
          return {
            success: true,
            message: response.data.message,
          };
        } catch (error) {
          // Log error for debugging
          console.error("Contact error:", error);
          // Return error response with appropriate error message
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

      // Function to login user with existing token (used for OAuth)
      loginWithToken: (token) => {
        // Check if token is provided
        if (token) {
          // Store token in cookie with 7 days expiry
          setCookie("auth_token", token, 7);
          // Update store state to logged in with token
          set({ isLoggedIn: true, token });
          // Force update to localStorage (Zustand persist should handle this automatically)
          localStorage.setItem("auth-storage", JSON.stringify({ state: { isLoggedIn: true, token }, version: 0 }));
        }
      },

      // Function to logout user and clear authentication data
      logout: () => {
        // Remove authentication token from cookies
        removeCookie("auth_token");
        // Reset store state to logged out
        set({ isLoggedIn: false, userInfo: null, token: null });
      },

      // Function to clear all stored authentication data
      clearStorage: () => {
        // localStorage.removeItem('users'); // COMMENTED: No longer needed
        // Remove authentication token from cookies
        removeCookie("auth_token");
        // Remove persisted store data from localStorage
        localStorage.removeItem("auth-storage");
        // Reset store state to initial values
        set({ isLoggedIn: false, userInfo: null, token: null });
        // Return success response
        return { success: true };
      },

      // Function to initialize authentication state from stored token
      initializeAuth: () => {
        // Get token from cookies
        const token = getCookie("auth_token");
        // If token exists, update store state
        if (token) {
          set({ token });
          return { success: true, token };
        }
        // Return failure if no token found
        return { success: false };
      },
    }),
    // Persistence configuration
    {
      // Name for the localStorage key
      name: "auth-storage",
      // Custom storage implementation using localStorage
      storage: createJSONStorage(() => ({
        // Function to get item from localStorage
        getItem: (key) => localStorage.getItem(key),
        // Function to set item in localStorage
        setItem: (key, value) => {
          localStorage.setItem(key, value);
        },
        // Function to remove item from localStorage
        removeItem: (key) => localStorage.removeItem(key),
      })),
    }
  )
);
