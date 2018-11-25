import moment from "moment";
const Defaultevents = [
  {
    id: "4",
    title: "event 6",
    start: new Date(),
    end: new Date(moment()),
    grade: "grade 3",
    teacher: ""
  },
  {
    id: "1",
    title: "event 1",
    start: new Date(),
    end: new Date(moment().add(1, "days")),
    grade: "grade 1",
    teacher: ""
  }
];
const scadualReducer = (state = Defaultevents, action) => {
  switch (action.type) {
    case "ADD_SCITEM":
      return [...state, action.event];
    /* case "EDIT_NOTE":
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
