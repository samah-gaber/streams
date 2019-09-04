import React from 'react';
import Modal from '../modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    };

    renderModalActionsBtns = () => {
        const { id } = this.props.match.params;
        return (
            <React.Fragment> { /* same as <> */ }
                <button 
                className='ui button negative' 
                onClick={ () => this.props.deleteStream(id) }>
                    Delete
                </button>
                <Link className='ui button' to='/' >Cancel</Link>
                {/* <button className='ui button' onClick={() => history.push('/')}>Cancel</button> */}
            </React.Fragment> // same as </>
        );
    };

    renderModalContent = () => {
        if(!this.props.stream) {
            return 'Are you sure you want to delete this stream ?';
        }
        return `Are you sure you want to delete the stream with title: ${this.props.stream.title} ?`
    };

    render() {
        return (
            <Modal 
                title='Delete Stream'
                content={ this.renderModalContent() }
                actions={this.renderModalActionsBtns()}
                currentStream={this.props.stream}
                onDismiss={()=> history.push('/')}
            />
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    // as the streams is an obj with keys of ids
    return { stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);