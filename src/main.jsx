import React from "react";
import ReactDOM from "react-dom/client";
import { Padre } from "./07-tarea-memo/Padre";
import { MultipleCustomHooks } from "./examples/MultipleCustomHooks";
import { HooksApp } from "./HooksApp";
import "./index.css";
import { CallbackHook } from "./memos/CallbackHook";
import { MemoHook } from "./memos/MemoHook";
import { Memorize } from "./memos/Memorize";
import { FormWithCustomHook } from "./useEffect/FormWithCustomHook";
import { SimpleForm } from "./useEffect/SimpleForm";
import { Layout } from "./useLayoutEffect/Layout";
import { FocusScreen } from "./useRef/FocusScreen";
import { CounterApp } from "./useState/CounterApp";
import { CounterCustomHook } from "./useState/CounterCustomHook";

import "./useReducer/intro-reducer";
import { TodoApp } from "./useReducer/TodoApp";
import { MainApp } from "./useContext/MainApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    {/* <React.StrictMode> */}
      <MainApp />

    {/* </React.StrictMode> */}
  </BrowserRouter>
);
