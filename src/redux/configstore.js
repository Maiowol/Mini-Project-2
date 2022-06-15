import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";



import post from "./modules/post";
import reducer from "./modules/post";
import User from "./modules/user";
import image from "./modules/image";

export const history = createBrowserHistory();



const rootReducer = combineReducers({post,User,image});
//중괄호속 reducer는 테스트용
const middlewares = [thunk.withExtraArgument({history:history})];

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

//require 개발환경에서만 이용 import랑 비슷한 역할


const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares)
      );

      let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();