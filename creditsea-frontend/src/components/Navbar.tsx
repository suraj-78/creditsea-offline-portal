import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    background: "#1e3a8a",
    padding: "12px 20px",
    display: "flex",
    gap: "16px",
    alignItems: "center",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "6px 12px",
    borderRadius: "6px",
    transition: "background 0.3s",
  };

  const hoverStyle = {
    background: "#3b82f6"
  };

  return (
    <nav style={navStyle}>
      {["/", "/page1", "/page2", "/page3", "/form", "/admin"].map((path, idx) => (
        <Link
          key={idx}
          to={path}
          style={linkStyle}
          onMouseOver={e => Object.assign(e.currentTarget.style, hoverStyle)}
          onMouseOut={e => Object.assign(e.currentTarget.style, linkStyle)}
        >
          {path === "/" ? "Home" : path.slice(1).replace("-", " ").replace(/^\w/, c => c.toUpperCase())}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
