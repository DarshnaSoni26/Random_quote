import React, { useState, useEffect } from "react";
import "./Quote.css";

export default function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const quotesPerPage = 6;
  const totalPages = Math.ceil(50 / quotesPerPage);

  useEffect(() => {
    fetch(
      `https://api.quotable.io/quotes?limit=${quotesPerPage}&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => setQuotes(data.results))
      .catch((error) => console.error("Error fetching quotes:", error));
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      {quotes.map((quote, index) => (
        <div className="card custom" key={index}>
          <div className="card-header" style={{ background: "#ffc0a5" }}>
            {quote.tags && quote.tags.length > 0
              ? quote.tags.join(", ")
              : "Quote"}
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{quote.content}</p>
              <footer className="blockquote-footer">
                <cite title="Source Title">{quote.author}</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      ))}

      <div style={{ clear: "both" }}></div>

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center pagination-cust">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
