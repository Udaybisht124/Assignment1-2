// Base URL for the backend API server running on localhost port 5000
const PATH_URL = 'http://localhost:5000/';
// Google OAuth client ID for authentication integration
const GOOGLE_CLIENT_ID = "1076217102026-t3t2kutkebuc3lhdf4h3darov4s70k9r.apps.googleusercontent.com"; // <-- Replace with your real client ID

// Export PATH_URL as the default export for API requests
export default PATH_URL;
// Export GOOGLE_CLIENT_ID as a named export for OAuth configuration
export { GOOGLE_CLIENT_ID };
