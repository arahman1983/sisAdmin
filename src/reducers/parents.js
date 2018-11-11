const parentsDefaultState = [
  {
    id: "1",
    enName: "Lamees",
    arName: "لميس",
    students: "lamees, lana",
    email: "example@domain.ext",
    phone: "+00 000 000",
    username: "userName",
    password: "password",
    hoppiesActivities: "some data",
    pic: "/profile.png",
    sentAt: 9000000
  }
];
const parentsReducer = (state = parentsDefaultState, action) => {
  switch (action.type) {
    case "ADD_PARENT":
      return [...state, action.parent];
    case "EDIT_PARENT":
      return state.map(parent => {
        if (parent.id === action.id) {
          return {
            ...parent,
            ...action.updates
          };
        } else {
          return parent;
        }
      });
    case "REMOVE_PARENT_DATA":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

export default parentsReducer;
