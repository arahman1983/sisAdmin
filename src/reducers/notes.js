const notesDefaultState = [
  {
    id: 3,
    title: "New Note",
    From: "MyMail",
    To: "Teacher",
    sentAt: 9000000
  },
  {
    id: 1,
    title: "title",
    From: "Teacher",
    To: "MyMail",
    sentAt: 200000
  },
  {
    id: 2,
    title: "title",
    From: "MyMail",
    To: "Teacher",
    sentAt: 500000
  }
];
const notesReducer = (state = notesDefaultState, action) => {
  switch (action.type) {
    //case "SET_EXPENSES":
    //return action.expenses;
    default:
      return state;
  }
};

export default notesReducer;
