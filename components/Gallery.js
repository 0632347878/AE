import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from "./Pagination";
import Popup from "./Popup";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null,
      token: 'ce09287c97bf310284be3c97619158cfed026004',
      data: {}
    };
  }

  getData() {
      let _this = this;

      axios({
        method: 'post',
        url: 'http://interview.agileengine.com/auth',
        headers: {'Authorization': 'Bearer ' + _this.state.token},
        data: {"apiKey": "23567b218376f79d9415"}
      })
      .then((response) => {
        if (response.data.auth) this.setState({token: response.data.token});
        else console.log('auth failed');
      })
      .then((response) => {
        axios.get('http://interview.agileengine.com/images', {
          headers: {'Authorization': 'Bearer ' + _this.state.token},
        })
          .then((response) => {
            this.setState({data: response.data});
          });
      }, (error) => {
        console.log(error, 'sth wrong');
      });
  }

  getPage(e) {
    e.preventDefault();
    let number = +e.target.innerHTML;

    if (number !== this.state.data.page) {
      axios.get(`http://interview.agileengine.com/images?page=${number}`, {
        headers: {'Authorization': 'Bearer ' + this.state.token},
      })
      .then((response) => {
        this.setState({data: response.data});
      });
    }
  }

  getDetails(e) {
    let picId = e.target.id;
    axios.get(`http://interview.agileengine.com/images/${picId}`, {
      headers: {'Authorization': 'Bearer ' + this.state.token},
    })
    .then((response) => {
      console.log(response);
      this.setState({details: response});
    });
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    if( this.state.data.pictures) return<div><ul className={'row'}>{
        this.state.data.pictures.map((picture, key) =>
            <li className={['col-lg-3 col-sm-6']} key={key}>
              <img onClick={this.getDetails.bind(this)} id={picture.id} src={picture.cropped_picture} alt=""/>
            </li>)}
      </ul>
      <Pagination onChildClick={this.getPage.bind(this)} data={this.state.data}/>
      <Popup/>
    </div>;
    else return <pre>Loading...</pre>
  }
}


export default Gallery;
