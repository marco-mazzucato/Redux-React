import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class ButtonsC extends Component {
    constructor(props){
        super(props);
        this.state={count: 0}
    }
    /*componentWillMount(){
        console.log("Execute before the component is mounted");
        console.log(ReactDOM.findDOMNode(this));
    }
    componentDidMount(){
        console.log("Execute after the component is mounted");
        console.log(ReactDOM.findDOMNode(this));
    }
    componentWillUpdate(newProps, newState){
        console.log("Called before the render method");
        console.log("newProps", newProps);
        console.log("newState", newState);
    }
    componentDidUpdate(prevProps, prevState){
        console.log("Called after the render method");
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
    }
    componentWillReceiveProps(){

    }
    shouldComponentUpdate(){

    }
    componentWillUnmount(){

    }*/
        render() {
          return (
            <div className="container">
              <button className='agg' onClick={() => this.props.s(this.props.c +1)}>Aumenta</button>
              <button className='agg' onClick={() => this.props.s(this.props.c -1)}>Diminuisci</button>
              <button className="agg" onClick={() => this.setState({count : this.state.count+1}, () => {})}> setState</button>
              <h1>{this.props.c}</h1>
              <h1>{this.state.count}</h1>
              </div>
            
          )
        }
}