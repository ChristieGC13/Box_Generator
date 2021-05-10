import { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import Tabs from './components/Tabs';

function App() {
  const [inputs, setInputs] = useState({
    color:"",
  })

  const tabItems = [
    {header: "Tab 1", content: "Tab 1 content."},
    {header: "Tab 2", content: "Tab 2 content."},
    {header: "Tab 3", content: "Tab 3 content."},
]
  return (
    <div className="App">
      <header className="App-header">
        <BoxForm inputs={inputs} setInputs={setInputs} />
        <Tabs items={tabItems} />
      </header>
    </div>
  );
}

export default App;
