import App from "./App.tsx";
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import ConfigProvider from './providers/ConfigProvider';
import ErrorBoundary from './providers/errorBoundary';
import { isEnvBrowser } from "./utils/misc.ts";
import "./index.css"


if (isEnvBrowser()) {
  const root = document.getElementById('root');

  // https://i.imgur.com/iPTAdYV.png - Night time img
  root!.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")';
  root!.style.backgroundSize = 'cover';
  root!.style.backgroundRepeat = 'no-repeat';
  root!.style.backgroundPosition = 'center';
}

const root = document.getElementById('root');

createRoot(root!).render(
  <StrictMode>
    <ConfigProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ConfigProvider>
  </StrictMode>
);
