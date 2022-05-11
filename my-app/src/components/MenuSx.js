import React from "react";

export default function Menu(props) {
    console.log(props);
    return (
       <div className="sidebarSx">
        <div class="menu">
            <div class="closeButton"><a class="icon-close"></a></div>
                <ul>
                    <li><a href="#">{props.first}</a></li>
                    <li><a href="#">{props.second}</a></li>
                    <li><a href="#">{props.third}</a></li>
                    <li><a href="#">{props.fourth}</a></li>
                </ul>
        </div>
        <div id="menuButton"><a class="icon-menu"></a></div>
        </div> 

    );
}