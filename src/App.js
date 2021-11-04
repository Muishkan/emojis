import "./App.css";
import Search from "./components/search";
import Line from "./components/line";
import Footer from "./components/footer";
import data from "./components/data.json";
import { useState } from "react";

function App() {
  //Set initial state, use state
  const [str, setStr] = useState("");
  const [results, setResults] = useState(20);
  console.log(str);

  //Function to get search results and roll out emojies elements
  const searchResult = () => {
    const arr = [];
    for (let [index, obj] of data.entries()) {
      if (obj.keywords.includes(str)) {
        if (arr.length < results) {
          arr.push(<Line key={index} obj={obj} />);
        } else {
          return arr;
        }
      }
    }
    return arr;
  };

  return (
    <div className="container">
      <Search str={str} setStr={setStr} setResults={setResults} />
      {searchResult()};
      <Footer />
    </div>
  );
}

export default App;
