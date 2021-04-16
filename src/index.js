import React from 'react';
import reactDom from 'react-dom';
import  ReactDom from 'react-dom'

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position)=> console.log(position),
        (err)=> console.log(err)
    )
    
    return (
        <div>
            <h1>Hello there</h1>
        </div>
    )
}
ReactDom.render(<App />,document.querySelector('#root'))