import { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';

function App() {
  const [inputs, setInputs] = useState({
    color:"",
  })
  return (
    <div className="App">
      <header className="App-header">
        <BoxForm inputs={inputs} setInputs={setInputs} />
      </header>
    </div>
  );
}

export default App;
