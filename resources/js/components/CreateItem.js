import React, {Component} from 'react';
import Axios from 'axios';

class CreateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            productPrice: ''
        };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }
    handleChange1(e) {
        this.setState({
            productName: e.target.value
        });
    }
    handleChange(e) {
        this.setState({
            [e.target.id ] : e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
        const products = {
            name: this.state.productName,
            price: this.state.productPrice
        }
        let link = '/items';
        Axios.post(link,products).then(response=> {
            console.log('succes');
        }).catch(err=>{
            console.log(err);
        })
    }
    render() {
      return (
      <div>
        <h1>Create An Item</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Item Name:</label>
                <input type="text" className="form-control" onChange={this.handleChange1} />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Item Price:</label>
                  <input type="text" className="form-control col-md-6" id='productPrice' onChange={this.handleChange}/>
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Add Item</button>
            </div>
        </form>
  </div>
      )
    }
}
export default CreateItem;