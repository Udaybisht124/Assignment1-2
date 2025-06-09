import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlertComponent } from "./Alert";
import { FloatingLabel } from "flowbite-react";
import PATH_URL from "../utils/constant";
import { useAuthStore } from "../Store/authStore.jsx";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

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
  .signup-form-fadein {
    animation: fadeIn 1s ease-in-out;
  }
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`;

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    color: "failure",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const signup = useAuthStore((state) => state.signup);
  const timeoutRef = useRef(null);
  const ALERT_TIMEOUT = 1000;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const onSubmit = async (data) => {
    setAlert({ show: false, message: "", color: "failure" });
    setLoading(true);

    try {
      const sanitizedData = {
        name: data.name.trim(),
        email: data.email.trim(),
        password: data.password,
      };

      console.log("Frontend: Preparing signup data:", sanitizedData);
      if (!sanitizedData.email) {
        console.error("Frontend: Email is empty after sanitization");
        throw new Error("Email cannot be empty");
      }

      const response = await signup(sanitizedData);

      console.log("Frontend: Signup response:", response);

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
      console.error("Frontend: Signup error:", err);
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
        className={`max-w-md w-full bg-white rounded-lg shadow-lg p-8 signup-form-fadein ${
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
          Sign Up
        </h2>
        <form
          className="space-y-6 bg-white"
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
              autoComplete="new-password"
              className="dark:text-black"
              aria-describedby={errors.password ? "password-error" : undefined}
            />
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
      </div>
    </div>
  );
};
