import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const ScadualRow = ({ id, title, date, time, grade }) => {
  return (
    <tr>
      <th scope="row">{title}</th>
      <td>{moment(date).format("MMM Do, YY")}</td>
      <td>{moment(time).format("LT")}</td>
      <td>{grade}</td>
      <td>
        <Link className="btn btn-primary" to={`/scadualData/${id}`}>
          <h6>View</h6>
        </Link>
      </td>
    </tr>
  );
};

export default ScadualRow;
