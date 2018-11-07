const filtersReducerDefault = {
    sortBy: "date"
  };
  const filtersReducer = (state = filtersReducerDefault, action) => {
    switch (action.type) {
      case "SORT_BY_DATE":
        return {
          ...state,
          sortBy: "date"
        };
      default:
        return state;
    }
  };
  export default filtersReducer;
  