import React from 'react';
import './App.css';
import './style/Countdown.css';
import { BIRTHDAY, TITLE } from './config';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">{TITLE}</div>
      </header>
      <div className="content">
        <Countdown date={BIRTHDAY} />
      </div>
    </div>
  );
}

export default App;
