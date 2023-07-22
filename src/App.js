import React, { useState } from 'react'
import './App.css';

function App() {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return

    setMessages([...messages, { text: inputValue, sender: 'You'}])
    setInputValue('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Basic Chat App</h1>
      </header>
      <div className="chat-container">
        <div className="message-list">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <span className="sender">{message.sender}:</span>
              <span className="text">{message.text}</span>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default App;
