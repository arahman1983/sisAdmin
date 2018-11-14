import uuid from "uuid";
export const addNote = ({
  title = "",
  details = "",
  From = "",
  To = "",
  sentAt = 0,
  readen = true
} = {}) => ({
  type: "ADD_NOTE",
  note: {
    id: uuid(),
    title,
    details,
    From,
    To,
    sentAt,
    readen
  }
});

export const editNote = ({ id } = {}) => ({
  type: "EDIT_NOTE",
  id
});

export const removeNote = ({ id } = {}) => ({
  type: "REMOVE_NOTE",
  id
});
