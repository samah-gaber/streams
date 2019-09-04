import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
    // renderInput(formProps) {
    //     return (
        // <input 
        // onChange={ formProps.input.onChange }
        // value={ formProps.input.value }/>

        //     );
        // }
        
    //alternate syntax 
    
    renderInput = ({ input, label, meta }) => {
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

    renderError = ({ error, touched }) => {
        if(touched && error) {
            return <div className='ui pointing label'>{error}</div> 
        }
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
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

// how to use both connect and reduxForm 

// one way :
// export default connect()( reduxForm({
//     form: 'streamCreate',
//     validate
// })(StreamCreate) );

// another way
export default reduxForm({
    form: 'StreamForm',
    validate
})(StreamForm);

