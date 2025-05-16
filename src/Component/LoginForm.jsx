import { useState } from 'react';
import { useAuthStore } from '../Store/AuthStore';
import { Link } from 'react-router';

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
    <div className="flex items-center justify-center min-h-screen h-screen" style={{backgroundColor:'#111827'}}>
      <div className="max-w-md w-full p-8 bg-black rounded-lg shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">Login</h2>
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