import React, { useCallback, useState } from "react";
import Child from "./Child";

const Memo01 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Test");
  const handleClick = () => {
    setCount((prev) => {
      return (prev += 1);
    });
  };
  const getData = useCallback(() => {
    fetch("https://reqres.in/api/users");
  }, []);
  // để ý => khi count thay đổi => component Memo01 sẽ re-render
  //=> getData sẽ lại được tạo ra => sẽ có địa chỉ khác nhau
  // => getData thay đổi => child component thay đổi vì có getData thay đổi => re-render
  // => để khác phục => useCallback()
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click</button>
      <Child name={name} getData={getData} />
    </div>
  );
};

export default Memo01;
