import React from "react";
import "./index.css";

const Paginated = ({ page, total, setPage }) => {
  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < total) {
      setPage(page + 1);
    }
  };

  return (
    <div className="navigate-buttons">
      <button onClick={handlePrevious}>Anterior</button>
      <span>{page + 1}</span>
      <button onClick={handleNext}>Siguiente</button>
    </div>
  );
};

export default Paginated;
