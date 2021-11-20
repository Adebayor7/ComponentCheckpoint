import logo from "./logo.svg";
import "./App.css";
import "./Components/Profile/styles.css";
import Card from "./Components/Profile/Card";
import Address from "./Components/Profile/Address";
import FullName from "./Components/Profile/FullName";

function App() {
  return (
    <div className="App">
      <div className="port">
        <FullName />
        <Address />
        <Card />
      </div>
    </div>
  );
}

export default App;
