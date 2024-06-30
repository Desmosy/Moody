import { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./PoemBox.css";  // Assuming you will create a separate CSS file

export default function PoemBox() {
    const [response, setResponse] = useState("");
    const [error, setError] = useState(null);
    const [prompt, setPrompt] = useState(""); 
    const [showCard, setShowCard] = useState(false);

    const fetchPoem = async () => {
        try {
            const genAI = new GoogleGenerativeAI("AIzaSyA6aT6NGyZag_sKeGCTqakcO-onXGM6-NQ");
            const model = genAI.getGenerativeModel({
                model: "gemini-1.5-flash"
            });

            const result = await model.generateContent(prompt);
            const text = result.response.text;
            setResponse(text);
            setShowCard(true); // Show the card when response is set
        } catch (err) {
            setError(err.message);
        }
    }

    const handlePoem = () => {
        fetchPoem();
    }

    return (
        <div className="poem-container">
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your prompt here"
            />
            <button onClick={handlePoem}>Submit</button>

            {showCard && (
                <div className="poem-card">
                    {error ? <p>{error}</p> : <p>{response}</p>}
                </div>
            )}
        </div>
    );
}
