import "./App.css";
import Search from "./components/search";
import Line from "./components/line";
import Footer from "./components/footer";
import data from "./components/data.json";
import { useState } from "react";

function App() {
  const [str, setStr] = useState("");
  console.log(str);
  return (
    <div className="container">
      <Search str={str} setStr={setStr} />
      {data.map((obj, index) => {
        if (obj.keywords.includes(str)) {
          return <Line key={index} obj={obj} />;
        }
      })}
      <Footer />
    </div>
  );
}

export default App;
