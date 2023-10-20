import React, { useState, useRef } from 'react';
import './TherapistChat.css';

function TherapistChat() {
  const [messages, setMessages] = useState([]);
  const inputRef = useRef();

  // Function to handle sending user messages
  const handleSendMessage = () => {
    // Get the user's message from the input field
    const userMessage = inputRef.current.value.trim();
    
    if (userMessage) {
      // Add the user's message to the state
      setMessages([...messages, { text: userMessage, user: true }]);
      
      // Here, you would typically send the user's message to a backend or chatbot API
      // and receive the response to display in the chat.
      // For simplicity, we're not showing the response handling in this example.

      // Clear the input field
      inputRef.current.value = '';
    }
  };

  return (
    <div className="chat-container">
      <div className="chat">
        {/* Display chat messages */}
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.user ? 'user' : 'therapist'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input ref={inputRef} type="text" placeholder="Type your message..." />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default TherapistChat;
