import { useState } from 'react';
import { useAuthStore } from '../Store/AuthStore';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'flowbite-react'; // Flowbite Alert

const animatedBgStyles = `
  .animated-bg {
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
    background:black;
    animation: bgFadeIn 1s ease;
  }
  @keyframes bgFadeIn {
    from { opacity: 0;}
    to { opacity: 1;}
  }
  .bubble {
    position: absolute;
    opacity: 0.7;
    border-radius: 50%;
    animation: floatUp 10s infinite linear;
    background: radial-gradient(circle, rgba(255,255,255,0.6), rgba(30,60,114,0.2) 70%);
    filter: blur(1px);
  }
  .bubble1 { left: 10%; bottom: -100px; width: 80px; height: 80px; animation-delay: 0s; }
  .bubble2 { left: 30%; bottom: -150px; width: 50px; height: 50px; animation-delay: 2s; }
  .bubble3 { left: 60%; bottom: -120px; width: 100px; height: 100px; animation-delay: 4s; }
  .bubble4 { left: 80%; bottom: -90px; width: 60px; height: 60px; animation-delay: 1s; }
  .bubble5 { left: 50%; bottom: -110px; width: 40px; height: 40px; animation-delay: 3s; }
  @keyframes floatUp {
    0% { transform: translateY(0) scale(1);}
    80% { opacity: 0.8; }
    100% { transform: translateY(-110vh) scale(1.2); opacity: 0; }
  }
  .signup-form-fadein {
    animation: fadeInForm 1s cubic-bezier(.47,1.64,.41,.8);
  }
  @keyframes fadeInForm {
    from { opacity: 0; transform: translateY(40px);}
    to { opacity: 1; transform: translateY(0);}
  }
`;

export const SignupForm = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [alert, setAlert] = useState({ show: false, message: '', color: 'failure' });
  const { signup } = useAuthStore();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert({ show: false, message: '', color: 'failure' });

    const result = await signup(formData);
    if (!result.success) {
      setAlert({ show: true, message: result.error || "Signup failed!", color: 'failure' });
      return;
    }
    setAlert({ show: true, message: "Signup successful! Please login.", color: 'success' });

    // Optionally redirect after a short delay:
    // setTimeout(() => navigate('/login'), 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen h-screen bg-gray-900 relative">
      <style>{animatedBgStyles}</style>
      {/* Animated background */}
      <div className="animated-bg">
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <div className="bubble bubble4"></div>
        <div className="bubble bubble5"></div>
      </div>
      {/* Flowbite Alert at the top */}
      {alert.show && (
        <div className="fixed mt-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
          <Alert color={alert.color} onDismiss={() => setAlert({ ...alert, show: false })}>
            {alert.message}
          </Alert>
        </div>
      )}
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 signup-form-fadein" style={{ zIndex: 1 }}>
        <h2 className="text-2xl font-bold mb-6 text-blue-500 text-center">Sign Up</h2>
        <form className="space-y-6 bg-white" onSubmit={handleSubmit}>
          <div>
            <label className="block text-blue-600">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md bg-white text-gray-900 border-gray-300 shadow-sm"
              placeholder="Enter username"
              required
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
              required
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
              required
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