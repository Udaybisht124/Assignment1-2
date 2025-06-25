/**
 * OAuth success page that handles token parameter from OAuth flow.
 * Stores token in cookie and sets user as logged in.
 * Redirects to home page after successful login.
 *
 * @returns {React.ReactElement} OAuth success page element
 */

import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../Store/authStore";

const OauthSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const loginWithToken = useAuthStore((state) => state.loginWithToken);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) {
      loginWithToken(token); // Store token and set user as logged in
      navigate("/home"); // Redirect to home
    } else {
      navigate("/login");
    }
  }, [location, loginWithToken, navigate]);

  return <div>Logging you in...</div>;
};

export default OauthSuccess;
