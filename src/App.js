import React from 'react';
import './App.css';
import CustomHook from './hooks/CustomHook';
import UseCallbackHook from './hooks/UseCallbackHook';
import UseContextHook from './hooks/UseContextHook';
import UseEffectHook from './hooks/UseEffectHook';
import UseMemoHook from './hooks/UseMemoHook';
import UseReducerHook from './hooks/UseReducerHook';
import UseRefHook from './hooks/UseRefHook';
import UseStateHook from './hooks/UseStateHook';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UseCallbackHook /> */}
      {/* <UseContextHook /> */}
      {/* <UseReducerHook /> */}
      <CustomHook />
    </div>
  );
}

export default App;
