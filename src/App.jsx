import { useState } from "react";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("JavaScript");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  const explainCode = async () => {
    if (!code.trim()) {
      setExplanation("Please paste some code first.");
      return;
    }

    setLoading(true);
    setExplanation("");

    try {
      const response = await fetch(
  "https://ai-code-assistant-2dq4.onrender.com/api/explain",
  {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          language,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setExplanation(data.explanation);
    } catch (error) {
      setExplanation("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1>🤖 AI Code Assistant</h1>
          <p className="subtitle">
            Understand your code with the help of AI.
          </p>
        </div>

        <div className="code-card">
          <div className="card-header">
            <div>
              <h2>Code Analyzer</h2>
              <p>Paste your code and select the programming language.</p>
            </div>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>JavaScript</option>
              <option>Python</option>
              <option>Java</option>
              <option>C++</option>
              <option>HTML</option>
              <option>CSS</option>
            </select>
          </div>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="// Paste your code here..."
          />

          <button onClick={explainCode} disabled={loading}>
            {loading ? "⏳ Analyzing..." : "✨ Explain Code"}
          </button>
        </div>

        <div className="result">
          <div className="result-header">
            <h2>🤖 AI Explanation</h2>
            {explanation && <span>Gemini AI</span>}
          </div>

          <div className="explanation">
            {explanation || (
              <p className="empty-message">
                Your AI-powered code explanation will appear here.
              </p>
            )}
          </div>
        </div>

        <footer>
          Built with React, Node.js, Express & Gemini AI
        </footer>
      </div>
    </div>
  );
}

export default App;