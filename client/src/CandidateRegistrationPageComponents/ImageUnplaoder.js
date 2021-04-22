import React, { useState } from "react";
import ImageUploader from "react-images-upload";

function ImageUplaod() {
  const [image, setImage] = useState("");
  const uploadImage = (e) => {
    console.log(image);
  
  };

  return (
    <form action="#" enctype="multipart/form-data" method="POST">
      <ImageUploader
        style={imageUploaderStyle}
        buttonText="Choose images"
        onChange={uploadImage}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
        type="image"
        value={image}
        name="myImage"
        accept=".jpg"
      />
    </form>
  );
}

const imageUploaderStyle = {
  marginLeft: "80%",
};

export default ImageUplaod;
