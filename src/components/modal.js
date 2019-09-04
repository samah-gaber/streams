import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className='ui dimmer modals visible active'>
            {/* if I didn't add the stopPropagation then any click any where on the modal it self would dismiss it
        but if I added it then only I can dismiss the modal by clicking on it's background */}
            <div onClick={ (e) => e.stopPropagation() } className='ui standard modal visible active'>
                <div className='header'>{ props.title }</div>
                <div className='content'>
                   { props.content }
                </div>
                <div className='actions'>
                    { props.actions }
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
};

export default Modal;