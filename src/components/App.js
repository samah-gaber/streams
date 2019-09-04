import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/streamCreate';
import StreamList from './streams/streamList';
import StreamDelete from './streams/streamDelete';
import StreamShow from './streams/streamShow';
import StreamEdit from './streams/streamEdit';
import Header from './header';
import history from '../history';


const App = () => {
    return (
    <div className='ui container'>
        <Router history={history}>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" component={StreamCreate} />
                    <Route path="/streams/edit/:id" component={StreamEdit} />
                    <Route path="/streams/delete/:id" component={StreamDelete} />
                    <Route path="/streams/:id" component={StreamShow} />
                </Switch>
            </div>
        </Router>
    </div>
    );
};

export default App;