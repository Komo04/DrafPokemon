// import { useState } from "react";
import "./App.css";
// import Card from "./components/Card";
// import { pokemon } from "./data";
import Header from "./pages";

function App() {
  // const [hide, setHide] = useState(false);
  return (
    <div className="App">
      <div className="bg-[url('./images/bg.png')] h-screen bg-cover bg-no-repeat bg-center ">
        <Header />

        {/* {
        pokemon.map((item, index) => (
          <Card key={index} title={item.name}  />
        ))
      } 
 */}


        {/* {!hide && <Card title="Pokemon 1" />}
        <button
          className="bg-purple-950 text-white w-20 h-10 rounded-lg absolute top-0 left-0"
          onClick={() => setHide((current) => !current)}
        >
          Hide
        </button>   */}
      </div>
    </div>
  );
}

export default App;
