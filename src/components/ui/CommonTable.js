export default function CommonTable({
  items,
  columns,
  prevHandler,
  nextHandler,
  currentPage
}) {
  // console.log(items);
  return (
    <>
      <h2>Page: {currentPage}</h2>
      <button onClick={prevHandler}>Prev</button>
      <button onClick={nextHandler}>Next</button>

      <table className="table table-striped-columns">
        <thead>
          <tr>
            {columns &&
              columns.length > 0 &&
              columns.map((column, index) => (
                <th key={`col-${index}`}>{column}</th>
              ))}
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </>
  );
}
