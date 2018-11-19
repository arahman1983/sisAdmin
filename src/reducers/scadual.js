const Defaultevents = [
  {
    id: "1",
    title: "title 1",
    date: new Date().time,
    time: "1000",
    grade: "1"
  },
  {
    id: "1",
    title: "title 2",
    date: "100000",
    time: "50000",
    grade: "3"
  }
];
const scadualReducer = (state = Defaultevents, action) => {
  switch (action.type) {
    /*case "ADD_NOTE":
      return [...state, action.note];
    case "EDIT_NOTE":
      console.log(action.updates);
      return state.map(note => {
        if (note.id === action.id) {
          return {
            ...note,
            ...action.updates
          };
        } else {
          return note;
        }
      });
    case "REMOVE_NOTE":
      return state.filter(({ id }) => id !== action.id);*/
    default:
      return state;
  }
};

export default scadualReducer;
