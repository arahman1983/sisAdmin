import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import notesReducer from "../reducers/notes";
import filtersReducer from "../reducers/filters";
import studentsReducer from "../reducers/students";
import teachersReducer from "../reducers/teachers";

const comoseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      students: studentsReducer,
      teachers: teachersReducer,
      filters: filtersReducer
    }),
    comoseEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
