import React, { Component } from "react";

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state = 
            {
                "first" : props.first,
                "second" : props.second,
                "third" : props.third,
                "fourth" : props.fourth
              }
    }

    render() {
        return (
        <div className="sidebarDx">
            <div class="menu">
                <div class="closeButton"><a class="icon-close"></a></div>
                <ul>
                    <li><a href="#">{this.state.first}</a></li>
                    <li><a href="#">{this.state.second}</a></li>
                    <li><a href="#">{this.state.third}</a></li>
                    <li><a href="#">{this.state.fourth}</a></li>
                </ul>
            </div>
            <div id="menuButton"><a class="icon-menu"></a></div>
        </div> 

    );}
}