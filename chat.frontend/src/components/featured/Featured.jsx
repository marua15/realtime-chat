import React from 'react'
import "./Featured.scss"
import { LazyLoadImage } from "react-lazy-load-image-component";

const Featured = () => {
  return (
    <div className="featured" id='feat'>
        <div className="container">
            <div className="left">
                <h1>
                La magie du chat en temps réel réside dans sa capacité à transformer des inconnus en amis et à rendre le monde plus proche
                </h1>
                <br/>
                
                <div className="join">
                        <button>Join</button>
                </div>
            </div>
            <div className="right">
                <LazyLoadImage src="./img/messenger.png" alt="" />
            </div>
        </div>
    </div>
    
    )
}

export default Featured