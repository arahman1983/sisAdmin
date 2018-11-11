import React from "react";
import Autocomplete from "react-autocomplete";
export class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      From: "",
      To: !!props.From ? props.From : "",
      details: "",
      error: "",
      value: "",
      students: props.student,
      parents: props.parent,
      teachers: props.teacher
    };
  }

  onChangeTitle = e => {
    const title = e.target.value;
    this.setState(() => ({
      title
    }));
  };
  onChangeDetails = e => {
    const details = e.target.value;
    this.setState(() => ({
      details
    }));
  };

  onChangeMail = e => {
    const To = e.target.value;
    this.setState(() => ({
      To
    }));
  };
  onSubmit = e => {
    e.preventDefault();
    var d = new Date();
    if (!this.state.To || !this.state.details) {
      this.setState(() => ({
        error: "You should add details and email to send at least"
      }));
    } else {
      this.setState(() => ({
        error: ""
      }));
      this.props.onSubmit({
        title: this.state.title,
        To: this.state.To,
        From: "mymail@ddd.cc",
        details: this.state.details,
        sentAt: d.getTime()
      });
    }
  };

  render() {
    const arr = [this.state.students];
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Title of the Note"
            onChange={this.onChangeTitle}
          />
        </div>
        <div className="form-group">
          <Autocomplete
            className="form-control"
            items={[
              arr.map(([obj]) => {
                return { id: obj.id, label: obj.enName, email: obj.email };
              })
            ]}
            shouldItemRender={(item, value) =>
              item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
            }
            getItemValue={item => item.obj.label}
            renderItem={(item, highlighted) => (
              <div key={item.id}>{item.label}</div>
            )}
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
            onSelect={value => this.setState({ value })}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="send to .... (auto complete) "
            value={this.state.To}
            onChange={this.onChangeMail}
          />
        </div>
        <div className="form-group">
          <textarea
            name="details"
            className="form-control"
            placeholder="details"
            onChange={this.onChangeDetails}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-success">Send the Note</button>
        </div>
      </form>
    );
  }
}
