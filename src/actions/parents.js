import uuid from "uuid";
var d = new Date();
export const addParent = ({
  enName = "",
  arName = "",
  students = "",
  email = "",
  phone = "",
  username = "",
  password = "",
  hoppiesActivities = "",
  pic = ""
} = {}) => ({
  type: "ADD_PARENT",
  parent: {
    id: uuid(),
    enName,
    arName,
    students,
    email,
    phone,
    username,
    password,
    hoppiesActivities,
    pic,
    sentAt: d.getTime()
  }
});

export const editParent = (id, updates) => ({
  type: "EDIT_PARENT",
  id,
  updates
});

export const removeParent = ({ id } = {}) => ({
  type: "REMOVE_PARENT_DATA",
  id
});
