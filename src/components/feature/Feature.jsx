import React from 'react';
import './feature.css';

import ai from '../../assets/react-original.svg'





const Feature = ({title, text, img}) => (
    
        <div className='gpt3__features-container__feature'>
            <div className='gpt3__features-container__feature-title'>
                <h1>{title}</h1>
              <img src={img} alt="image"/>
            </div>
            <div className='gpt3__features-container_feature-text'>
                <p>{text}</p></div>
          
        </div>
    
)

export default Feature

   
