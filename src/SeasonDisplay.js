import './SeasonDisplay.css';
import React from 'react'

const seasonConfig = {
      Summer : {
          text : "Let's drink rasna ",
          iconName : 'sun'
      },

      Winter : {
          text : 'Goto Komboler niche' ,
          iconName : 'snowflake'
      },
      Rainyseason : {
          text : 'Chole asho Chatar niche',
          iconName : 'umbrella'
      }
}

const getSeason = (lat,month)=>{
    if (month > 1 && month < 5 ){
        return lat > 0 ? 'Rainyseason' : 'Winter'
    }
    else if(month > 4 && month < 10){
        return lat > 0 ? 'Rainyseason' : 'Winter'
    }
    else{
        return lat > 0 ? 'Winter' : 'Summer'
    }
} 

const SeasonDisplay = (props)=>{
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season]
     
    return(
        <div className = {`season-display ${season}`}>
            <i className = {`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className = {`icon-right massive ${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay;