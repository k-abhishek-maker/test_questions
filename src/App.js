import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import increment from "./action/action";
import Question1 from "./question1";
import Question2 from "./question2";
import Question3 from "./question3";
import Question5 from "./question5";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [state, setstate] = useState(null);
  async function getUser() {
    try {
      const response = await axios.get("https://www.example.com/api/get/1");
      console.log(response);
      setstate(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <h1>hiiiii</h1>
      <h2>{state}</h2>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button>-</button>
      <Question1 />
      <Question2 />
      <Question3 />
      {/* <Question5 /> */}
    </div>
  );
}

export default App;
