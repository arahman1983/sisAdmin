const teachersDefaultState = [
  {
    id: "1",
    enName: "Lamees",
    arName: "لميس",
    specialize: "English",
    grade: "3,5",
    email: "example@domain.ext",
    phone: "+00 000 000",
    username: "userName",
    password: "password",
    hoppiesActivities: "some data",
    pic: "/profile.png",
    sentAt: 9000000
  }
];
const teachersReducer = (state = teachersDefaultState, action) => {
  switch (action.type) {
    case "ADD_TEACHER":
      return [...state, action.teacher];
    case "EDIT_TEACHER":
      return state.map(teacher => {
        if (teacher.id === action.id) {
          return {
            ...teacher,
            ...action.updates
          };
        } else {
          return teacher;
        }
      });
    case "REMOVE_TEACHER_DATA":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

export default teachersReducer;
