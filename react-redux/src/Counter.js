import React, { Component } from "react";
import axios from "axios";

export class Counter extends Component {
  state = { data: [] };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => {
        this.setState({ data: Response.data });
      })
      .catch((Error) => {
        console.log(Error);
      });
  }

  render() {
    return (
      <div>
        <div>{this.state.data.length !==0?
         this.state.data.map((detial)=>{
                   return(<ul>
                       <li>
                           {detial.id}
                       </li>
                   </ul>)
               })
               }</div>
        <div className="container">
          <h1></h1>
        </div>
      </div>
    );
  }
}

export default Counter;
