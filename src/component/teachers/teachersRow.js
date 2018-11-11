import React from "react";
import { Link } from "react-router-dom";

const TeachersRow = ({ id, enName, arName, email, phone, sentAt }) => {
  return (
    <tr>
      <th scope="row">{enName}</th>
      <td>{arName}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <Link className="btn btn-primary" to={`/teacherData/${id}`}>
          <h6>View</h6>
        </Link>
      </td>
    </tr>
  );
};

export default TeachersRow;
