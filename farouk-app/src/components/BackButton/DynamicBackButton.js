import "./index.css";
import React, { useState, useEffect } from "react";

const DynamicBackButtonImport = ({ pokemon }) => {
  const [DynamicComponent, setDynamicComponent] = useState(null);

  useEffect(() => {
    import("./index.js").then((module) => {
      setDynamicComponent(() => module.default);
    });
  }, []);

  return (
    <div>{DynamicComponent && <DynamicComponent/>}</div>
  );
};

export default DynamicBackButtonImport;
