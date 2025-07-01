import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackEvent } from "../utils/eventTracker";
// import Navbar from "../components/Navbar";

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

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link to="/admin" style={linkStyle}>Go to Admin Dashboard</Link> <br />
        <Link to="/page1" style={linkStyle}>Go to Page 1</Link> <br />
        <Link to="/page2" style={linkStyle}>Go to Page 2</Link> <br />
        <Link to="/page3" style={linkStyle}>Go to Page 3</Link> <br />
        <Link to="/form" style={linkStyle}>Go to Form Page</Link>
      </div>
    </div>
  );
}

const linkStyle = {
  display: "inline-block",
  margin: "10px",
  padding: "10px 16px",
  backgroundColor: "#2563eb",
  color: "white",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "background 0.3s"
} as React.CSSProperties;

export default Home;
