import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from '../KRG Intel Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
