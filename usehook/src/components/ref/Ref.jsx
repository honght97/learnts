import React, { useEffect, useRef, useState } from "react";

const Ref = () => {
  // useRef(initialValue) => trả về 1 object => có 1 filed là current
  // current ( có giá trị chính là giá trị khỏi tạo truyền vào)
  const countRef = useRef(0);
  const obj = {
    current: 0,
  };
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  console.log("ref", { ref });
  useEffect(() => {
    ref.current.focus();
  }, []);
  const handleClick = () => {
    setCount((prev) => {
      return prev + 1;
    });
    countRef.current = countRef.current + 1;
    obj.current = obj.current + 1;
  };
  console.log({
    count,
    countRef,
    obj,
  });
  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Ref;
