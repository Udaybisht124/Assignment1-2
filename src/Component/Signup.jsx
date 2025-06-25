import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlertComponent } from "./Alert";
import { FloatingLabel } from "flowbite-react";
import PATH_URL, { GOOGLE_CLIENT_ID } from "../utils/constant";
import { useAuthStore } from "../Store/authStore.jsx";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

// CSS-in-JS styles for animated background and form animations
const animatedBgStyles = `
  .animated-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #1e3a8a, #4f46e5);
    overflow: hidden;
    z-index: 0;
  }
  .bubble {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    animation: float 15s infinite;
  }
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
  @media (min-width: 768px) {
    .bubble1 { width: 100px; height: 100px; bottom: -100px; }
    .bubble2 { width: 150px; height: 150px; bottom: -150px; }
    .bubble3 { width: 80px; height: 80px; bottom: -80px; }
    .bubble4 { width: 120px; height: 120px; bottom: -120px; }
    .bubble5 { width: 90px; height: 90px; bottom: -90px; }
  }
  @keyframes float {
    0% { transform: translateY(0); opacity: 0.6; }
    50% { opacity: 0.3; }
    -glass    100% { transform: translateY(-100vh); opacity: 0; }
  }
  .signup-form-fadein {
    animation: fadeIn 1s ease-in-out;
  }
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`;

/**
 * A React component that renders a signup form with form validation, file upload, and Google OAuth integration.
 * @returns {JSX.Element} The signup form component with animated background and responsive design.
 */
export const SignupForm = () => {
  /**
   * Form handling methods and state from React Hook Form.
   * @type {Object}
   * @property {Function} register - Registers form inputs with validation rules.
   * @property {Function} handleSubmit - Handles form submission with validated data.
   * @property {Object} formState.errors - Contains validation error messages.
   * @property {Function} reset - Resets form fields to their initial state.
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  /**
   * State for managing alert messages.
   * @type {Object}
   * @property {boolean} show - Whether the alert is visible.
   * @property {string} message - The alert message text.
   * @property {string} color - The alert color theme ("success" or "failure").
   */
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    color: "failure",
  });

  /**
   * State for managing form submission loading status.
   * @type {boolean}
   */
  const [loading, setLoading] = useState(false);

  /**
   * State for toggling password visibility.
   * @type {boolean}
   */
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Hook for programmatic navigation.
   * @type {Function}
   */
  const navigate = useNavigate();

  /**
   * Extracts the signup function from the authentication store.
   * @type {Function}
   */
  const signup = useAuthStore((state) => state.signup);

  /**
   * Reference to store timeout ID for cleanup.
   * @type {Object}
   */
  const timeoutRef = useRef(null);

  /**
   * Constant for alert display timeout duration (in milliseconds).
   * @type {number}
   */
  const ALERT_TIMEOUT = 1000;

  /**
   * Cleans up timeout on component unmount.
   */
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  /**
   * State for storing the selected profile picture file.
   * @type {File|null}
   */
  const [selectedFile, setSelectedFile] = useState(null);

  /**
   * Handles form submission with validation and signup logic.
   * @async
   * @param {Object} data - Form data containing name, email, password, and optional image.
   * @throws {Error} If signup fails or validation errors occur.
   */
  const onSubmit = async (data) => {
    setAlert({ show: false, message: "", color: "failure" });
    setLoading(true);

    try {
      const signupData = {
        name: data.name.trim(),
        email: data.email.trim(),
        password: data.password,
        image: selectedFile,
      };

      if (!signupData.email) {
        throw new Error("Email cannot be empty");
      }

      const response = await signup(signupData);

      if (!response.success) {
        setAlert({ show: true, message: response.error, color: "failure" });
        timeoutRef.current = setTimeout(() => {
          setAlert({ show: false, message: "", color: "failure" });
        }, ALERT_TIMEOUT);
        reset();
        return;
      }

      setAlert({ show: true, message: response.message, color: "success" });
      timeoutRef.current = setTimeout(() => {
        setAlert({ show: false, message: "", color: "success" });
        try {
          navigate("/login");
        } catch (navError) {
          console.error("Navigation error:", navError);
        }
      }, ALERT_TIMEOUT);

      reset();
    } catch (err) {
      setAlert({
        show: true,
        message: err.message || "Signup failed!",
        color: "failure",
      });
      timeoutRef.current = setTimeout(() => {
        setAlert({ show: false, message: "", color: "failure" });
      }, ALERT_TIMEOUT);
      reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    /**
     * Main container for the signup form with animated background.
     * @type {JSX.Element}
     */
    <div className="flex items-center justify-center min-h-screen h-screen bg-gray-900 relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <style>{animatedBgStyles}</style>
      <div className="animated-bg">
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <div className="bubble bubble4"></div>
        <div className="bubble bubble5"></div>
      </div>
      <div
        className={`w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 signup-form-fadein ${
          loading ? "opacity-80" : ""
        }`}
        style={{ zIndex: 1 }}
      >
        {alert.show && (
          <div className="mb-6">
            /** * Displays an alert message for success or failure. * @type{" "}
            {JSX.Element}
            */
            <AlertComponent
              message={alert.message}
              color={alert.color}
              aria-live="assertive"
            />
          </div>
        )}
        <h2 className="text-2xl font-bold mb-6 text-blue-500 text-center">
          Sign Up
        </h2>
        <form
          className="space-y-6 bg-white sm:mx-[20px] md:mx-[40px] lg:mx-[60px] xl:mx-[100px]"
          typeof="multipart/form-data"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <div>
            <FloatingLabel
              variant="standard"
              label="Name"
              id="name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Name can only contain letters and spaces",
                },
              })}
              disabled={loading}
              autoComplete="name"
              className="dark:text-black"
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <span id="name-error" className="text-blue-400 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>
          <div>
            <FloatingLabel
              variant="standard"
              label="Email"
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
                validate: (value) =>
                  value.trim() !== "" || "Email cannot be empty",
              })}
              disabled={loading}
              autoComplete="email"
              className="dark:text-black"
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span id="email-error" className="text-blue-400 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="relative">
            <FloatingLabel
              variant="standard"
              label="Password"
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character (@, $, !, %, *, ?, &).",
                },
                minLength: {
                  value: 3,
                  message: "Password must be at least 3 characters",
                },
                maxLength: {
                  value: 100,
                  message: "Password must not exceed 100 characters",
                },
              })}
              disabled={loading}
              autoComplete="password"
              className="dark:text-black"
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            /** * Toggles password visibility. * @type {JSX.Element}
            */
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaRegEyeSlash />}
            </button>
            {errors.password && (
              <span id="password-error" className="text-blue-400 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            /** * Input for uploading a profile picture. * @type {JSX.Element}
            */
            <label className="block text-gray-700 mb-1">
              Profile Picture (optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              disabled={loading}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          /** * Submit button with loading state. * @type {JSX.Element}
          */
          <button
            type="submit"
            className={`w-full px-4 py-3 bg-blue-500 text-white rounded-md transition-colors shadow-md font-semibold flex items-center justify-center ${
              loading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                Signing Up...
              </>
            ) : (
              "Sign Up"
            )}
          </button>
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
        /** * Google OAuth signup section. * @type {JSX.Element}
        */
        <div className="flex flex-col items-center mt-6">
          <span className="text-gray-500 mb-2">or sign up with</span>
          <button
            type="button"
            className="flex items-center bg-blue-400 gap-2 px-4 text-white py-2 border border-gray-300 rounded-md shadow-sm hover:bg-blue-500 transition-colors text-gray-700 font-medium"
            onClick={async () => {
              window.location.href =
                "http://localhost:5000/api/auth/google/auth";
            }}
            aria-label="Sign up with Google"
          >
            <FaGoogle className="text-xl text-gray-600" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};
