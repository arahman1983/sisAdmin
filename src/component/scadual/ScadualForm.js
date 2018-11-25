import React from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import DateTimePicker from "react-datetime-picker";

class ScadualForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
      title: this.props.event.title ? this.props.event.title : "",
      start: this.props.event.start ? this.props.event.start : "",
      end: this.props.event.end ? this.props.event.end : "",
      grade: this.props.event.grade ? this.props.event.grade : "",
      teacher: "",
      error: ""
    };
  }
  onChangeTitle = e => {
    const title = e.target.value;
    this.setState(() => ({
      title
    }));
  };

  onChangeGrade = e => {
    const grade = e.target.value;
    this.setState(() => ({
      grade
    }));
  };

  onChangeTeacher = e => {
    const teacher = e.target.value;
    this.setState(() => ({ teacher }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.details) {
      this.setState(() => ({
        error: "You should add details and email to send at least"
      }));
    } else {
      this.setState(() => ({
        error: ""
      }));
      this.props.onSubmit({
        title: this.state.title,
        start: this.state.start,
        end: this.state.end,
        grade: this.state.grade,
        teacher: this.state.teacher
      });
    }
  };

  onChangeStart = start => this.setState({ start });
  onChangeEnd = end => this.setState({ end });

  render() {
    return (
      <div className="container-fluid py-3">
        <h4>Add Item</h4>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <span>Title : </span>
            <input
              className="form-control"
              type="text"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="row">
            <div className="form-group col-6">
              <span>Start : </span>
              <DateTimePicker
                onChange={this.onChangeStart}
                value={this.state.start}
              />
            </div>
            <div className="form-group col-6">
              <span>End : </span>
              <DateTimePicker
                onChange={this.onChangeEnd}
                value={this.state.end}
              />
            </div>
          </div>
          <div className="form-group">
            <span>grade : </span>
            <input
              className="form-control"
              type="text"
              value={this.state.grade}
              onChange={this.onChangeGrade}
            />
          </div>
          <div className="form-group">
            <span>Teacher : </span>
            <input
              className="form-control"
              type="text"
              value={this.state.teacher}
              onChange={this.onChangeTeacher}
            />
          </div>
          <div className="form-group">
            <button onClick={this.onSubmit} className="btn btn-primary">
              Add Item
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    event: state.events
  };
};

export default connect(mapStateToProps)(ScadualForm);
