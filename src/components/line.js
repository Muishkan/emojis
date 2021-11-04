const Line = ({ obj, key }) => {
  return (
    <>
      <div key={key} className="line">
        <span>{obj.symbol}</span> <span>{obj.title}</span>
      </div>
    </>
  );
};

export default Line;
