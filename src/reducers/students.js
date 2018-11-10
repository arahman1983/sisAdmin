const studentsDefaultState = [
  {
    id: "1",
    enName: "Lamees",
    arName: "لميس",
    grade: "3",
    email: "example@domain.ext",
    phone: "+00 000 000",
    username: "userName",
    password: "password",
    hoppiesActivities: "some data",
    pic: "/profile.png",
    sentAt: 9000000
  }
];
const studentsReducer = (state = studentsDefaultState, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return [...state, action.note];
    case "EDIT_STUDENT":
      return state.map(student => {
        if (student.id === action.id) {
          return {
            ...student,
            ...action.updates
          };
        } else {
          return student;
        }
      });
    case "REMOVE_STUDENT_DATA":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

export default studentsReducer;
