import "./App.css";
import MyHeader from "./myHeader";
import MyFooter from "./myFooter";

function App() {
  let name = "김승현";

  return (
    <div className="App">
      <MyHeader />
      <header className="App-header">
        <h2>hi {name} </h2>
      </header>
      <MyFooter />
    </div>
  );
}

export default App;
