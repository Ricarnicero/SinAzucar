import React from "react";
import Navbar from "./Navbar";
import MyFirebaseClass from "../Firebase"

class Layout extends React.Component {
    constructor(props) {
      super(props);
      this.state = { usr: null, error:null };
    }
    componentDidMount() {
        var fb = new MyFirebaseClass()
        fb.initConfig()        
        fb.getFirebase().auth().signInWithEmailAndPassword("ads@asd.com","asdasd")
            .then(result => this.setState({usr:result.user}))
            .catch(error => this.setState({error:error}));
    }
    render() {
      return (
        <React.Fragment>
                 <Navbar usuario={this.state.usr}/>
                 {this.props.children}
                 </React.Fragment>
      );
    }
  }
export default Layout;