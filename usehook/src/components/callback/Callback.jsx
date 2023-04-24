import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

const Callback = () => {
  const [users, setUsers] = useState([]);
  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`);
  }, []);
  const handleClick = () => {
    getData("users")
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users);
      });
  };
  // khi click vào button -> state thay đổi -> toàn bộ component re-render từ trên xuống dưới
  // -> getData trong child component dù không thay đổi -> vẫn re-render
  // để khắc phục -> sử dụng useCallback()
  return (
    <>
      <p>Data:</p>
      <button onClick={handleClick}>Get User Data</button>
      <p>{JSON.stringify(users)}</p>
      <ChildComponent getData={getData} />
    </>
  );
};

export default Callback;
