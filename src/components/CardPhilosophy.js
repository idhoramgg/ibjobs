import React from 'react';

import './cardPhilosophy.css'
import Button from './Button';

const CardPhilosophy = ({data}) => {
    
    let styles = {
        display : "flex",
        flexDirection : "row-reverse"
    }
        return(
          <>
        { 
            data.map(el => {
                if(el.position === "left"){
                    return (
                        <div className="box">
                        <div className="box-left">
                            <img src={el.images} />
                        </div>
                        <div className="box-right">
                            <h2>{el.title}</h2>
                            <p>{el.description}</p>
                            <Button text={el.textButton} />
                        </div>
            
                    </div>) 
                } else {
                    return (
                        <div className="box" style={styles}>
                        <div className="box-left">
                            <img src={el.images} />
                        </div>
                        <div className="box-right">
                            <h2>{el.title}</h2>
                            <p>{el.description}</p>
                            <Button text={el.textButton} />
                        </div>
            
                    </div>) 
                }
            })
        } </>)
    
}

export default CardPhilosophy;