import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { syncOfflineEvents } from "./utils/eventTracker";
import { hasUnsyncedEvents } from "./utils/eventTracker";

window.addEventListener("beforeunload", (e) => {
  const isOffline = !navigator.onLine;
  const unsynced = hasUnsyncedEvents();

  if (isOffline && unsynced) {
    e.preventDefault();
    e.returnValue = "You're offline and have unsynced events. Are you sure you want to leave?";
  }
});

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
