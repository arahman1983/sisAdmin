import React from "react";
import NotesHeader from "../PageHeader";
import { connect } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
import SendNoteBtn from "../AddNewBtn";
import { removeNote, editNote } from "../../actions/notes";

class ViewNotePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.noteToView.id,
      title: props.noteToView.title,
      details: props.noteToView.details,
      From: props.noteToView.From,
      To: props.noteToView.To,
      sentAt: props.noteToView.sentAt,
      readen: props.noteToView.readen
    };
  }
  componentWillMount() {
    this.setState({ readen: true });
  }
  componentDidMount() {
    const id = this.state.id;
    const updates = { ...this.state };
    this.props.dispatch(editNote({ id }, updates));
  }

  render() {
    return (
      <div className="col-md-9">
        <NotesHeader section="Notes" />
        <SendNoteBtn link="/addnote" section="Add a Note" />
        <div className="container-fluid">
          <div className="row bg-light">
            <div className="col-6">
              <h4 className="p-2 w-100">{this.state.title}</h4>
            </div>
            <div className="col-4">
              <p className="py-2 w-100">{`Sent From " ${
                this.state.From
              } " to  " ${this.state.To} "`}</p>
            </div>
            <div className="col-2">
              <p className="py-2 w-100">
                {moment(this.state.sentAt).format("MMM Do YYYY")}
              </p>
            </div>
          </div>
          <p className="p-2">{this.state.details}</p>
        </div>
        <div className="container-fluid bg-light">
          <div className="row">
            <div className="col-md-6">
              <Link
                className="btn btn-primary"
                to={`/addnote/${this.state.From}`}
              >
                <h5>Replay</h5>
              </Link>
            </div>
            <div className="col-md-6">
              <button
                onClick={() => {
                  const id = this.state.id;
                  this.props.dispatch(removeNote({ id }));
                  this.props.history.push("/notes");
                }}
                className="btn btn-warning"
              >
                <h5>Delete</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    noteToView: state.notes.find(
      noteToView => noteToView.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(ViewNotePage);
