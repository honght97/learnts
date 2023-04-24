import { useState } from "react";
import ContextAPI from "./components/contextapi/ContextAPI";
import Effect from "./components/effect/Effect";
import Memo from "./components/memo/Memo";
import State from "./components/state/State";
import UseId from "./components/useid/UseId";
import './App.css';
function App() {
  return (
    <div>
      {/* <State /> */}
      {/* <Effect /> */}
      {/* <Memo /> */}
      {/* <UseId /> */}
      <ContextAPI />
    </div>
  );
}

export default App;
