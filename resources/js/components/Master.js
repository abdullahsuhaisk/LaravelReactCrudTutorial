import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Master extends Component {
  render(){
    return (
      <div className="container">
        <ul>
            <li><Link to="/examle" replace>Example</Link></li>
            <li><Link to="/create-item" replace>Create Item</Link></li>
            <li><Link to="/display-item" replace>Dısplay Item</Link></li>
        </ul>
          <div>
              {this.props.children}
          </div>
      </div>
    )
  }
}
export default Master;