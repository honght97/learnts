import React, { useState } from "react";

const useReducer = (reducer, initValue) => {
  const [state, setState] = useState(initValue);
  const dispatch = (action) => {
    const newSate = reducer(state, action);
    setState(newSate);
  };
  return [state, dispatch];
};

export default useReducer;
