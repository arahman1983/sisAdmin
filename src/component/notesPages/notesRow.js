import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const NotesRow = ({ id, title, From, To, sentAt }) => {
  return (
    <tr>
      <th scope="row">{title}</th>
      <td>{From}</td>
      <td>{To}</td>
      <td>{moment(sentAt).format("MMM Do, YY")}</td>
      <td>
        <Link className="btn btn-primary" to={`/note/${id}`}>
          View
        </Link>
      </td>
    </tr>
  );
};

export default NotesRow;
