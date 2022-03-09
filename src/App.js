import Drums from "./components/Drums";
import Text from "./components/Text";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>React Drums Machine</h3>
      </header>
      <div className="Content">
        <Drums />
        <Text />
      </div>
    </div>
  );
}

export default App;
