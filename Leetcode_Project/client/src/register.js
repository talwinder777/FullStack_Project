import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class Register extends Component {
    constructor(props) {
      super(props)
      this.state = {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      }
    }
  
    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    onSubmit = (e) => {
      e.preventDefault();
      // get form data out of state
      const { first_name, last_name, password, email } = this.state;
  
      fetch('http://localhost:9000/register' , {
            method: "POST",
            headers: {
            'Content-type': 'application/json'
            }
            .then((result) => {
            console.log(result)
            })
        })
    }
        render() {
          const { classes } = this.props;
          const { first_name, last_name, password, email, phone } = this.state;
          return (
            <div className="session">
            <h1>Create your Account</h1>
              <div className="register-form">
                <form method='POST' action='http://localhost:9000/register'>
                  <TextField label="First Name" name="first_name" />
                  <br/>
                  <TextField label="Last Name" name="last_name" />
                  <br/>
                  <TextField label="Email" name="email" />
                  <br/>
                  <TextField label="Password" name="password" />
                  <br/>    
                  <Button type='Submit' variant="contained" color="primary">
                    Register
                  </Button>
                </form>
              </div>
            </div>
          );
        }
}
  
export default Register;