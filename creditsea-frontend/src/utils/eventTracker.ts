import axios from "axios";

// Save a single event to localStorage
function saveEventOffline(event: any) {
  let stored = localStorage.getItem("offline_events");
  let events = stored ? JSON.parse(stored) : [];
  events.push(event);
  localStorage.setItem("offline_events", JSON.stringify(events));
}

// Send saved offline events to backend
function syncOfflineEvents() {
  let stored = localStorage.getItem("offline_events");
  if (!stored) {
    console.log("📭 No offline events to sync");
    return;
  }

  let events = JSON.parse(stored);
  console.log("📤 Syncing events:", events); // ✅ Debug log

  axios.post("http://localhost:5000/api/events", events)
    .then((res) => {
      console.log("✅ Synced events");
      localStorage.removeItem("offline_events");
    })
    .catch((err) => {
      console.log("❌ Sync failed:", err);
    });
}

// Track an event: send if online, save if offline
function trackEvent(event: any) {
  if (navigator.onLine) {
    axios.post("http://localhost:5000/api/events", [event])
      .then(() => {
        console.log("✅ Event sent to backend");
      })
      .catch((err) => {
        console.log("⚠️ Failed to send, saving offline");
        saveEventOffline(event);
      });
  } else {
    console.log("📴 Offline — saving event locally");
    saveEventOffline(event);
  }
}

export {saveEventOffline, syncOfflineEvents, trackEvent}
