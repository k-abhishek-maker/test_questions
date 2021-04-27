import React from "react";

const Question3 = () => {
  const a = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
  let no = -1;
  for (let index = 0; index < a.length - 1; index++) {
    for (let i = index + 1; i < a.length; i++) {
      if (a[index] === a[i]) {
        no = a[index];
      }
    }
  }
  return <div>{no}</div>;
};

export default Question3;
