import { useEffect } from "react";
import { trackEvent } from "../utils/eventTracker";

import Navbar from "../components/Navbar";



function Page1() {
  // track when the page loads
  useEffect(() => {
    const event = {
      type: "page_view",
      page: "/page1",
      timestamp: new Date().toISOString(),
      userId: "user-123",
      sessionId: "sess-001",
      details: {}
    };

    trackEvent(event);
  }, []);

  // track when button is clicked
  function handleClick() {
    const event = {
      type: "click",
      page: "/page1",
      timestamp: new Date().toISOString(),
      userId: "user-123",
      sessionId: "sess-001",
      details: { element: "Next Button" }
    };

    trackEvent(event);
  }

  return (
    <div>
      <Navbar />
      <h1>This is Page 1</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Page1;
