import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/header.jsx';
import Content from './components/content.jsx';
import TableRow from './components/tableRow.jsx';
class App extends React.Component {
   constructor(){
       super();
	   this.state = {
	       header:"header from state...",
		   content:"content from state...",
	       data :[
		    {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }]
	   }
	   this.setStateHandler = this.setStateHandler.bind(this);
   };
   
   setStateHandler(){
       var item = {id:4,name:"krishna",age:125};
	   var myArray = this.state.data;
	   myArray.push(item);
	   this.setState({data:myArray});
   };
   render() {
      var myStyle={
	      fontsize:100,
		  color:"#FFF000"
	  }
      return (
         <div>
            <Header headerProp={this.state.header}/> 
			<Content contentProp={this.state.content}/>
			<h1>{this.props.headerProp}</h1>
			<h2>{this.props.contentProp}</h2>
			<button onClick = {this.setStateHandler}>SET STATE</button>
			<table>
			    <tbody>
				    {this.state.data.map((person,i)=><TableRow key={i} data={person}/>)}
			    </tbody>
			</table>
		 </div>
      );
   }
}
App.propTypes={
    name: PropTypes.string,
	propArray: PropTypes.array
};
App.defaultProps = {
   headerProp: "Header from props...",
   contentProp:"Content from props..."
}
export default App;