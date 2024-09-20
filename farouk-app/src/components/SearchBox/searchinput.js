import React from "react";
import "./index.css";

const SearchInput = ({ onChange }) => (
  <input
    onChange={(e) => onChange(e.target.value)}
    type="text"
    placeholder="Buscar en este sitio web"
  />
);

export default SearchInput;
