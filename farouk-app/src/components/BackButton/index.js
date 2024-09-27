import React from "react";
import "./index.css";
import { useFiltersContext } from "../../Context/filterCtx";
import { Link } from "react-router-dom";

const BackButton = () => {
  const { filters, setFilters } = useFiltersContext();
  const backAction = () => {
    setFilters({ ...filters, search: "" });
  };
  return (
    <Link className="backButton" onClick={backAction} to="/">
      Volver
    </Link>
  );
};

export default BackButton;
