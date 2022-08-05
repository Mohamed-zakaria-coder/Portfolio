import React  from 'react'
import {GoLocation} from 'react-icons/go'
function Props(props){
    
    return(
        
     <div className='props'>
        <img src={props.img} />
        <div>
        <GoLocation className='props-icon'/> <span className='so'>{props.location}</span> <span className='so'><a href={props.maps}>View on google maps</a></span>
        <h1>{props.title}</h1>
        {props.startDate && <div className='Date'>{props.startDate} - {props.endDate}</div>}
        <p>{props.description}</p>
            
        </div>
       
     </div>
    
    )
}
export default Props