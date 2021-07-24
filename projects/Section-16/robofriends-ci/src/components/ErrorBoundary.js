import React from 'react'

const ErrorBoundary = (props) => {

    try {
        return props.children
    }
    catch {
        return <h1>Something Went Wrong.</h1>
    }
  
}

export default ErrorBoundary
