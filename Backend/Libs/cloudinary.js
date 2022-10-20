const cloudinary = require('cloudinary').v2;

cloudinary.config({
   secure:true
  });


  
 const uploadImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
      folder: "imagesbank",
    });
  };
  
   const deleteImage = async (id) => {
    return await cloudinary.uploader.destroy(id);
  };
  

  module.exports = {uploadImage, deleteImage}