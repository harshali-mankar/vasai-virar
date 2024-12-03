'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Pagination = ({ currentPage, totalPages, basePath }) => {
  const router = useRouter();

  const handlePageChange = (page) => {
    router.push(`${basePath}?page=${page}`);
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination__button"
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`pagination__button ${
            currentPage === index + 1 ? 'active' : ''
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination__button"
      >
        Next
      </button>

      <style jsx>{`
        .pagination {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .pagination__button {
          padding: 0.5rem 1rem;
          border: 1px solid #ccc;
          background: white;
          cursor: pointer;
        }
        .pagination__button.active {
          background: #0070f3;
          color: white;
          border-color: #0070f3;
        }
        .pagination__button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default Pagination;
