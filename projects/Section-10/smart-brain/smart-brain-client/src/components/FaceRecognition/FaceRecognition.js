import React from 'react';
import './FaceRecognition.css';
import Outline from '../Outline/Outline';

const FaceRecognition = ({ imageUrl, boxes }) => {
  console.log(`FR-Component: ${boxes}`);
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        <Outline boxes={boxes} />
      </div>
    </div>
  );
}

export default FaceRecognition;