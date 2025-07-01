import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <Link to="/page1">Go to Page 1</Link>
    </div>
  );
}

export default Home;
