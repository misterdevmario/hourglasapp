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
 const uploadStaffImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
      folder: "StaffImages",
    });
  };
  
   const deleteStaffImage = async (id) => {
    return await cloudinary.uploader.destroy(id);
  };
  
 const uploadBarsRestaurantsImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
      folder: "BarsRestaurantsImages",
    });
  };
  
   const deleteBarsRestaurantsImage = async (id) => {
    return await cloudinary.uploader.destroy(id);
  };
 const uploadFlyerImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
      folder: "Flyers",
    });
  };
  
   const deleteFlyerImage = async (id) => {
    return await cloudinary.uploader.destroy(id);
  };
  

  module.exports = {uploadImage, deleteImage, uploadStaffImage, deleteStaffImage, uploadBarsRestaurantsImage, deleteBarsRestaurantsImage,uploadFlyerImage,deleteFlyerImage}
  