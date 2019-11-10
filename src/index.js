import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/App/app';
import * as serviceWorker from './serviceWorker';
import { urls } from './utils/urlUtils';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Route path={urls.home.path} component={App}/>
    </Router>,
    document.getElementById('root')
);

serviceWorker.unregister();
