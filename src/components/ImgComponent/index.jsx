import React from "react";
import './style.css';

const ImgComponent = (props) => {
    const {src, alt} = props;
    

    return (
        <div className="imgStyle">
            <img src={src} alt={alt}/>
        </div>
        
    );
};

export default ImgComponent;