/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import "./About.scss"
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  return (
<div className="about" id='ab'>
        <div className="container">
            <div className="left">
            <h2>Bienvenue sur notre application de chat en temps réel !</h2>
             <div className="title">
                <LazyLoadImage src="../public/img/check.png" alt="check" />
                Connectez-vous avec un nom d'utilisateur et commencez à discuter avec d'autres utilisateurs connectés.
              </div> 
              <div className="title">
                <LazyLoadImage src="../public/img/check.png" alt="check" />
                Utilisez les fonctionnalités de chat en temps réel pour envoyer et recevoir des messages instantanément.
              </div>
            
                <div className="title">
                  <LazyLoadImage src="../public/img/check.png" alt="check" />
                  Profitez d'une expérience de communication fluide et interactive grâce à notre système basé sur SignalR et React.
                </div>

               
                <br/>
                
                {/* <div className="join">
                        <button>Join</button>
                </div> */}
            </div>
            <div className="right">
                 <LazyLoadImage src="./img/About.png" alt="" /> 
            </div>
        </div>
    </div>
    
      )
}

export default About