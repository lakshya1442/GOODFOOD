import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "./UserContext";
import { useContext } from "react";


class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>

          <UserContext.Consumer>
            {({loggedInUser})=><h1>{loggedInUser}</h1>}
          </UserContext.Consumer>


        </div>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"First"} location={"Dehradun Class"} />
      </div>
    );
  }
}

export default About;
