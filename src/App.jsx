import { useState } from 'react'
import './App.css'

const responses = [
  // Positive (Green)
  { text: "It is certain.", type: "positive" },
  { text: "It is decidedly so.", type: "positive" },
  { text: "Without a doubt.", type: "positive" },
  { text: "Yes definitely.", type: "positive" },
  { text: "You may rely on it.", type: "positive" },
  { text: "As I see it, yes.", type: "positive" },
  { text: "Most likely.", type: "positive" },
  { text: "Outlook good.", type: "positive" },
  { text: "Yes.", type: "positive" },
  { text: "Signs point to yes.", type: "positive" },
  // Neutral (Blue)
  { text: "Reply hazy, try again.", type: "neutral" },
  { text: "Ask again later.", type: "neutral" },
  { text: "Better not tell you now.", type: "neutral" },
  { text: "Cannot predict now.", type: "neutral" },
  { text: "Concentrate and ask again.", type: "neutral" },
  // Negative (Red)
  { text: "Don't count on it.", type: "negative" },
  { text: "My reply is no.", type: "negative" },
  { text: "My sources say no.", type: "negative" },
  { text: "Outlook not so good.", type: "negative" },
  { text: "Very doubtful.", type: "negative" }
]

function App() {
  const [answer, setAnswer] = useState({ text: "Click to ask...", type: "neutral" })
  const [isShaking, setIsShaking] = useState(false)

  const askQuestion = () => {
    if (isShaking) return;
    setIsShaking(true);
    setAnswer({ text: "", type: "neutral" });
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
          <div className={`answer ${answer.type}`}>{answer.text}</div>
        </div>
      </div>
      <p className="instruction">Click the 8-ball for an answer.</p>
    </div>
  )
}

export default App