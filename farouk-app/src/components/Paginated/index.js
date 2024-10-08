import React from "react";
import "./index.css";
import { useFiltersContext } from "../../Context/filterCtx";

const Paginated = ({ total }) => {
  const { filters, setFilters } = useFiltersContext();
  const { page } = filters;
  const handlePrevious = () => {
    if (page > 0) {
      setFilters({ ...filters, page: page - 1 });
    }
  };

  const handleNext = () => {
    if (page < total) {
      setFilters({ ...filters, page: page + 1 });
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
