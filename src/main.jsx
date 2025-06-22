// Import React's StrictMode component for additional development checks and warnings
import { StrictMode } from 'react'
// Import createRoot function from React 18's new root API for rendering
import { createRoot } from 'react-dom/client'
// Import global CSS styles for the entire application
import './index.css'
// Import the main App component that serves as the root of our component tree
import App from './App.jsx'

// Create a React root using the DOM element with id 'root' and render the application
createRoot(document.getElementById('root')).render(
  // StrictMode wrapper enables additional checks and warnings in development mode
  <StrictMode>
    {/* Render the main App component inside StrictMode */}
    <App />
  </StrictMode>,
)
