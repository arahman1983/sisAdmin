import moment from "moment";
const Defaultevents = [
  {
    title: "sdfdsfdsfdsf",
    start: moment(new Date()).format("YY-MM-DD"),
    end: "2018-11-21",
    allDay: false,
    resource: "grade3"
  },
  {
    title: "rdd",
    start: "2018-11-21",
    end: "2018-11-21",
    allDay: false,
    resource: "grade3"
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
