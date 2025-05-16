import { useState } from 'react';
import { useAuthStore } from '../Store/AuthStore';
import { Link } from 'react-router';

export const SignupForm = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const { signup } = useAuthStore();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const result = await signup(formData);
    if (!result.success) {
      setError(result.error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen h-screen bg-gray-900">
      <div className="max-w-md w-full bg-black rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form className="space-y-6 bg-transparent" onSubmit={handleSubmit}>
          <div>
            <label className="block text-blue-600">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md bg-white text-gray-900 border-gray-300 shadow-sm"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="block text-blue-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
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
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md bg-white text-gray-900 border-gray-300 shadow-sm"
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors shadow-md"
          >
            Sign Up
          </button>
          <p className="text-center text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};