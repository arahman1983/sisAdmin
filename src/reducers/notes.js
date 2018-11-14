const notesDefaultState = [
  {
    id: "3",
    title: "New Note",
    details: "some details",
    From: "MyMail@sfdf.ddd",
    To: "Teacher",
    sentAt: 9000000,
    readen: false
  },
  {
    id: "1",
    title: "title",
    details: "some details",
    From: "Teacher@sdgdg.dd",
    To: "MyMail",
    sentAt: 200000,
    readen: false
  },
  {
    id: "2",
    title: "title",
    details: "some details",
    From: "MyMail@sfdf.ddd",
    To: "Teacher",
    sentAt: 500000,
    readen: true
  }
];
const notesReducer = (state = notesDefaultState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.note];
    case "EDIT_NOTE":
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
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

export default notesReducer;
