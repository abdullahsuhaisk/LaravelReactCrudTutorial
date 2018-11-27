require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, HashRouter, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Example from './components/Example';
import Master from './components/Master';
import CreateItem from './components/CreateItem';
import DisplayItem from './components/DisplayItem';
import EditItem from './components/EditItem';


ReactDOM.render(
    <HashRouter>
        <div>
            <div>
               <Master />
            </div>
            <div>
                <Route path="/examle" component={Example}/>
                <Route path="/create-item" component={CreateItem} />
                <Route path="/display-item" component={DisplayItem} />
                <Route path="/edit/:id" component={EditItem} />
            </div>
        </div>
    </HashRouter>,
    document.getElementById('example'));