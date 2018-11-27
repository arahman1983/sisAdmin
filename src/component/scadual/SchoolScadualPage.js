import React from "react";
import NotesHeader from "../PageHeader";
import SendNoteBtn from "../AddNewBtn";
import { connect } from "react-redux";
import BigCalendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = BigCalendar.momentLocalizer(moment);

class SchoolScadualPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events.map(event => event)
    };
  }

  render() {
    return (
      <div className="col-md-9">
        <NotesHeader section="School Scadual" />
        <SendNoteBtn link="/additem" section="Add New Item" />
        <div className="container">
          <BigCalendar
            localizer={localizer}
            defaultView="month"
            titleAccessor={function(e) {
              return e.title + " - " + e.grade + " - " + e.teacher;
            }}
            defaultDate={new Date()}
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            onDoubleClickEvent={e => {
              this.props.history.push(`/editEvent/${e.id}`);
            }}
          />
        </div>
        <div className="container bg-light my-2">
          <small className="m-2 text-danger">
            To edit event double click on the Event
          </small>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    events: state.events
  };
};
export default connect(mapStateToProps)(SchoolScadualPage);
