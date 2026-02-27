import { useState } from 'react'
import './App.css'

const responses = [
  "It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely.",
  "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.",
  "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.",
  "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.",
  "Don't count on it.", "My reply is no.", "My sources say no.",
  "Outlook not so good.", "Very doubtful."
]

function App() {
  const [answer, setAnswer] = useState("Click to ask...")
  const [isShaking, setIsShaking] = useState(false)

  const askQuestion = () => {
    if (isShaking) return;
    setIsShaking(true);
    setAnswer("");
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * responses.length);
      setAnswer(responses[randomIndex]);
      setIsShaking(false);
    }, 1000);
  }

  return (
    <div className="app-container">
      <h1>Magic 8 Ball</h1>
      <div className={`magic-eight-ball ${isShaking ? 'shake' : ''}`} onClick={askQuestion}>
        <div className="window">
          <div className="answer">{answer}</div>
        </div>
      </div>
      <p className="instruction">Click the 8-ball for an answer.</p>
    </div>
  )
}

export default App