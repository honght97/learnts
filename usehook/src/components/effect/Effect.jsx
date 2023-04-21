import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    // componentDidMount & componentDidUpdate
    document.title = `you clicked ${count} times`;
    console.log("useEffect");
  }, [count]);
  useEffect(() => {
    fetch(`https://reqres.in/api/${action}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, [action]);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    //componentDidMount
    document.addEventListener("scroll", handleScroll);
    return () => {
      // componentWillUnmount
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ height: "3000px" }}>
      <p>you clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={() => {
          setAction("users");
        }}
      >
        get user
      </button>
      <button
        onClick={() => {
          setAction("comments");
        }}
      >
        get comment
      </button>
    </div>
  );
};

export default Effect;
