import React, {useState ,useEffect} from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput'
import './App.css';

function App() {
  useEffect(()=>{
    
  }, []);
  const [showParagraph, setShowParagraph] = useState(false);  
  console.log("APP RUNNING");
  const toggleParagraphHandler = () => {
  	setShowParagraph(prevShowParagraph => !prevShowParagraph);
  }
  
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={toggleParagraphHandler}>Toggle paragraph!</Button>
    </div>
  );
}

export default App;
