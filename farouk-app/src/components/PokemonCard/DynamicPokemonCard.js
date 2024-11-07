import "./index.css";
import React, { useState, useEffect } from "react";

const DynamicPokemonCardImport = ({ pokemon }) => {
  const [DynamicComponent, setDynamicComponent] = useState(null);

  useEffect(() => {
    import("./index.js").then((module) => {
      setDynamicComponent(() => module.default);
    });
  }, []);

  return (
    <div>{DynamicComponent && <DynamicComponent pokemon={pokemon} />}</div>
  );
};

export default DynamicPokemonCardImport;
