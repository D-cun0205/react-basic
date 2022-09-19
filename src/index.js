import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./App";
import "./index.css";
import rootReducer, { rootSaga } from "./modules";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from 'redux-thunk';
import { createBrowserHistory } from "@remix-run/router";
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from "react-router-dom";

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

// 미들웨어 사용에 logger 있는 경우 반드시 마지막 라인에 호출되어야 함
const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ history: customHistory }),
      sagaMiddleware, // 사가 미들웨어 적용
      logger
    )
  ),
);

// 루트 사가 실행, 스토어 생성이 된 다음에 아래 코드 실행
sagaMiddleware.run(rootSaga);

//ReactDOM.createRoot: 브라우저에 있는 실제 돔을 변수에 할당
//document.getElementBytId("root") = index.html <div id="root"> 에 해당
//실제 돔 변수.render(root.render): 돔에 랜더링
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // React.StrictMode 사용할 경우 axios and React Hook 같이 사용하는 경우 
  // 렌더링 하지 못하는 에러 발생하여 주석처리 해놓음
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);