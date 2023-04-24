import React, { useEffect } from "react";
import useReducer from "./useReducer";
const fetchReducer = (state, action) => {
  switch (action.type) {
    case "fetchAPI/request":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case "fetchAPI/sucess":
      return {
        ...state,
        isLoading: action.isLoading,
        data: action.data,
        error: action.error,
      };
    case "fetchAPI/error":
      return {
        ...state,
        isLoading: action.isLoading,
        data: action.data,
        error: action.error,
      };
    default:
      return state;
  }
};
const Custom = () => {
  const [state, dispatch] = useReducer(fetchReducer, {
    data: [],
    isLoading: false,
    error: null,
  });
  const { data: users, isLoading, error } = state;
  const fetchUsers = async () => {
    dispatch({
      type: "fetchAPI/request",
      isLoading: true,
    });
    try {
      const response = await fetch("https://reqres.in/api/users");
      const { data } = await response.json();
      dispatch({
        type: "fetchAPI/sucess",
        isLoading: false,
        error: null,
        data,
      });
    } catch (error) {
      dispatch({
        type: "fetchAPI/sucess",
        isLoading: false,
        error: error,
        data: [],
      });
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  if (error) {
    return "Something wrong";
  }
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    users.map((user) => (
      <p>
        {user.first_name} {user.last_name}
      </p>
    ))
  );
};

export default Custom;
