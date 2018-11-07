const notesDefaultState = [
  {
    id: "3",
    title: "New Note",
    details: "some details",
    From: "MyMail",
    To: "Teacher",
    sentAt: 9000000
  },
  {
    id: "1",
    title: "title",
    details: "some details",
    From: "Teacher",
    To: "MyMail",
    sentAt: 200000
  },
  {
    id: "2",
    title: "title",
    details: "some details",
    From: "MyMail",
    To: "Teacher",
    sentAt: 500000
  }
];
const notesReducer = (state = notesDefaultState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
    return [...state , action.note];
    case "REMOVE_NOTE":
    return state.filter(({id})=> id !== action.id);
    default:
      return state;
  }
};

export default notesReducer;
