import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/streamCreate';
import StreamList from './streams/streamList';
import StreamDelete from './streams/streamDelete';
import StreamShow from './streams/streamShow';
import StreamEdit from './streams/streamEdit';
import Header from './header';


const App = () => {
    return (
    <div className='ui container'>
        <BrowserRouter>
            <div>
                <Header />
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" exact component={StreamCreate} />
                <Route path="/streams/edit" exact component={StreamEdit} />
                <Route path="/streams/delete" exact component={StreamDelete} />
                <Route path="/streams/show" exact component={StreamShow} />
            </div>
        </BrowserRouter>

        <h1></h1>
        <p></p>
    </div>
    );
};

export default App;