import uuid from "uuid";
var d = new Date();
export const addTeacher = ({
  enName = "",
  arName = "",
  specialize = "",
  grade = "",
  email = "",
  phone = "",
  username = "",
  password = "",
  hoppiesActivities = "",
  pic = ""
} = {}) => ({
  type: "ADD_TEACHER",
  teacher: {
    id: uuid(),
    enName,
    arName,
    specialize,
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

export const editTeacher = (id, updates) => ({
  type: "EDIT_TEACHER",
  id,
  updates
});

export const removeTeacher = ({ id } = {}) => ({
  type: "REMOVE_TEACHER_DATA",
  id
});
