import { useState } from "react";
import Effect from "./components/effect/Effect";
import Memo from "./components/memo/Memo";
import State from "./components/state/State";
import Callback from "./components/callback/Callback";
import Memo01 from "./components/memo-usememo/Memo01";
import Ref from "./components/ref/Ref";
import Reducer from "./components/reducer/Reducer";
import Custom from "./components/customhooks/Custom";
function App() {
  return (
    <div className="App">
      {/* <State /> */}
      {/* <Effect /> */}
      {/* <Memo /> */}
      {/* <Callback /> */}
      {/* <Memo01 /> */}
      {/* <Ref /> */}
      {/* <Reducer /> */}
      <Custom />
    </div>
  );
}

export default App;
