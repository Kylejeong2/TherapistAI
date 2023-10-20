import React from 'react';
import TherapistChat from './therapistchat.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Therapist AI</h1>
      </header>
      <main>
        <TherapistChat />
      </main>
    </div>
  );
}

export default App;
