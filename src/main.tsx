import { render } from 'solid-js/web';
import '@picocss/pico';
import 'solid-devtools';

import './index.css';
import { App } from './App.tsx';

render(App, document.getElementById('root')!);
