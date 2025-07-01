import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackEvent } from "../utils/eventTracker";

function Home() {
  useEffect(() => {
    const event = {
      type: "page_view",
      page: "/",
      timestamp: new Date().toISOString(),
      userId: "user-123",
      sessionId: "sess-001",
      details: {}
    };

    trackEvent(event);
  }, []);

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <Link to="/admin">Go to Admin Dashboard</Link>
      <br />
      <Link to="/page1">Go to Page 1</Link> <br />
      <Link to="/page2">Go to Page 2</Link> <br />
      <Link to="/page3">Go to Page 3</Link> <br />
      <Link to="/form">Go to Form Page</Link>
    </div>
  );
}

export default Home;
