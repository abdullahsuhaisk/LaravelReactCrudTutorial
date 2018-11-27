import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Blog extends Component {
    constructor(){
        super();
        this.state = {
            blogs:[]
        }
        console.log(super());
    }
    componentWillMount () {
    axios.get('/api/blog').then(response => {
        this.setState({
            blogs: response.data
        })
    }).catch(err=>{
        console.log(err)
    })
    }
    
    render() {
        return (
            <div className="container">
                <ul className="list-group">
                    {this.state.blogs.map((blog)=>{
                        return(
                            <li className="list-group-item">{blog.name}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Blog />, document.getElementById('example'));
}
