import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './scss/index.scss';
import { ContextProvider } from './context/useContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
