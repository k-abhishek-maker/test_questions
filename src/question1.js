import React from "react";

const Question1 = () => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  const b = a.map((i) => {
    if (i % 2 == 0) {
      return i;
    }
  });

  return <div>{b}</div>;
};

export default Question1;
