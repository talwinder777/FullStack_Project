import React from 'react';
import ReactDOM from 'react-dom';
 
class List extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {

         list: this.props.list

         
        }
        // this.ShowProblemContent = this.ShowProblemContent.bind(this);
        console.log("inside demoList = ");
    }
    
    ShowProblemContent = (e) => {
        ReactDOM.render((e.target.value), document.getElementById('showProblemContent'));
    }

    render(){
        return(
            
            <ul>
                {this.state.list.map(item => (
                <button value = {item} onClick = {this.ShowProblemContent} key={item}>{item}</button>
                ))}
            </ul>
                // <button>{this.state.list}</button>
            
        );
    }
}
// const list = [
//   {
//     id: 'a',
//     firstname: 'Robin',
//     lastname: 'Wieruch',
//     year: 1988,
//   },
//   {
//     id: 'b',
//     firstname: 'Dave',
//     lastname: 'Davidds',
//     year: 1990,
//   },
// ];
 
// const ComplexList = () => (
//   <ul>
//     {list.map(item => (
//       <li key={item.id} >
//         <div>{item.id}</div>
//         <div>{item.firstname}</div>
//         <div>{item.lastname}</div>
//         <div>{item.year}</div>
//       </li>
//     ))}
//   </ul>
// );
 
export default List;