import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { AuthProvider } from './context/authContext.jsx';
import { SearchProvider } from './context/searchContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <SearchProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SearchProvider>
    </AuthProvider>
  </StrictMode>
);
