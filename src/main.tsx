import { createRoot } from 'react-dom/client';
import '@picocss/pico';

import './index.css';
import { App } from './App.tsx';

createRoot(document.getElementById('root')!).render(<App />);
