// Import useState hook for managing component state
import { useState } from "react";
// Import authentication store hook for login functionality
import { useAuthStore } from "../Store/authStore.jsx";
// Import Link for navigation and useNavigate for programmatic navigation
import { Link, useNavigate } from "react-router-dom";
// Import custom Alert component for displaying messages
import { AlertComponent } from "./Alert";
// Import FloatingLabel component from Flowbite React
import { FloatingLabel } from "flowbite-react";
// Import eye icons from React Icons for password visibility toggle
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

// CSS-in-JS styles for animated background and form animations
const animatedBgStyles = `
  /* Animated background container styles */
  .animated-bg {
    position: absolute; /* Position absolutely to cover entire container */
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background: linear-gradient(45deg, #1e3a8a, #4f46e5); /* Blue gradient background */
    overflow: hidden; /* Hide overflowing bubbles */
    z-index: 0; /* Behind the form */
  }
  /* Floating bubble base styles */
  .bubble {
    position: absolute; /* Position bubbles absolutely */
    border-radius: 50%; /* Make bubbles circular */
    background: rgba(255, 255, 255, 0.2); /* Semi-transparent white */
    animation: float 15s infinite; /* Default floating animation */
  }
  /* Individual bubble configurations with different sizes and positions */
  .bubble1 { width: 100px; height: 100px; bottom: -100px; left: 10%; animation-duration: 12s; }
  .bubble2 { width: 150px; height: 150px; bottom: -150px; left: 30%; animation-duration: 18s; }
  .bubble3 { width: 80px; height: 80px; bottom: -80px; left: 50%; animation-duration: 15s; }
  .bubble4 { width: 120px; height: 120px; bottom: -120px; left: 70%; animation-duration: 20s; }
  .bubble5 { width: 90px; height: 90px; bottom: -90px; left: 90%; animation-duration: 17s; }
  /* Keyframe animation for floating bubbles */
  @keyframes float {
    0% { transform: translateY(0); opacity: 0.6; } /* Start at bottom with medium opacity */
    50% { opacity: 0.3; } /* Fade to lower opacity at middle */
    100% { transform: translateY(-100vh); opacity: 0; } /* Move to top and fade out */
  }
  /* Login form fade-in animation class */
  .login-form-fadein {
    animation: fadeIn 1s ease-in-out; /* Smooth fade-in animation */
  }
  /* Keyframe animation for form fade-in effect */
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(20px); } /* Start invisible and slightly below */
    100% { opacity: 1; transform: translateY(0); } /* End visible at normal position */
  }
`;

// Main LoginForm component export
export const LoginForm = () => {
  // State for storing user input credentials (email and password)
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  // State for storing validation errors for each field
  const [errors, setErrors] = useState({ email: "", password: "" });
  // State for managing alert messages (success/error notifications)
  const [alert, setAlert] = useState({
    show: false, // Whether to show the alert
    message: "", // Alert message text
    color: "failure", // Alert color theme (success/failure)
  });
  // State for managing loading state during form submission
  const [loading, setLoading] = useState(false);
  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);
  // Hook for programmatic navigation after successful login
  const navigate = useNavigate();
  // Extract login function from authentication store
  const { login } = useAuthStore();
  // Constant for alert display timeout duration
  const ALERT_TIMEOUT = 2000;

  // Function to validate user credentials before submission
  const validateCredentials = () => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Regular expression for strong password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // Flag to track overall validation status
    let isValid = true;
    // Object to store new error messages
    const newErrors = { email: "", password: "" };

    // Validate email field
    if (!credentials.email.trim()) {
      // Check if email is empty
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(credentials.email.trim())) {
      // Check if email format is valid
      newErrors.email = "Enter a valid email";
      isValid = false;
    }

    // Validate password field
    if (!credentials.password) {
      // Check if password is empty
      newErrors.password = "Password is required";
      isValid = false;
    } else if (!passwordRegex.test(credentials.password)) {
      // Check if password meets strength requirements
      newErrors.password =
        "Password must be at least 8 characters, include one uppercase letter, one lowercase letter, one number, and one special character (@, $, !, %, *, ?, &).";
      isValid = false;
    }

    // Update errors state with validation results
    setErrors(newErrors);
    // Return overall validation status
    return isValid;
  };

  // Function to handle input field changes
  const handleInputChange = (e) => {
    // Destructure name and value from the input event target
    const { name, value } = e.target;
    // Update credentials state with new value for the specific field
    setCredentials({ ...credentials, [name]: value });
    // Clear error for the field on change to provide immediate feedback
    setErrors({ ...errors, [name]: "" });
    // Clear alert on input change to remove stale messages
    setAlert({ show: false, message: "", color: "failure" });
  };

  // Async function to handle form submission
  const handleSubmit = async (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    // Clear any existing alerts
    setAlert({ show: false, message: "", color: "failure" });
    // Set loading state to true to show loading indicator
    setLoading(true);

    try {
      // Validate credentials before attempting login
      if (!validateCredentials()) {
        // If validation fails, stop loading and return early
        setLoading(false);
        return;
      }

      // Attempt login with trimmed email and password
      const result = await login({
        email: credentials.email.trim(),
        password: credentials.password,
      });

      // Check if login was successful
      if (result.success) {
        // Show success alert
        setAlert({
          show: true,
          message: "Login successful!",
          color: "success",
        });
        // Navigate to home page after showing success message
        setTimeout(() => {
          setAlert({ show: false, message: "", color: "success" });
          navigate("/home");
        }, ALERT_TIMEOUT);
      } else {
        // Always show 'Invalid credentials' in the alert, but log the real error
        console.error("Login error from server:", result.error);
        // Show generic error message for security
        setAlert({
          show: true,
          message: "Invalid credentials",
          color: "failure",
        });
        // Clear alert after timeout
        setTimeout(() => {
          setAlert({ show: false, message: "", color: "failure" });
        }, ALERT_TIMEOUT);
      }
    } catch (err) {
      // Handle unexpected errors
      console.error("Login error:", err);
      // Show error alert with fallback message
      setAlert({
        show: true,
        message: err.message || "Login failed! Please try again.",
        color: "failure",
      });
      // Clear alert after timeout
      setTimeout(() => {
        setAlert({ show: false, message: "", color: "failure" });
      }, ALERT_TIMEOUT);
    } finally {
      // Always set loading to false when done
      setLoading(false);
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    // Toggle the showPassword state
    setShowPassword(!showPassword);
  };

  // Render the login form component
  return (
    // Main container with full screen height and centered content
    <div className="flex items-center justify-center min-h-screen h-screen bg-gray-900 relative">
      {/* Inject CSS styles for animations */}
      <style>{animatedBgStyles}</style>
      {/* Animated background with floating bubbles */}
      <div className="animated-bg">
        {/* Individual floating bubbles with different configurations */}
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <div className="bubble bubble4"></div>
        <div className="bubble bubble5"></div>
      </div>
      {/* Login form container with conditional opacity based on loading state */}
      <div
        className={`max-w-md w-full bg-white rounded-lg shadow-lg p-8 login-form-fadein ${
          loading ? "opacity-80" : ""
        }`}
        style={{ zIndex: 1 }} // Ensure form appears above animated background
      >
        {/* Conditional alert display */}
        {alert.show && (
          <div className="mb-6">
            {/* Alert component with accessibility attributes */}
            <AlertComponent
              message={alert.message}
              color={alert.color}
              aria-live="assertive" // Screen reader announcement
            />
          </div>
        )}
        {/* Form title */}
        <h2 className="text-2xl font-bold mb-6 text-blue-500 text-center">
          Login
        </h2>
        {/* Login form with submit handler and accessibility attributes */}
        <form
          className="space-y-6 bg-white"
          onSubmit={handleSubmit}
          autoComplete="off" // Disable browser autocomplete
        >
          {/* Email input field container */}
          <div>
            {/* Floating label email input */}
            <FloatingLabel
              variant="standard" // Flowbite variant style
              label="Email" // Floating label text
              id="email" // Unique identifier
              name="email" // Form field name
              type="email" // HTML5 email input type
              value={credentials.email} // Controlled input value
              onChange={handleInputChange} // Change handler
              className="dark:text-black" // Dark mode text color
              required // HTML5 required attribute
              disabled={loading} // Disable during loading
              autoComplete="email" // Browser autocomplete hint
              aria-describedby={errors.email ? "email-error" : undefined} // Accessibility description
            />
            {/* Conditional error message display */}
            {errors.email && (
              <span id="email-error" className="text-red-500 text-sm">
                {errors.email}
              </span>
            )}
          </div>
          {/* Password input field container with relative positioning for eye icon */}
          <div className="relative">
            {/* Floating label password input */}
            <FloatingLabel
              variant="standard" // Flowbite variant style
              label="Password" // Floating label text
              id="password" // Unique identifier
              name="password" // Form field name
              type={showPassword ? "text" : "password"} // Dynamic input type based on visibility state
              value={credentials.password} // Controlled input value
              onChange={handleInputChange} // Change handler
              className="dark:text-black" // Dark mode text color
              required // HTML5 required attribute
              disabled={loading} // Disable during loading
              autoComplete="current-password" // Browser autocomplete hint
              aria-describedby={errors.password ? "password-error" : undefined} // Accessibility description
            />
            {/* Password visibility toggle button */}
            <button
              type="button" // Prevent form submission
              onClick={togglePasswordVisibility} // Toggle visibility handler
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800" // Positioning and styling
              aria-label={showPassword ? "Hide password" : "Show password"} // Accessibility label
            >
              {/* Conditional icon display based on password visibility */}
              {showPassword ? <FaRegEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
            {/* Conditional error message display */}
            {errors.password && (
              <span id="password-error" className="text-red-500 text-sm">
                {errors.password}
              </span>
            )}
          </div>
          {/* Submit button with loading state and accessibility attributes */}
          <button
            type="submit" // Form submission button
            className={`w-full px-4 py-3 bg-blue-500 text-white rounded-md transition-colors shadow-md font-semibold flex items-center justify-center ${
              loading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-600"
            }`} // Dynamic styling based on loading state
            disabled={loading} // Disable during loading
            aria-busy={loading} // Accessibility loading indicator
          >
            {/* Conditional button content based on loading state */}
            {loading ? (
              <>
                {/* Loading spinner SVG */}
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {/* Spinner circle background */}
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  {/* Spinner arc that rotates */}
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                {/* Loading text */}
                Logging in...
              </>
            ) : (
              // Default button text
              "Login"
            )}
          </button>
          {/* Sign up link paragraph */}
          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            {/* Navigation link to signup page */}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
