import React from "react";
import uuid from "uuid";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";

export default class ScadualForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.event ? props.event.id : uuid(),
      title: props.event ? props.event.title : "",
      start: props.event ? props.event.start : new Date(moment()),
      end: props.event ? props.event.end : new Date(moment()),
      grade: props.event ? props.event.grade : "",
      teacher: props.event ? props.event.teacher : "",
      submitLable: props.event ? " Edit Item " : " Add Item ",
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
    if (!this.state.title || !this.state.start) {
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

  onChangeStart = start => {
    this.setState({ start });
  };
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
              <br />
              <DateTimePicker
                onChange={this.onChangeStart}
                value={this.state.start}
              />
            </div>
            <div className="form-group col-6">
              <span>End : </span>
              <br />
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
              {this.state.submitLable}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
