import React from 'react'

const getSeason = (lat,month)=>{
    if (month > 1 && month < 5 ){
        return lat > 0 ? 'Summer' : 'Winter'
    }
    if(month > 4 && month < 10){
        return lat > 0 ? 'Rainy Season' : 'Winter'
    }
    else{
        return lat > 0 ? 'Winter' : 'Summer'
    }
} 

const SeasonDisplay = (props)=>{
    const season = getSeason(props.lat, new Date().getMonth())
    const text = ()=>{
        if(season === 'Summer'){
            return "Let's drink rasna "
        }
        if(season === 'Winter'){
            return 'Goto Komboler niche'
        }
        else{
            return 'Chole asho Chatar niche'
        }
    }
    const icon = ()=>{
        if(season === 'Summer'){
            return "sun"
        }
        if(season === 'Winter'){
            return 'snowflake'
        }
        else{
            return 'umbrella'
        }
    }
    return(
        <div>
            <i className = {`${icon} icon`} />
            <h1>{text()}</h1>
            <i className = {`${icon} icon`} />
        </div>
    )
}

export default SeasonDisplay;