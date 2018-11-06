import React from "react";
import moment from "moment";

const NotesRow = ({ id, title, From, To, sentAt }) => {
  return (
    <tr>
      <th scope="row">{title}</th>
      <td>{From}</td>
      <td>{To}</td>
      <td>{moment(sentAt).format("MMM Do, YY")}</td>
      <td>
        <button className="btn btn-primary">View</button>
      </td>
      <td>
        <button className="btn btn-warning">Delete</button>
      </td>
    </tr>
  );
};

export default NotesRow;
