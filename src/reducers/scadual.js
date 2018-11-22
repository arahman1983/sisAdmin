import moment from "moment";
const Defaultevents = [
  {
    id: "4",
    title: "event 6 - grade 3",
    start: new Date(),
    end: new Date(moment().add(1, "days")),
    resource: "grade 3"
  },
  {
    id: "1",
    title: "event 1 - grade 2",
    start: new Date(),
    end: new Date(moment().add(1, "days")),
    resource: "grade 3"
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
