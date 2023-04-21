import React from "react";
import { useState } from "react";

const State = () => {
  const initalValues = () => {
    let total = 0;
    for (let i = 0; i < 1000; i++) {
      total += i;
    }
    console.log("initalValues");
    return total;
  };
  const [count, setCount] = useState(() => {
    return initalValues();
  });
  const [user, setUser] = useState({
    name: "test",
    age: 12,
  });
  const handleClick = () => {
    setCount((prev) => {
      return (prev += 1);
    });
    setUser({ ...user, name: "updated" });
  };
  return (
    <div>
      <pre>funtion components</pre>
      <p>you click {count} times</p>
      <button onClick={handleClick}>Click</button>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
};

export default State;
