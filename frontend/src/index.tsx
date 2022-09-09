import React from 'react';
import { createRoot } from 'react-dom/client';
import './main.scss';
import App from './App';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);
