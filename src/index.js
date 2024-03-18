import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTemplate from "./template/HomeTemplate";
import HomePage from "./page/HomePage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import DemoUseState from "./page/DemoUseState/DemoUseState";
import ExChangeAvatar from "./page/DemoUseState/ExChangeAvatar";
import UseEffect_didmount from "./page/DemoUseEffect/UseEffect_didmount";
import UseEffect_didUpdate from "./page/DemoUseEffect/UseEffect_didUpdate";
import UseEffect_Unmount from "./page/DemoUseEffect/UseEffect_Unmount";
import { ChangeFontSizeRedux } from './page/Hook/ChangeFontSizeRedux';
import CommentRedux from "./page/Hook/CommentRedux";
import DemoUseRef from "./page/DemoUseRef/DemoUseRef";
import DemoHookFormik from "./page/DemoHookFormik/DemoHookFormik";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<HomePage />}></Route>
          <Route path="demo-state" element={<DemoUseState />}></Route>
          <Route path="ex-state" element={<ExChangeAvatar />}></Route>
          <Route path="effect-didmount" element={<UseEffect_didmount/>} ></Route>
          <Route path="effect-didupdate" element={<UseEffect_didUpdate /> } ></Route>
          <Route path="effect-unmount" element={<UseEffect_Unmount /> } ></Route>
          <Route path="redux-fs" element={<ChangeFontSizeRedux />}></Route>
          <Route path="redux-comment" element={<CommentRedux /> }  ></Route>
          <Route path="use-ref" element={<DemoUseRef /> }  ></Route>
          <Route path="formik" element={<DemoHookFormik /> }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
