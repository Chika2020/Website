import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.scss';
import App from './components/App';

const container = document.getElementById('root');
createRoot(container).render(<App />);
