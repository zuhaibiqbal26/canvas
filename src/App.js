import logo from "./logo.svg";
import "./App.css";
import Canvas from "./Canvas";

function App() {
  return (
    <div className="App">
      
      <Canvas width = {window.innerWidth} height = {400} />
    </div>
  );
}

export default App;
