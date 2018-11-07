import React from "react";
export class NoteForm extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        title:"",
        From: "",
        To: !!props.From ? props.From : "",
        details: "",
        error:""
      }
    }
    
    onChangeTitle = (e)=>{
        const title = e.target.value
        this.setState(()=>({
            title
        }))
    }
    onChangeDetails = (e)=>{
        const details = e.target.value
        this.setState(()=>({
            details
        }))
    }
    
    onChangeMail = (e)=>{
      const To = e.target.value
      this.setState(()=>({
          To
      }))
    }
    onSubmit = (e)=>{
    e.preventDefault();
    
    var d = new Date()
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
        From:"mymail@ddd.cc",
        details: this.state.details,
        sentAt: d.getTime()
      });
      console.log(d.getTime())
    }
     
    }
    render(){
    return(
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
  )}
    };