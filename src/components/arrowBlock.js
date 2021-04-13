import React, { useState, useEffect } from "react";

import { OutArrow } from "./outArrow";

export const ArrowBlock = ({ arrayArrow, ms = 2000 }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count <= arrayArrow.length) {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    }
  }, [count]);

  const arrayArrowToDisplay = arrayArrow.slice(0, count);

  return (
    <>
      {arrayArrowToDisplay.map((arrow, i) => (
        <OutArrow key={i} arrow={arrow} />
      ))}
    </>
  );
};
