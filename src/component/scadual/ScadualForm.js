import React from "react";
import { connect } from "react-redux";

class ScadualForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "4",
      title: this.props.event.title ? this.props.event.title : "",
      start: this.props.event.start ? this.props.event.start : "",
      end: new Date(moment().add(1, "days")),
      resource: "grade 3"
    };
  }

  render() {
    return (
      <div className="container-fluid py-3">
        <h4>Add Item</h4>
        <form>
          <div className="form-group">
            <span>Title : </span>
            <input
              className="form-control"
              type="text"
              value={this.state.event}
            />
          </div>
          <div className="form-group">
            <span>Date : </span>
            <input className="form-control" type="date" value="" />
          </div>
          <div className="form-group">
            <span>Time : </span>
            <input className="form-control" type="time" value="" />
          </div>
          <div className="form-group">
            <span>grade : </span>
            <input className="form-control" type="text" value="" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Add Item</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(ScadualForm);
