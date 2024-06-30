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
            setShowCard(true); 
        } catch (err) {
            setError(err.message);
        }
    }

    const handlePoem = () => {
        fetchPoem();
    }

    const handleShare = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(response)}`;
        window.open(twitterUrl, "_blank");
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
                    < button onClick={handleShare} className="share"><img className="twitter" src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png"/></button>
                </div>
            )}
        </div>
    );
}
