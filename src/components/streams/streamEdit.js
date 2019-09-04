import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './streamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
       this.props.fetchStream(this.props.match.params.id);
    };

    onSubmit = (formValues) => {
       this.props.editStream(this.props.match.params.id, formValues);
    };

    render() {
        if(!this.props.stream) {
            return <div>Loading ...</div>
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm 
                // initialValues={this.props.stream} // has a problem that it sends all of the stream obj as initial
                // values which is unneccessary for the component
                // same as initialValues={{ title: '', description: '' }}
                initialValues={_.pick(this.props.stream, 'title', 'description')}
                onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    // as the streams is an obj with keys of ids
    return { stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);