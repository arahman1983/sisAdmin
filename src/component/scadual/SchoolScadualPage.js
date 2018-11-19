import React from "react";
import NotesHeader from "../PageHeader";
import SendNoteBtn from "../AddNewBtn";
import { connect } from "react-redux";
import ScadualRow from "./scadualRow";
import { getVisibleScadual } from "../../selectors/arrangeByDate";

const SchoolScadualPage = props => {
  const arrangeGrade = (events, { grade }) => {
    return events.sort((a, b) => {
      return a.grade < b.grade ? 1 : -1;
    });
  };
  return (
    <div className="col-md-9">
      <NotesHeader section="School Scadual" />
      <SendNoteBtn link="/additem" section="Add New Item" />
      <div className="container-fluid">
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Day</th>
              <th scope="col">Time</th>
              <th scope="col" onClick={arrangeGrade}>
                Grade
              </th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {props.events.map(event => {
              return <ScadualRow key={event.id} {...event} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    events: getVisibleScadual(state.events, state.filters)
  };
};
export default connect(mapStateToProps)(SchoolScadualPage);
