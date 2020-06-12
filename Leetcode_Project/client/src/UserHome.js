import React, {Component} from 'react';
import List from './demoList'
import './userHome.css'
import ReactDOM from 'react-dom';

class UserHome extends Component{

    constructor(props){
        super(props);
        this.state = {
            list: [],
        }
        // this.openProblem = this.openProblem.bind(this);
    }
     
    
    // openProblem = (e) => {
    //     // e.preventDefault();
    //     // console.log("signup clicked");
    //     // const container = document.getElementById('container');
    //     // container.classList.add("right-panel-active");
    //     // return null;
    //             var i
                  
    //                 console.log("My name is Anthony");
    //                 console.log(e.target.value);
                    
    //                 var start
    //                 var end
    //                 var text="<ul>"
    //                 if(e.target.value==='Easy')
    //                 {
    //                     start=0;
    //                     end=100;
                       
    //                 }
    //                 else if(e.target.value==='Medium')
    //                 {
    //                     start=100;
    //                     end=200;
    //                 }
    //                 else if(e.target.value==="Hard")
    //                 {
    //                     start=300;
    //                     end=400;
    //                 }

    //                for (i = start; i < end; i++) {
    //                        text += '<li>'+ "<button class='tablinks' value={"+i+"} onClick = {"+{this.showData}+"}>"+i+"</button>" + '</li>';
                            
    //                    }
                    
    //                 text +="</ul>";

                   

    //                 document.getElementById("demo").innerHTML = text;
         
                    
    // }
    // showData = (e) =>{
    //     console.log(e.target.value);
    //      document.getElementById("showProblemContent").innerHTML = '<h1>'+e.target.value+'</h1>';

    // }

  
   openProblem = (e) =>{

    console.log("difficulty = "+e.target.value)
    
    if(e.target.value==="Easy")
    {
        this.state.list =  [1,2,3,4,5]
        
     
       //document.getElementById("showProblemContent").innerHTML = '<h1>'+HEYYYYYYYYYY+'</h1>';
    }
    else if(e.target.value==="Medium")
    {
        this.state.list = [6,7,8,9,10]
    }  
    else{
        this.state.list = [11,12,13,14,15]
    }
    console.log("list = "+this.state.list)
    
    ReactDOM.render(<List list = {this.state.list}/>, document.getElementById('walla'));
    //    ReactDOM.render(<button className="tablinks" >Hey man</button>, document.getElementById('walla'));
    //    ReactDOM.render(<button className="tablinks" >whats up</button>, document.getElementById('walla'));
   }
    
  
    render(){
        return (
            <div>
                    <header id="header">
                    

                        <div id="logo">
                            <h1>TALLI_GAURAV </h1>

                        </div>

                        <nav id="nav-menu-container">
                            <ul className="nav-menu">
                            
                            
                            <li className="menu-has-children"><a href="">Settings</a>
                                <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Solved</a></li>
                                <li><a href="#">Unsolved</a></li>
                                <li><a href="#">Log Out</a></li>
                                </ul>
                            </li>
                            
                            </ul>
                        </nav>
                    
                    </header>

 
                    <section id="intro">
                        <div className="Scroll">
                            <div className="lele1">
                                <div className="tab">
                                    <button className="tablinks" >Problems</button>
                                    <button className="tablinks" value={"Easy"} onClick={this.openProblem}>Easy</button>
                                    <button className="tablinks" value={"Medium"} onClick={this.openProblem}>Medium</button>
                                    <button className="tablinks" value={"Hard"} onClick={this.openProblem}>Hard</button>
                                </div>
                        <div className="lele2">
                           <p id = "walla"></p>
                        </div>   
             
                        </div>
                    
                <div className="carousel-container">
                    <div className="carousel-content">
                        <h2>We are professional</h2>
                        <p id = "showProblemContent"></p>
                        <p>Learn how to have Intuitions like the way Software Engineer intuites.</p>
                        <p>The origins of communication theory is linked to the development of information theory in the early 1920s.[2] Limited information-theoretic ideas had been developed at Bell Labs, all implicitly assuming events of equal probability.

Harry Nyquist's 1924 paper, Certain Factors Affecting Telegraph Speed, contains a theoretical section quantifying "intelligence" and the "line speed" at which it can be transmitted by a communication system.

Ralph Hartley's 1928 paper, Transmission of Information, uses the word "information" as a measurable quantity, reflecting the receiver's ability to distinguish one sequence of symbols from any other. The natural unit of information was therefore the decimal digit, much later renamed the hartley in his honour as a unit or scale or measure of information.

Alan Turing in 1940 used similar ideas as part of the statistical analysis of the breaking of the German second world war Enigma ciphers.

The main landmark event that opened the way to the development of communication theory was the publication of an article by Claude Shannon (1916–2001) in the Bell System Technical Journal in July and October 1948 under the title "A Mathematical Theory of Communication".[1] Shannon focused on the problem of how best to encode the information that a sender wants to transmit. He also used tools in probability theory, developed by Norbert Wiener. They marked the nascent stages of applied communication theory at that time. Shannon developed information entropy as a measure for the uncertainty in a message while essentially inventing the field of information theory. "The fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point."[1]

In 1949, in a declassified version of Shannon´s wartime work on the mathematical theory of cryptography ("Communication Theory of Secrecy Systems"), he proved that all theoretically unbreakable ciphers must have the same requirements as the one-time pad. He is also credited with the introduction of sampling theory, which is concerned with representing a continuous-time signal from a (uniform) discrete set of samples. This theory was essential in enabling telecommunications to move from analog to digital transmissions systems in the 1960s and later.

In 1951, Shannon made his fundamental contribution to natural language processing and computational linguistics with his article "Prediction and Entropy of Printed English" (1951), providing a clear quantifiable link between cultural practice and probabilistic cognition.

Models of communication
Main article: Models of communication
New models of communication came from the humanities like psychology and sociology and anthropology, for example Gregory Bateson and Paul Watzlawick at the Mental Research Institute at Stanford University.

Scholars from disciplines other than mathematics and engineering began to take distance from the Shannon and Weaver models as a 'transmissible model':

They developed a model of communication which was intended to assist in developing a mathematical theory of communication. Shannon and Weaver's work proved valuable for communication engineers in dealing with such issues as the capacity of various communication channels in 'bits per second'. It contributed to computer science. It led to very useful work on redundancy in language. And in making 'information' 'measurable' it gave birth to the mathematical study of 'information theory'

— D. Chandler, [3]
According to Robert T. Craig in his foundational publication, Communication Theory as a Field (1999), communication theory “consist of seven traditions that are […] characteristic of the field: rhetoric, semiotics, phenomenology, cybernetics, sociopsychology, sociocultural theory, and the critical approach.”

"Communication is a process of expression, interaction, and influence, in which the behavior of humans or other complex organisms expresses psychological mechanisms, states, and traits and, through interaction with the similar expressions of other individuals, produces a range of cognitive, emotional, and behavioral effects.” (Craig, 1999, p. 143)


The most commonly described Models of Communication:

The Linear Model of communication works in one direction only, a sender encodes some message and sends it through a channel for a receiver to decode.

In comparison, the Interactional Model of communication works bidirectional. People send and receive messages in a cooperative fashion as they continuously encode and decode information.

The Transactional Model then assumes that information is sent and received simultaneously through a noisy channel, and further considers a frame of reference or experience each person brings to the interaction.[International Association of Communication Activist 1]</p>
                    <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>

                        </div>
                        </div>
                    </div>
                </section>



            </div>
        );
    }
    
}

export default UserHome