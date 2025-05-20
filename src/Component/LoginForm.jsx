import { useState } from 'react';
import { useAuthStore } from '../Store/AuthStore';
import { Link } from 'react-router';

// Add this style tag inside your component or in your CSS file for the animations
const animatedBgStyles = `
  .animated-bg {
    position: fixed;
    background
    top: 0; left: 0; width: 100vw; height: 100vh;
    z-index: 0;
    overflow: hidden;
    pointer-events: none; /* Prevent interaction */
  }

  .bubble {
    position: absolute;
    opacity: 0.7;
    animation: floatUp 10s infinite linear;
  }
  .bubble1 { left: 10%; bottom: -100px; width: 80px; animation-delay: 0s; }
  .bubble2 { left: 30%; bottom: -150px; width: 50px; animation-delay: 2s; }
  .bubble3 { left: 60%; bottom: -120px; width: 100px; animation-delay: 4s; }
  .bubble4 { left: 80%; bottom: -90px; width: 60px; animation-delay: 1s; }
  .bubble5 { left: 50%; bottom: -110px; width: 40px; animation-delay: 3s; }
  @keyframes floatUp {
    0% { transform: translateY(0) scale(1);}
    80% { opacity: 0.8; }
    100% { transform: translateY(-110vh) scale(1.2); opacity: 0; }
  }
`;

export const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const { login } = useAuthStore();

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const result = await login(credentials);
    if (!result.success) {
      setError(result.error);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen h-screen overflow-hidden shadow-4xl">
      {/* Animated background */}
      <style>{animatedBgStyles}</style>
      <div className="animated-bg" aria-hidden="true">
        {/* Animated SVG bubbles */}
        <svg className="bubble bubble1" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="#6dd5ed" />
        </svg>
        <svg className="bubble bubble2" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="25" fill="#2193b0" />
        </svg>
        <svg className="bubble bubble3" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="#b721ff" />
        </svg>
        <svg className="bubble bubble4" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" fill="#21d4fd" />
        </svg>
        <svg className="bubble bubble5" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="20" fill="#fff" />
        </svg>
      </div>
      {/* Login form content */}
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-2xl z-10" style={{marginTop:-75}}>
        <h2 className="text-2xl font-bold mb-6 text-blue-500 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form className="space-y-6 bg-transparent" onSubmit={handleSubmit}>
          <div>
            <label className="block text-blue-600">Email</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md bg-white text-gray-900 border-gray-300 shadow-sm"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label className="block text-blue-600">Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md bg-white text-gray-900 border-gray-300 shadow-sm"
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors shadow-md"
          >
            Login
          </button>
          <p className="text-center text-gray-400">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};