import React, { Component } from 'react';
import './login.css';


class Logindemo extends Component {
    constructor(props) {
      super(props)
      this.state = {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
        //apiResponse: ""
      }
    }
  
    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    

    // reloadifSuccessful = (e) => {
    //   e.preventDefault();
    //   // get form data out of state
    //   const { first_name, last_name, password, email } = this.state;
    //   console.log("inside onsubmit");
    //   fetch('http://localhost:9000/register', {
    //     method: 'POST', // or 'PUT'
    //     headers: {
    //       'Content-Type': 'application/json',
    //     }
        
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
    //     //window.location.reload(false);
    // }

    onSubmit = (e) => {
        e.preventDefault();
        // get form data out of state
        //const { first_name, last_name, password, email } = this.state;
    //    // var payload = {
    //         firstName: e.target.firstName.value,
    //         lastName: e.target.lastName.value,
    //         email: e.target.email.value,
    //         password: e.target.password.value
    //     };
        //let data = new FormData();
        //data.append( "json", JSON.stringify( payload ));
        // formData.append('firstName', e.target.firstName.value);
        // formData.append('lastName', e.target.lastName.value);
        // formData.append('email', e.target.email.value);
        // formData.append('password', e.target.password.value);
       
        console.log(e.target.firstName.value);
        const data = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        console.log("data = "+data);
        fetch('http://localhost:9000/register', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
            //alert("Successfully Registered");
            var text = "Succesfully Registeref! Please Login now"
            document.getElementById("demo").innerHTML = text;    
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
      }
    
    leftSlide = (e) => {
        e.preventDefault();
        console.log("signup clicked");
        const container = document.getElementById('container');
        container.classList.add("right-panel-active");
        return null;
    }
    rightSlide = (e) => {
        e.preventDefault();
        console.log("sigIn clicked");
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active");
        return null;
    }
   // method = 'POST' action='http://localhost:9000/register'
     render() {
         
          return (
            <div>
            
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form onSubmit = {this.onSubmit}>
                        <h1>Create Account</h1>
                        
                        <span>or use your email for registration</span>
                        <input type="text" name = "firstName" placeholder="FirstName" />
                        <input type="text" name = "lastName" placeholder="LastName" />
                        <input type="email" name = "email" placeholder="Email" />
                        <input type="password" name = "password" placeholder="Password" />
                        <button type="submit" >Sign Up</button>
                        <p id = "demo" style = {{color: 'GREEN'}}></p>
                    </form>
                    
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                       
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick = {this.rightSlide}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick = {this.leftSlide}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
           </div>
            );
        }

        
}
  /*<div ref={el => (this.instance = el)} />*/
export default Logindemo;