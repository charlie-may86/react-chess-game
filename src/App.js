import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Square from "./components/squareFactory";

function App() {
  return (
    <div>
      <Header />
      <Square />
    </div>
  );
}

export default App;
