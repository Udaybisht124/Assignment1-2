// Import useForm hook from React Hook Form for form validation and handling
import { useForm } from "react-hook-form";
// Import React hooks for state management, effects, and refs
import { useState, useEffect, useRef } from "react";
// Import Link for navigation and useNavigate for programmatic navigation
import { Link, useNavigate } from "react-router-dom";
// Import custom Alert component for displaying messages
import { AlertComponent } from "./Alert";
// Import FloatingLabel component from Flowbite React
import { FloatingLabel } from "flowbite-react";
// Import API URL and Google Client ID constants
import PATH_URL, { GOOGLE_CLIENT_ID } from "../utils/constant";
// Import authentication store hook for signup functionality
import { useAuthStore } from "../Store/authStore.jsx";
// Import eye icons from React Icons for password visibility toggle
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
// Import Google icon for OAuth button
import { FaGoogle } from "react-icons/fa";

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
  /* Responsive bubble configurations */
  .bubble1 { 
    width: 60px; height: 60px; bottom: -60px; left: 10%; animation-duration: 12s; 
  }
  .bubble2 { 
    width: 80px; height: 80px; bottom: -80px; left: 30%; animation-duration: 18s; 
  }
  .bubble3 { 
    width: 50px; height: 50px; bottom: -50px; left: 50%; animation-duration: 15s; 
  }
  .bubble4 { 
    width: 70px; height: 70px; bottom: -70px; left: 70%; animation-duration: 20s; 
  }
  .bubble5 { 
    width: 55px; height: 55px; bottom: -55px; left: 90%; animation-duration: 17s; 
  }
  
  /* Larger bubbles for medium screens and up */
  @media (min-width: 768px) {
    .bubble1 { width: 100px; height: 100px; bottom: -100px; }
    .bubble2 { width: 150px; height: 150px; bottom: -150px; }
    .bubble3 { width: 80px; height: 80px; bottom: -80px; }
    .bubble4 { width: 120px; height: 120px; bottom: -120px; }
    .bubble5 { width: 90px; height: 90px; bottom: -90px; }
  }
  
  /* Keyframe animation for floating bubbles */
  @keyframes float {
    0% { transform: translateY(0); opacity: 0.6; } /* Start at bottom with medium opacity */
    50% { opacity: 0.3; } /* Fade to lower opacity at middle */
    100% { transform: translateY(-100vh); opacity: 0; } /* Move to top and fade out */
  }
  /* Signup form fade-in animation class */
  .signup-form-fadein {
    animation: fadeIn 1s ease-in-out; /* Smooth fade-in animation */
  }
  /* Keyframe animation for form fade-in effect */
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(20px); } /* Start invisible and slightly below */
    100% { opacity: 1; transform: translateY(0); } /* End visible at normal position */
  }
`;

// Main SignupForm component export
export const SignupForm = () => {
  // Destructure React Hook Form methods and state
  const {
    register, // Function to register form fields with validation
    handleSubmit, // Function to handle form submission
    formState: { errors }, // Form validation errors
    reset, // Function to reset form fields
  } = useForm();
  
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
  // Hook for programmatic navigation after successful signup
  const navigate = useNavigate();
  // Extract signup function from authentication store
  const signup = useAuthStore((state) => state.signup);
  // Ref to store timeout ID for cleanup
  const timeoutRef = useRef(null);
  // Constant for alert display timeout duration
  const ALERT_TIMEOUT = 1000;

  // Effect hook for cleanup on component unmount
  useEffect(() => {
    // Cleanup function to clear timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  // State for storing selected profile picture file
  const [selectedFile, setSelectedFile] = useState(null);

  // Async function to handle form submission
  const onSubmit = async (data) => {
    // Clear any existing alerts
    setAlert({ show: false, message: "", color: "failure" });
    // Set loading state to true to show loading indicator
    setLoading(true);

    try {
      // Prepare plain object for signup (image as File object)
      const signupData = {
        name: data.name.trim(), // Trim whitespace from name
        email: data.email.trim(), // Trim whitespace from email
        password: data.password, // Password as entered
        image: selectedFile, // Selected profile picture file
      };

      // Additional validation for email
      if (!signupData.email) {
        throw new Error("Email cannot be empty");
      }

      // Call signup function from auth store
      const response = await signup(signupData);

      // Check if signup failed
      if (!response.success) {
        // Show error alert
        setAlert({ show: true, message: response.error, color: "failure" });
        // Set timeout to clear alert
        timeoutRef.current = setTimeout(() => {
          setAlert({ show: false, message: "", color: "failure" });
        }, ALERT_TIMEOUT);
        // Reset form fields
        reset();
        return;
      }

      // Show success alert
      setAlert({ show: true, message: response.message, color: "success" });
      // Navigate to login page after showing success message
      timeoutRef.current = setTimeout(() => {
        setAlert({ show: false, message: "", color: "success" });
        try {
          navigate("/login");
        } catch (navError) {
          console.error("Navigation error:", navError);
        }
      }, ALERT_TIMEOUT);

      // Reset form fields on success
      reset();
    } catch (err) {
      // Handle unexpected errors
      setAlert({
        show: true,
        message: err.message || "Signup failed!",
        color: "failure",
      });
      // Set timeout to clear error alert
      timeoutRef.current = setTimeout(() => {
        setAlert({ show: false, message: "", color: "failure" });
      }, ALERT_TIMEOUT);
      // Reset form fields
      reset();
    } finally {
      // Always set loading to false when done
      setLoading(false);
    }
  };

  // Render the signup form component
  return (
    // Main container with full screen height and centered content - responsive padding
    <div className="flex items-center justify-center min-h-screen bg-gray-900 relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
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
      {/* Signup form container with responsive sizing and conditional opacity based on loading state */}
      <div
        className={`w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 signup-form-fadein ${
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
          Sign Up
        </h2>
        {/* Signup form with React Hook Form handling */}
        <form
          className="space-y-6 bg-white sm:mx-[20px] md:mx-[40px] lg:mx-[60px] xl:mx-[100px]"
          typeof="multipart/form-data" // Form type for file uploads
          onSubmit={handleSubmit(onSubmit)} // React Hook Form submit handler
          autoComplete="off" // Disable browser autocomplete
        >
          {/* Name input field container */}
          <div>
            {/* Floating label name input with React Hook Form registration */}
            <FloatingLabel
              variant="standard" // Flowbite variant style
              label="Name" // Floating label text
              id="name" // Unique identifier
              {...register("name", { // React Hook Form registration with validation rules
                required: "Name is required", // Required field validation
                minLength: { // Minimum length validation
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
                pattern: { // Pattern validation for letters and spaces only
                  value: /^[a-zA-Z\s]+$/,
                  message: "Name can only contain letters and spaces",
                },
              })}
              disabled={loading} // Disable during loading
              autoComplete="name" // Browser autocomplete hint
              className="dark:text-black" // Dark mode text color
              aria-describedby={errors.name ? "name-error" : undefined} // Accessibility description
            />
            {/* Conditional error message display */}
            {errors.name && (
              <span id="name-error" className="text-blue-400 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>
          {/* Email input field container */}
          <div>
            {/* Floating label email input with React Hook Form registration */}
            <FloatingLabel
              variant="standard" // Flowbite variant style
              label="Email" // Floating label text
              id="email" // Unique identifier
              type="email" // HTML5 email input type
              {...register("email", { // React Hook Form registration with validation rules
                required: "Email is required", // Required field validation
                pattern: { // Email format validation
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
                validate: (value) => // Custom validation function
                  value.trim() !== "" || "Email cannot be empty",
              })}
              disabled={loading} // Disable during loading
              autoComplete="email" // Browser autocomplete hint
              className="dark:text-black" // Dark mode text color
              aria-describedby={errors.email ? "email-error" : undefined} // Accessibility description
            />
            {/* Conditional error message display */}
            {errors.email && (
              <span id="email-error" className="text-blue-400 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>
          {/* Password input field container with relative positioning for eye icon */}
          <div className="relative">
            {/* Floating label password input with React Hook Form registration */}
            <FloatingLabel
              variant="standard" // Flowbite variant style
              label="Password" // Floating label text
              id="password" // Unique identifier
              type={showPassword ? "text" : "password"} // Dynamic input type based on visibility state
              {...register("password", { // React Hook Form registration with validation rules
                required: "Password is required", // Required field validation
                pattern: { // Strong password pattern validation
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character (@, $, !, %, *, ?, &).",
                },
                minLength: { // Minimum length validation
                  value: 3,
                  message: "Password must be at least 3 characters",
                },
                maxLength: { // Maximum length validation
                  value: 100,
                  message: "Password must not exceed 100 characters",
                },
              })}
              disabled={loading} // Disable during loading
              autoComplete="password" // Browser autocomplete hint for password
              className="dark:text-black" // Dark mode text color
              aria-describedby={errors.password ? "password-error" : undefined} // Accessibility description
            />
            {/* Password visibility toggle button */}
            <button
              type="button" // Prevent form submission
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700" // Positioning and styling
              onClick={() => setShowPassword(!showPassword)} // Toggle visibility handler
            >
              {/* Conditional icon display based on password visibility */}
              {showPassword ? <FaEye /> : <FaRegEyeSlash />}
            </button>
            {/* Conditional error message display */}
            {errors.password && (
              <span id="password-error" className="text-blue-400 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>
          {/* File upload input */}
          {/* Profile picture upload section */}
          <div>
            {/* File upload label */}
            <label className="block teto xt-gray-700 mb-1">Profile Picture (optional)</label>
            {/* File input for profile picture upload */}
            <input
              type="file" // File input type
              accept="image/*" // Accept only image files
              onChange={e => setSelectedFile(e.target.files[0])} // Handle file selection
              disabled={loading} // Disable during loading
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" // Styling for file input
            />
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
                Signing Up...
              </>
            ) : (
              // Default button text
              "Sign Up"
            )}
          </button>
          {/* Login link paragraph */}
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            {/* Navigation link to login page */}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
        
        {/* OAuth section for Google signup */}
        <div className="flex flex-col items-center mt-6">
          {/* OAuth separator text */}
          <span className="text-gray-500 mb-2">or sign up with</span>
          {/* Google OAuth button */}
          <button
            type="button" // Prevent form submission
            className="flex items-center bg-blue-400 gap-2 px-4 text-white py-2 te border border-gray-300 rounded-md shadow-sm hover:bg-blue-500 transition-colors text-gray-700 font-medium" // Styling for OAuth button
            onClick={async () => { // OAuth click handler
              // Google OAuth logic
              // You need to install @react-oauth/google and wrap your app with GoogleOAuthProvider in your main entry point
              // Here, we open the Google OAuth popup
              window.location.href = 'http://localhost:5000/api/auth/google/auth'; // Redirect to Google OAuth endpoint
            }}
            aria-label="Sign up with Google" // Accessibility label
          >
            {/* Google icon */}
            <FaGoogle className="text-xl text-gray-600" />
            {/* Button text */}
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

