import React, { useState } from "react";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const handleSubmit = () => {
    console.log("Feedback:", feedback);
    setFeedback("");
  };

  return (
    <div>
      <h2>Submit Feedback</h2>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Write your feedback here"
        cols={30}
        rows={30}
      ></textarea>
      <button
        onClick={handleSubmit}
        style={{
          cursor: "pointer",
          backgroundColor: "blue",
          padding: "10px",
          marginTop: "30px",
          border: "none",
          borderRadius: "15px",
          color: "white"
        }}
      >
        Submit Feedback
      </button>
    </div>
  );
};

export default FeedbackForm;
