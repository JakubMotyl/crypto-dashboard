const TableTop = () => {
  return (
    <div className="col-span-2 row-span-3 bg-[#1F243A] rounded-2xl p-container">
      {/* Buttons */}
      <div className="bg-black p-2 rounded-2xl flex items-center gap-2">
        <button className="table-btn p-item">Buy</button>
        <button className="table-btn p-item">Sell</button>
      </div>
      {/* Exchange container */}
      <div></div>
    </div>
  );
};

export default TableTop;
