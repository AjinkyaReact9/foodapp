import { Component } from "react";
import userContext from "../utils.js/UserContext";


class About extends Component {
  constructor() {
    super()
    console.log("Parent constructor called");
  }

  render(){
    console.log("Parent render called");
    return(
      <div className="container">
        This is a About us Component : (Class Based ) Created By - <span>{}</span>
      
      <userContext.Consumer>
        {(data) => <span>{data?.userName}</span>}
      </userContext.Consumer>
      </div>
    )
  }
}


export default About;
