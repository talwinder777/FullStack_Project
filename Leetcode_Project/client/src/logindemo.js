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
            console.log(result);
            })
        })
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
    componentDidMount () {
            
        const script = document.createElement("script");
        script.type = 'text/javascript';
        script.src = "./login.js";
        script.async = true;
    
        document.body.appendChild(script);
  
    }

    
    render() {
         
          return (
            <div>
            <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button >Sign Up </button>
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