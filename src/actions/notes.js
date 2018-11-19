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

export const editNote = ({ id } = {}, updates) => ({
  type: "EDIT_NOTE",
  id,
  updates
});

export const removeNote = ({ id } = {}) => ({
  type: "REMOVE_NOTE",
  id
});
