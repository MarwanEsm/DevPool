import React, {useState}from 'react';
import ImageUploader from 'react-images-upload';



function ImageUplaod () {

    const [images, setImages] = useState({images:[]});

    const uploadImage = (image) =>{
        setImages({images : images.concat(image)})
    }

    return (
        <ImageUploader
        withIcon={true}
        buttonText='Choose images'
        onChange={uploadImage}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
    />
    )

    
}









export default ImageUplaod;