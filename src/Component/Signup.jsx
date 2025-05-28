import { useState } from 'react';
import { useAuthStore } from '../Store/AuthStore';
import { Link, useNavigate } from 'react-router-dom';
import { AlertComponent } from './Alert';
import { FloatingLabel } from 'flowbite-react';

const animatedBgStyles = `
  .animated-bg {
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
    background:#1f2937;
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
  const [loading, setLoading] = useState(false);
  const { signup } = useAuthStore();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert({ show: false, message: '', color: 'failure' });
    setLoading(true);

    const result = await signup(formData);
    setLoading(false);

    if (!result.success) {
      setAlert({ show: true, message: result.error || "Signup failed!", color: 'failure' });
      return;
    }
    setAlert({ show: true, message: "Signup successful! Please login.", color: 'success' });

    // Delay redirect so alert is visible
    setTimeout(() => {
      setAlert({ show: false, message: '', color: 'success' });
      navigate('/login');
    }, 1800);
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

      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 signup-form-fadein" style={{ zIndex: 1 }}>
        {/* Alert above the form */}
        {alert.show && (
          <div className="mb-6">
            <AlertComponent message={alert.message} color={alert.color} />
          </div>
        )}

        <h2 className="text-2xl font-bold mb-6 text-blue-500 text-center">Sign Up</h2>
        <form className="space-y-6 bg-white" onSubmit={handleSubmit} autoComplete="off">
          <div>
            <FloatingLabel
              variant="standard"
              label="Username"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              disabled={loading}
              autoComplete="username"
            />
          </div>
          <div>
            <FloatingLabel
              variant="standard"
              label="Email"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={loading}
              autoComplete="email"
            />
          </div>
          <div>
            <FloatingLabel
              variant="standard"
              label="Password"
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              disabled={loading}
              autoComplete="new-password"
            />
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-3 bg-blue-500 text-white rounded-md transition-colors shadow-md font-semibold flex items-center justify-center ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-600"}`}
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                Signing Up...
              </>
            ) : (
              "Sign Up"
            )}
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