const profileDefaultState = {
  enName: "FirstName LastName",
  arName: "عربي",
  jobTitle: "Title, position, job ",
  email: "myMail@domain.ext",
  phone: "+00 000 000",
  username: "userName",
  password: "password",
  pic: "/profile.png"
};
const profileReducer = (state = profileDefaultState, action) => {
  switch (action.type) {
    case "EDIT_PROFILE":
      return state.map(profile => {
        if (profile.id === action.id) {
          return {
            ...profile,
            ...action.updates
          };
        } else {
          return profile;
        }
      });
    default:
      return state;
  }
};

export default profileReducer;
