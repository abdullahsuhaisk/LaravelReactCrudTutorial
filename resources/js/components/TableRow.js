import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class TableRow extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleSubmit(event) {
  event.preventDefault();
  let uri = `/items/${this.props.obj.id}`;
  axios.delete(uri);
}
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.price}
          </td>
          <td>
          <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button className="btn btn-danger" onClick={this.handleSubmit}>Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;