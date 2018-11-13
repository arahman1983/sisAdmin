import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import notesReducer from "../reducers/notes";
import filtersReducer from "../reducers/filters";
import studentsReducer from "../reducers/students";
import teachersReducer from "../reducers/teachers";
import parentsReducer from "../reducers/parents";
import profileReducer from "../reducers/profile";

const comoseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      students: studentsReducer,
      teachers: teachersReducer,
      parents: parentsReducer,
      profile: profileReducer,
      filters: filtersReducer
    }),
    comoseEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
