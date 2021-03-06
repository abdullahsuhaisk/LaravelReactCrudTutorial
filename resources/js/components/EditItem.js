// EditItem.js

import React, {Component} from 'react';
import axios from 'axios';
import { Link,Redirect } from 'react-router-dom';

class EditItem extends Component {
  constructor(props) {
      super(props);
      this.state = {name: '', price: ''};
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      console.log('Constructer çalıştı');
  }

  componentDidMount(){
    axios.get(`http://localhost:8000/items/${this.props.match.params.id}/edit`)
    .then(response => {
      this.setState({ name: response.data.name, price: response.data.price });
    })
    .catch(function (error) {
      console.log(error);
    })
    console.log('componentDidMount çalıştı');

  }
  handleChange1(e){
    this.setState({
      name: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      price: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const products = {
      name: this.state.name,
      price: this.state.price
    }
    let uri = '/items/'+this.props.match.params.id;
    axios.patch(uri, products).then((response) => {
       return <Redirect to="/display-item" />
    });
  }
  render(){
    console.log('render çalıştı');

    return (
      <div>
        <h1>Update Item</h1>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/display-item" className="btn btn-success">Return to Items</Link>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Item Name</label>
                <input type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.handleChange1} />
            </div>

            <div className="form-group">
                <label name="product_price">Item Price</label>
                <input type="text" className="form-control"
                  value={this.state.price}
                  onChange={this.handleChange2} />
            </div>

            <div className="form-group">
                <button className="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
    )
  }
}
export default EditItem;