// import Line from "./line";

const Search = ({ str, setStr, setResults }) => {
  return (
    <div className="header">
      <h2>🤓 Emoji Search 🤓</h2>
      <input
        className="search"
        type="text"
        name="search"
        id="search"
        onChange={(event) => setStr(event.target.value.toLowerCase())}
      />

      <div
        className="results"
        onChange={(event) => setResults(parseInt(event.target.value))}
      >
        <span>Max Results: </span>
        <input type="radio" name="results" value="20" id="20" />
        <label htmlFor="30">20</label>
        <input type="radio" name="results" value="30" id="30" />
        <label htmlFor="20">30</label>
        <input type="radio" name="results" value="40" id="40" />
        <label htmlFor="40">40</label>
        <input type="radio" name="results" value="50" id="50" />
        <label htmlFor="50">50</label>
      </div>
    </div>
  );
};

export default Search;
