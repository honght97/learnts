import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action) {
    case "TANG":
      return state + 1;
    case "GIAM":
      return state - 1;
    case "XOA_TAT_CA":
      return 0;
    default:
      return state;
  }
};
const reducer2 = (state, action) => {
  switch (action.type) {
    case "GAN_GIA_TRI":
      return action.data;
    default:
      return state;
  }
};
const initState = {
  loading: false,
  data: [],
  error: null,
};
const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case "GET_USER_ERROR":
      return {
        ...state,
        data: [],
        error: action.data,
      };
    default:
      return state;
  }
};
const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  const [count2, dispatch2] = useReducer(reducer2, 0);
  const [user, userDispatch] = useReducer(userReducer, initState);
  const getUser = () => {
    userDispatch({
      type: "GET_USER_REQUEST",
    });
    setTimeout(() => {
      fetch(`https://reqres.in/api/users`)
        .then((res) => res.json())
        .then((data) => {
          userDispatch({
            type: "GET_USER_SUCCESS",
            data: data,
          });
        })
        .catch((error) => {
          userDispatch({
            type: "GET_USER_ERROR",
            data: error,
          });
        });
    }, 2000);
  };
  return (
    <div>
      <button onClick={getUser}>Get user</button>
      {user.loading ? <p>Loading...</p> : <p>{JSON.stringify(user)}</p>}
      <p>count: {count}</p>
      <button onClick={() => dispatch("TANG")}>Tăng</button>
      <button onClick={() => dispatch("GIAM")}>Giảm</button>
      <button onClick={() => dispatch("XOA_TAT_CA")}>Xóa hết dữ liệu</button>
      <p>count 2: {count2}</p>
      <button
        onClick={() =>
          dispatch2({
            type: "GAN_GIA_TRI",
            data: 10,
          })
        }
      >
        Gan gia tri
      </button>
    </div>
  );
};

export default Reducer;
