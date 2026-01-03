export default function Pagination({ totalPages, currentPage, setPage }) {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          style={{
            background: currentPage === i + 1 ? "#F54927" : "#a0220cff"
          }}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
