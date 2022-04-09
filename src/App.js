import React from 'react';
import './App.css';
import UseEffectHook from './hooks/UseEffectHook';
import UseRefHook from './hooks/UseRefHook';
import UseStateHook from './hooks/UseStateHook';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      <UseRefHook />
    </div>
  );
}

export default App;
