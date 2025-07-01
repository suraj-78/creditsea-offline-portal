import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { syncOfflineEvents } from "./utils/eventTracker";

// When browser comes online again, try syncing
window.addEventListener("online", () => {
  console.log("You are online now. Trying to sync the data...");
  syncOfflineEvents();
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
