import React from 'react'

const Alert = (props) => {

    // capital the first letter of type. i.e. Success
    //we use bootstrap class and in bootstrap class success. 
    const capital = (words) => {
        const word = words.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        // defaul value of alert is null, so chrome give error.
        // solve the error using below syntax
        props.alertmsg && <div className={`alert alert-${props.alertmsg.type} alert-dismissible fade show`} role="alert">
            <strong>{capital(props.alertmsg.type)}</strong> :- {props.alertmsg.msg}
        </div>

    );
}

export default Alert;