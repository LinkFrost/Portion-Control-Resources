import Header from "./Components/Header.js";
import Introduction from "./Components/Introduction.js";
import ResourceList from "./Components/ResourceList.js";
import Citations from "./Components/Citations.js";
import "./Styles/App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="Main-Content">
        <Introduction></Introduction>
        <ResourceList></ResourceList>
        <Citations></Citations>
      </div>
    </div>
  );
}

export default App;
