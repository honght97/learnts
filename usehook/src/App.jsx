import { useState } from "react";
import ContextAPI from "./components/contextapi/ContextAPI";
import Effect from "./components/effect/Effect";
import Memo from "./components/memo/Memo";
import State from "./components/state/State";
import Callback from "./components/callback/Callback";
import Memo01 from "./components/memo-usememo/Memo01";
import Ref from "./components/ref/Ref";
import Reducer from "./components/reducer/Reducer";
import Custom from "./components/customhooks/Custom";
import UseId from "./components/useid/UseId";
import "./App.css";
function App() {
  return (
    <div>
      {/* <State /> */}
      {/* <Effect /> */}
      {/* <Memo /> */}
      {/* <Callback /> */}
      {/* <Memo01 /> */}
      {/* <Ref /> */}
      {/* <Reducer /> */}
      {/* <Custom /> */}
      {/* <UseId /> */}
      <ContextAPI />
    </div>
  );
}

export default App;
