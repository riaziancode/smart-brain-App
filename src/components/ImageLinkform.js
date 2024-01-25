import "./ImageLinkform.css";

const ImageLinkform = ({ onInputChange, onPictureSubmit}) => {
  return (
    <div className='main-detect'>
      <p className="center para">
        {"This Magic Brain will Detect Faces in your Picture. Give it a try!"}
      </p>
      <div className="input-el center w-40">
        <input
          className="input w-60"
          type="text"
          placeholder="Enter Image URL/Source"
          onChange={onInputChange}
        />
        <button className="grow button" onClick={onPictureSubmit}> {"Detect"} </button>
      </div>
    </div>
  );
};

export default ImageLinkform;
