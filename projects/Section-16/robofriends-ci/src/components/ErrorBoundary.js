import React from 'react';

const ErrorBoundary = ({children}) => {

    try {
        return children
    }
    catch(err) {
        return <h1>Oops, Something Went Wrong</h1>
    }
}

export default ErrorBoundary
