import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null,
      isOpen: this.props.data.isOpen
    };
  }

  componentWillUpdate() {
    console.log('update');
  }


  render() {
    console.log(this.props.data);
    return(
      this.props.data.details ?
        <div className={'popup'}>

          <span onClick={this.props.onPopupClose} className="btn-close">
          </span>
        </div>
        : null
    )
  }
}


export default Popup;
