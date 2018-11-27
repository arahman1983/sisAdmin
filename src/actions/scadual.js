import uuid from "uuid";
import moment from "moment";
export const addScItem = ({
  title = "event 6",
  start = new Date(moment()),
  end = new Date(moment()),
  grade = "grade 3",
  teacher = ""
} = {}) => ({
  type: "ADD_SCITEM",
  event: {
    id: uuid(),
    title,
    start,
    end,
    grade,
    teacher
  }
});

export const editScItem = (id, updates) => ({
  type: "EDIT_EVENT",
  id,
  updates
});

export const removeScItem = ({ id } = {}) => ({
  type: "REMOVE_EVENT",
  id
});
