import React from "react";

const Question5 = () => {
  var obj = {
    id: 4,
    name: "abc",
    id: 10,
    name: "ab2",
    id: 5,
    name: "abc3",
    id: 6,
    name: "abc5",
  };
  obj
    .sort(function (a, b) {
      return a.id - b.id;
    })
    .sort(function (a, b) {
      return a.name - b.name;
    });
  return <div></div>;
};
export default Question5;
