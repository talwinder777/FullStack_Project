import React, { Component } from 'react';
import './Home.css';
import { Link } from "react-router-dom";

class Home extends Component {
    // constructor(props)
    // {
    //     const myImage= { 
   
    //         backgroundImage:'url("./Spider.jpg")',
    //         backgroundRepeat: 'no-repeat'
            
    //     }
    // }
  
    // componentDidMount(){
    //     document.body.style={myImage};
    // }
      
     render() {
        
       
        return(
            
            <div className="myImage1" >
                    
                        <div className="header">
                            <a href="#default" className="logo">CompanyLogo</a>
                                <div className="header-right">
                                    <a className="active" href="#home">Home</a>
                                    <a href="#contact">Contact</a>
                                    <a href="#about">About</a>
                                </div>
                        </div>
                        <div className="text">
                        <p>Learn the best way to think like a Software Engineer</p>
                        </div>
                        <div id="button-container">
                            
                        <Link to = "/logindemo">Get Started</Link>
                        
                      
                        
                        </div>
                        
                </div>
            
           
        );
    }
}
export default Home;