import React, { useMemo } from "react";
import { useState } from "react";
const expensiveFunction = (number) => {
  console.log("bat dau");
  const start = new Date();
  // đợi ở đây 3s
  while (new Date() - start < 3000);
  console.log("ket thuc", new Date() - start, "ms");
  return number * number;
};
const Memo = () => {
  const [count, setCount] = useState(0);
  const number = useMemo(() => {
    return expensiveFunction(10);
  }, []);
  const handleClick = () => {
    setCount((prev) => {
      return (prev += 1);
    });
  };
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={handleClick}>Click</button>
      <p>number: {number}</p>
    </div>
  );
};
  
export default Memo;
