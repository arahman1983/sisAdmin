import uuid from "uuid";
var d = new Date();
export const addStudent = ({
  enName = "",
  arName = "",
  grade = "",
  email = "",
  phone = "",
  username = "",
  password = "",
  hoppiesActivities = "",
  pic = ""
} = {}) => ({
  type: "ADD_STUDENT",
  student: {
    id: uuid(),
    enName,
    arName,
    grade,
    email,
    phone,
    username,
    password,
    hoppiesActivities,
    pic,
    sentAt: d.getTime()
  }
});

export const editStudent = (id, updates) => ({
  type: "EDIT_STUDENT",
  id,
  updates
});

export const removeStudent = ({ id } = {}) => ({
  type: "REMOVE_NOTE",
  id
});
