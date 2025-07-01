import { useEffect } from "react";
import { trackEvent } from "../utils/eventTracker";
import Navbar from "../components/Navbar";

function Page2() {
  // Track page view when user visits Page 2
  useEffect(() => {
    const event = {
      type: "page_view",
      page: "/page2",
      timestamp: new Date().toISOString(),
      userId: "user-123",
      sessionId: "sess-001",
      details: {}
    };

    trackEvent(event);
  }, []);

  // Track click event
  function handleClick() {
    const event = {
      type: "click",
      page: "/page2",
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
      <h1>This is Page 2</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Page2;
