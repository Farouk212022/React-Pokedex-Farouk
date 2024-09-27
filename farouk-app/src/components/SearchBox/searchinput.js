import React from "react";
import "./index.css";

import { useFiltersContext } from "../../Context/filterCtx";

const SearchInput = () => {
  const { filters, setFilters } = useFiltersContext();
  return (
    <input
      onChange={(e) =>
        setTimeout(
          () => setFilters({ ...filters, search: e.target.value }),
          500
        )
      }
      type="text"
      placeholder="Buscar en este sitio web"
    />
  );
};

export default SearchInput;
