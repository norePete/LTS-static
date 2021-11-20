import React from 'react';
import style from './form.module.css';
import axios from 'axios';

class Form extends React.Component (
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {
    return (
      <div>
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" />
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  resetForm() {
    this.setState({name: '', email: '', message: '');
  }

  handleSubmit(e) {
      e.preventDefault();
      axios({
        method: "POST",
        url:"http://localhost:3002/send",
        data:  this.state
      }).then((response)=>{
        if (response.data.status === 'success') {
          alert("Message Sent.");
          this.resetForm()
        } else if(response.data.status === 'fail') {
          alert("Message failed to send.")
        }
      })
  }
);

export default Form;