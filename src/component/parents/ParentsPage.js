import React from "react";
import NotesHeader from "../PageHeader";
import ParentRow from "./parentRow";
import { connect } from "react-redux";
import SendNoteBtn from "../AddNewBtn";
import TotalItems from "../total";
import { getVisibleData } from "../../selectors/arrangeByDate";

const ParentsPage = props => (
  <div className="col-md-9">
    <NotesHeader section="Parents" />
    <SendNoteBtn link="/addParent" section="Add Parent" />
    <TotalItems
      itemName={props.parents.length === 1 ? "Parent" : "Parents"}
      dataarray={props.parents.length}
    />
    <table className="table table-striped text-center">
      <thead>
        <tr>
          <th scope="col">English Name</th>
          <th scope="col">Arabic Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col"> </th>
        </tr>
      </thead>
      <tbody>
        {props.parents.map(parent => {
          return <ParentRow key={parent.id} {...parent} />;
        })}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = state => ({
  parents: getVisibleData(state.parents, state.filters)
});

export default connect(mapStateToProps)(ParentsPage);
