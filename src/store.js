import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { authMiddleware } from "./authMiddleware";
import { profileMiddleware } from "./profileMiddleware";

export const store = createStore(rootReducer, applyMiddleware(authMiddleware, profileMiddleware));