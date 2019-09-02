import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    // renderInput(formProps) {
    //     return (
        // <input 
        // onChange={ formProps.input.onChange }
        // value={ formProps.input.value }/>

        //     );
        // }
        
    //alternate syntax 
    renderError = ({ error, touched }) => {
        if(touched && error) {
            return <div className='ui pointing label'>{error}</div> 
        }
    }
    renderInput = ({ input, label, meta }) => {
        console.log('meta: ', meta);
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            // <div className={className}>
            <div className={className}>
                <label>{ label }</label>
                <input { ...input } autoComplete='off' />
                { this.renderError(meta) }
            </div>
        );
    };



    onSubmit(formValues) {
        console.log(formValues);
    };
    
    render() {
        return (
            <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='title' component={this.renderInput} label='Enter Title'/>
                <Field name='description' component={this.renderInput} label='Enter Description'/>
                <button className='ui button primary'>Submit</button>
            </form>
        );
    };
};

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) {
        //user didn't enter title input
        errors.title = 'You must enter a title';
    };
    if(!formValues.description) {
        //user didn't enter title input
        errors.description = 'You must enter a description';
    };

    return errors;
}

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);