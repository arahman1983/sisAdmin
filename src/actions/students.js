import uuid from "uuid";
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
    sentAt: new Date().getTime()
  }
});

export const editStudent = (id, updates) => ({
  type: "EDIT_STUDENT",
  id,
  updates
});

export const removeStudent = ({ id } = {}) => ({
  type: "REMOVE_STUDENT_DATA",
  id
});
