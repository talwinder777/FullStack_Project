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

      login = (e) => {
        
        e.preventDefault();

        console.log(e.target.email.value);
        const data = {
           
            email: e.target.email.value,
            password: e.target.password.value
        }
       
      
        fetch('http://localhost:9000/login', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            
            })
            .then(response => response.json())
            .then(data => { 
                var text = "" 
                if(data.valid=='True')
                {
                    document.getElementById("demo1").innerHTML = text;
                    console.log('Success:', data);
                }  
                else{
                    text="Email or Password doesnt match";
            document.getElementById("demo1").innerHTML = text; 
                    
                }
            
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
  // method="post" action="http://localhost:9000/login  
     render() {
         
          return (
            <div className="myImage">
            
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
                    <form onSubmit={this.login}>
                        <h1>Sign in</h1>
                       
                        <span>or use your account</span>
                        <input type="email" name="email" placeholder="Email" />
                        <input type="password" name="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button type='submit'>Sign In</button>
                        <p id = "demo1" style = {{color: 'GREEN'}}></p>
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
 
export default Logindemo;