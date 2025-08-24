import { useParams } from "react-router-dom";
import { jobListings } from "../../CareerPage/JobData";
import { useState } from "react";
import "./ApplyForJobStyles.css";

const ApplyJob = () => {
  const { jobId } = useParams();
  const job = jobListings.find((j) => j.id === jobId);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };
  const [statusMessage, setStatusMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("resume", form.resume);

    try {
      const response = await fetch("http://localhost:5000/apply", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage("✅ Message sent successfully!");

        // 🔁 Reset form state
        setForm({
          name: "",
          email: "",
          message: "",
          resume: null,
        });

        // ✅ Reset file input manually
        document.getElementById("resume-input").value = "";
      } else {
        setStatusMessage("❌ Failed to send message.");
      }
    } catch (error) {
      setStatusMessage("❌ Error occurred while sending.");
    }
  };

  return (
    <div className="application-form">
      <h2>Apply for {job?.title || "the position"} Position</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          type="text"
          required
          value={form.name} // <- bind value
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          required
          value={form.email} // <- bind value
          onChange={handleChange}
        />

        <label>Resume (PDF)</label>
        <input
          id="resume-input" // add this
          name="resume"
          type="file"
          accept=".pdf"
          required
          onChange={handleChange}
        />

        <label>Message</label>
        <textarea
          name="message"
          rows="5"
          value={form.message} // <- bind value
          onChange={handleChange}
        />

        <button type="submit" className="apply-btn">
          Submit
        </button>
      </form>

      {/* ✅ Status Message */}
      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  );
};

export default ApplyJob;
