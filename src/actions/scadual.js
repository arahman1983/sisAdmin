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

/*export const editTeacher = (id, updates) => ({
  type: "EDIT_TEACHER",
  id,
  updates
});

export const removeTeacher = ({ id } = {}) => ({
  type: "REMOVE_TEACHER_DATA",
  id
});
*/
