import React from "react";

const Question2 = () => {
  const a = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];
  let count = 0;
  let result = 0;
  for (let index = 0; index < a.length; index++) {
    if (a[index] === 0) {
      count = 0;
    } else {
      count = count + 1;
      if (count > result) {
        result = count;
      }
    }
  }
  return <div>{result}</div>;
};

export default Question2;
