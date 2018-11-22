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
      events: this.props.events
    };
  }

  render() {
    console.log(this.state.events);
    return (
      <div className="col-md-9">
        <NotesHeader section="School Scadual" />
        <SendNoteBtn link="/additem" section="Add New Item" />
        <div className="container-fluid">
          <BigCalendar
            localizer={localizer}
            defaultView="month"
            defaultDate={new Date()}
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
          />
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
