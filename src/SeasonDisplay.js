import React from 'react'

const getSeason = (lat,month)=>{
    if (month > 1 && month < 5 ){
        return lat > 0 ? 'pre-monsoon/ Summer' : 'Winter'
    }
    if(month > 4 && month < 10){
        return lat > 0 ? 'Rainy Season' : 'Winter'
    }
    else{
        return lat > 0 ? 'Winter' : 'Pre-monsoosn/Summer'
    }
}

const SeasonDisplay = (props)=>{
    const season = getSeason(props.lat, new Date().getMonth())
    console.log(season)
    return(
        <div>
            <h1>SeasonDisplay</h1>
        </div>
    )
}

export default SeasonDisplay;