function Pagination({ page, setPage }) {
  const previousHandler = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
  };

  const nextHandler = () => {
    if (page === 10) return;
    setPage((page) => page + 1);
  };

  return (
    <div>
      <button onClick={previousHandler}>Previous</button>
      <p style={page === 1 ? { color: "red" } : null}>1</p>
      <p style={page === 2 ? { color: "red" } : null}>2</p>
      <span>...</span>
      {page > 2 && page < 9 && (
        <div>
          <p>{page}</p>
          <span>...</span>
        </div>
      )}
      <p>9</p>
      <p>10</p>
      <button onClick={nextHandler}>Next</button>
    </div>
  );
}

export default Pagination;
