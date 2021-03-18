import React, { useState } from "react";
import ImageUploader from "react-images-upload";

function ImageUplaod() {
  const [image, setImage] = useState({image:[]});
  //   const selectImageHandler = (e) => {

  //    setImages(e.target.files[0])

  //   };

  //   return (
  //     <div>
  //       <input type="file" onChange={selectImageHandler} />

  //     </div>
  //   );

  const uploadImage = (e) => {
    setImage({image});
    console.log(image);
  };

  return (
    <ImageUploader
      withIcon={true}
      buttonText="Choose images"
      onChange={uploadImage}
      imgExtension={[".jpg", ".gif", ".png", ".gif"]}
      maxFileSize={5242880}
      value={image}
    />
  );
}

export default ImageUplaod;
