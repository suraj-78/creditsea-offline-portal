import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [events, setEvents] = useState([]);
  const [summary, setSummary] = useState([]);

  // Fetch all events
  const getAllEvents = () => {
    axios.get("http://localhost:5000/api/analytics")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.log("Error fetching events:", err);
      });
  };

  // Fetch summary counts
  const getSummary = () => {
    axios.get("http://localhost:5000/api/analytics/summary")
      .then((res) => {
        setSummary(res.data);
      })
      .catch((err) => {
        console.log("Error fetching summary:", err);
      });
  };

  useEffect(() => {
    getAllEvents();
    getSummary();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2> Admin Analytics Dashboard</h2>

      <h3>Summary:</h3>
      <ul>
        {summary.map((item: any) => (
          <li key={item._id}>
            {item._id}: {item.count}
          </li>
        ))}
      </ul>

      <h3>All Events:</h3>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Page</th>
            <th>User</th>
            <th>Session</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e: any, index) => (
            <tr key={index}>
              <td>{e.type}</td>
              <td>{e.page}</td>
              <td>{e.userId}</td>
              <td>{e.sessionId}</td>
              <td>{new Date(e.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
