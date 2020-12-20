import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: this.props.data.pageCount
    };
  }

  render() {
    let pages = [];

    (() => {
      for (let step = 0; step < this.state.pages; step++) {
        pages.push(step+1);
      }
    })();

    return(
    <nav>
        <ul className="pagination">
          {pages.map((c, index) => {
            return this.state.pages > index
              ? <li className={ this.props.data.page === index+1 ? 'active page-item' : 'page-item'} key={index}>
                  <a onClick={this.props.onChildClick} className="page-link" href="#">{c}</a>
                </li>
              : null;
          })  }
        </ul>
      </nav>
    )
  }
}


export default Pagination;
