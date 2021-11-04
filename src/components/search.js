// import Line from "./line";

const Search = ({ str, setStr }) => {
  return (
    <div className="header">
      <h2>🤓 Emoji Search 🤓</h2>
      <input
        className="search"
        type="text"
        name="search"
        id="search"
        onChange={(event) => setStr("" + event.target.value)}
      />
    </div>
  );
};

export default Search;
