import React from 'react';
import  ReactDom from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import "semantic-ui-css/semantic.min.css";


class App extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state = {lat: null, errorMessage: '' };

       
    // }
    //Alternate way of initialize the State
    state = {lat : null , errorMessage: ''}
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=> this.setState({lat:position.coords.latitude}),
            err=> this.setState({errorMessage: err.message})
        );
        }



    render()
   
    {
        if(this.state.errorMessage && !this.state.lat)
          return(
              <div>
                  Error: {this.state.errorMessage}
              </div>
          )
        if(!this.state.errorMessage && this.state.lat)
          return(
              <div>
                  <SeasonDisplay lat =  {this.state.lat}/>
              </div>
          )
      
          return(
              <div>
                 Loading
              </div>
          )
    }
}



ReactDom.render(<App />,document.querySelector('#root'))