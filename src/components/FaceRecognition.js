import React from "react";
import './FaceRecognition.css';
const FaceRecognition = ({ imageUrl, box}) => {
  return (
    <div className="tc center">
      <div className= 'image-container'>
      <div className= 'bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left:box.leftCol }}> </div>
        <img id='inputimage' alt="" src={imageUrl} width='500px' height='auto' />
      </div>
    </div>
  );
};
export default FaceRecognition;
