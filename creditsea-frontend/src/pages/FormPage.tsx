import { useState } from "react";
import { trackEvent } from "../utils/eventTracker";
import { useEffect } from "react";


import Navbar from "../components/Navbar";


function FormPage() {
  const [name, setName] = useState("");

  // Load saved input on mount
  useEffect(() => {
  const savedName = localStorage.getItem("form_name");
  if (savedName) {
    setName(savedName);
  }
}, []);

// Save input to localStorage on change
  useEffect(() => {
  localStorage.setItem("form_name", name);
}, [name]);


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const event = {
      type: "form_submit",
      page: "/form",
      timestamp: new Date().toISOString(),
      userId: "user-123",
      sessionId: "sess-001",
      details: {
        fields: { name: name }
      }
    };

    trackEvent(event);
    alert("Form submitted!");
    setName("");
    localStorage.removeItem("form_name"); // ← add this

  }

  return (
    <div>
      <Navbar />

      <div
        style={{
          height: "calc(100vh - 60px)", // subtract navbar height
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f0f2f5",
          flexDirection: "column"
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Submit Something</h1>

        <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
          <input
            type="text"
            placeholder="Write something"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "15px 20px",
              fontSize: "18px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              width: "300px",
              marginBottom: "20px"
            }}
          />
          <br />
          <button
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormPage;
