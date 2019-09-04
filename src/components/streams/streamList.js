import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    // rendering list of all streams
    renderStreamsList = () => {
        return this.props.streams.map( stream => {
            return (
                <div className='item' key={stream.id}>
                    {this.renderAdminBtns(stream)}
                    <i className='large middle aligned icon camera'></i>
                    <div className='content'>
                        <Link to={`/streams/${stream.id}`} className='header'>
                            {stream.title}
                        </Link>
                        <div className='description'>
                            {stream.description}
                        </div>
                    </div>
                </div>
            );
        });
    };

    // rendering edit and delete btns to current user on each stream
    renderAdminBtns = (stream) => {
        if(stream.userId === this.props.currentUserId) {
            return (
                <div className='right floated content'>
                    <Link className='ui button primary' to={`/streams/edit/${stream.id}`}>Edit</Link>
                    <Link className='ui button negative' to={`/streams/delete/${stream.id}`}>Delete</Link>
                </div>
            );
        }
    };

    // rendering create button for signed in user
    renderCreateBtn = () => {
        if(this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to='/streams/new' className='ui button primary'>
                        Create Stream
                    </Link>
                </div>
            )
        }
    };

    render () {
        return (
            <div>
                <h2>Streams</h2>
                <div className='ui celled list'>
                    {this.renderStreamsList()}
                </div>
                { this.renderCreateBtn() }
            </div>
        );
    };
};

const mapStateToProps = state => {
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
     };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);