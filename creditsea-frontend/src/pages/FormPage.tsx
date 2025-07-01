import { useState } from "react";
import { trackEvent } from "../utils/eventTracker";

function FormPage() {
  const [name, setName] = useState("");

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
  }

  return (
    <div>
      <h1>Submit Something</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
