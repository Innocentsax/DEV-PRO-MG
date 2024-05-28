import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import AuthReducer from "./AuthSlice";
import TaskSlice from "./TaskSlice";
import SubmissionSlice from "./SubmissionSlice";

const rootReducer = combineReducers({
  auth: AuthReducer,
});
const store = configureStore({
  reducer: rootReducer,
  task: TaskSlice,
  submission: SubmissionSlice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
