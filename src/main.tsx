import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Providers from './Providers';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);