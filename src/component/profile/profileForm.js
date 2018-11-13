import React from "react";
import axios from "axios";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enName: props.data.enName ? props.data.enName : "",
      arName: props.data.arName ? props.data.arName : "",
      jobTitle: props.data.jobTitle ? props.data.jobTitle : "",
      email: props.data.email ? props.data.email : "",
      phone: props.data.phone ? props.data.phone : "",
      username: props.data.username ? props.data.username : "",
      password: props.data.password ? props.data.password : "",
      pic: props.data.pic ? props.data.pic : ""
    };
  }

  fileChangedHandler = event => {
    this.setState({ pic: event.target.files[0].name });
    const formData = new FormData();
    formData.append("myFile", this.state.pic, this.state.pic.name);
    axios.post("/img", formData, {
      onUploadProgress: progressEvent => {
        console.log(progressEvent.loaded / progressEvent.total);
      }
    });
  };

  render() {
    console.log(this.state);
    return (
      <form>
        <div className="row my-3">
          <div className="col-md-8">
            <hr />
            <button className="btn btn-primary">Edit Profile</button>
          </div>
          <div className="col-md-4 p-5">
            {this.state.pic ? (
              <div className="form-group uploadDiv text-center">
                <img
                  src={`/img/${this.state.pic}`}
                  className="rounded-circle img-thumbnail my-3 profileImge"
                  alt="Name"
                />
                <br />
                <input
                  className="inputFile"
                  type="file"
                  name="file"
                  id="file"
                  onChange={this.fileChangedHandler}
                />
                <br />
                <label htmlFor="file">Choose a file</label>
              </div>
            ) : (
              <div className="form-group uploadDiv">
                <input
                  className="inputFile"
                  type="file"
                  name="file"
                  id="file"
                  onChange={this.fileChangedHandler}
                />
                <br />
                <label htmlFor="file">Choose a file</label>
              </div>
            )}
          </div>
        </div>
      </form>
    );
  }
}

export default ProfileForm;
