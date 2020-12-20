import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentWillMount() {

  }


  render() {

    return(
      this.state.isOpen ?
        <div className={'popup'}>1</div>
        : null
    )
  }
}


export default Popup;
