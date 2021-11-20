import React from "react";

const ImageList = (props) =>{
const images=props.Images.map((image) =>{
    return <img src={image.urls.regular} />
});

return <div>{images}</div>;

};

export default ImageList;