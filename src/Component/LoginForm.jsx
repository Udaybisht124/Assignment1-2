import { useState } from "react";
import { useAuthStore } from "../Store/authStore.jsx";
import { Link, useNavigate } from "react-router-dom";
import { AlertComponent } from "./Alert";
import { FloatingLabel } from "flowbite-react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

/**
 * CSS-in-JS styles for animated background and form animations
 * @type {string}
 */
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
  .bubble1 { width: 100px; height: 100px; bottom: -100px; left: 10%; animation-duration: 12s; }
  .bubble2 { width: 150px; height: 150px; bottom: -150px; left: 30%; animation-duration: 18s; }
  .bubble3 { width: 80px; height: 80px; bottom: -80px; left: 50%; animation-duration: 15s; }
  .bubble4 { width: 120px; height: 120px; bottom: -120px; left: 70%; animation-duration: 20s; }
  .bubble5 { width: 90px; height: 90px; bottom: -90px; left: 90%; animation-duration: 17s; }
  @keyframes float {
    0% { transform: translateY(0); opacity: 0.6; }
    50% { opacity: 0.3; }
    100% { transform: translateY(-100vh); opacity: 0; }
  }
  .login-form-fadein {
    animation: fadeIn 1s ease-in-out;
  }
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`;

/**
 * LoginForm component that renders a styled login form with validation and animations.
 * @returns {JSX.Element} The login form JSX.
 */
export const LoginForm = () => {
  /** @type {[{email: string, password: string}, Function]} */
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  /** @type {[{email: string, password: string}, Function]} */
  const [errors, setErrors] = useState({ email: "", password: "" });
  /** @type {[{show: boolean, message: string, color: string}, Function]} */
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    color: "failure",
  });
  /** @type {[boolean, Function]} */
  const [loading, setLoading] = useState(false);
  /** @type {[boolean, Function]} */
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const ALERT_TIMEOUT = 2000;

  /**
   * Validates the user credentials.
   * @returns {boolean} Whether the credentials are valid.
   */
  const validateCredentials = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!credentials.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(credentials.email.trim())) {
      newErrors.email = "Enter a valid email";
      isValid = false;
    }

    if (!credentials.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (!passwordRegex.test(credentials.password)) {
      newErrors.password =
        "Password must be at least 8 characters, include one uppercase letter, one lowercase letter, one number, and one special character (@, $, !, %, *, ?, &).";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  /**
   * Handles changes in the form input fields.
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setAlert({ show: false, message: "", color: "failure" });
  };

  /**
   * Handles form submission.
   * @param {React.FormEvent} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert({ show: false, message: "", color: "failure" });
    setLoading(true);

    try {
      if (!validateCredentials()) {
        setLoading(false);
        return;
      }

      const result = await login({
        email: credentials.email.trim(),
        password: credentials.password,
      });

      if (result.success) {
        setAlert({
          show: true,
          message: "Login successful!",
          color: "success",
        });
        setTimeout(() => {
          setAlert({ show: false, message: "", color: "success" });
          navigate("/home");
        }, ALERT_TIMEOUT);
      } else {
        console.error("Login error from server:", result.error);
        setAlert({
          show: true,
          message: "Invalid credentials",
          color: "failure",
        });
        setTimeout(() => {
          setAlert({ show: false, message: "", color: "failure" });
        }, ALERT_TIMEOUT);
      }
    } catch (err) {
      console.error("Login error:", err);
      setAlert({
        show: true,
        message: err.message || "Login failed! Please try again.",
        color: "failure",
      });
      setTimeout(() => {
        setAlert({ show: false, message: "", color: "failure" });
      }, ALERT_TIMEOUT);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Toggles password visibility.
   */
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen h-screen bg-gray-900 relative">
      <style>{animatedBgStyles}</style>
      <div className="animated-bg">
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <div className="bubble bubble4"></div>
        <div className="bubble bubble5"></div>
      </div>
      <div
        className={`max-w-md w-full bg-white rounded-lg shadow-lg p-8 login-form-fadein ${
          loading ? "opacity-80" : ""
        }`}
        style={{ zIndex: 1 }}
      >
        {alert.show && (
          <div className="mb-6">
            <AlertComponent
              message={alert.message}
              color={alert.color}
              aria-live="assertive"
            />
          </div>
        )}
        <h2 className="text-2xl font-bold mb-6 text-blue-500 text-center">
          Login
        </h2>
        <form
          className="space-y-6 bg-white"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div>
            <FloatingLabel
              variant="standard"
              label="Email"
              id="email"
              name="email"
              type="email"
              value={credentials.email}
              onChange={handleInputChange}
              className="dark:text-black"
              required
              disabled={loading}
              autoComplete="email"
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span id="email-error" className="text-red-500 text-sm">
                {errors.email}
              </span>
            )}
          </div>

          <div className="relative">
            <FloatingLabel
              variant="standard"
              label="Password"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={credentials.password}
              onChange={handleInputChange}
              className="dark:text-black"
              required
              disabled={loading}
              autoComplete="current-password"
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaRegEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
            {errors.password && (
              <span id="password-error" className="text-red-500 text-sm">
                {errors.password}
              </span>
            )}
          </div>

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
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>

          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
