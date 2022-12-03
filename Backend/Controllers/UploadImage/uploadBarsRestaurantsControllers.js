const asyncHandler = require("express-async-handler");
const UploadBarsRestaurantsImage = require("../../Models/UploadImage/uploadBarsRestaurantsImageSchema");
const { uploadBarsRestaurantsImage, deleteBarsRestaurantsImage } = require("../../Libs/cloudinary");
const fs = require("fs-extra");

const getUploadedBarsRestaurantsImages = asyncHandler(async (req, res) => {
  const getImages = await UploadBarsRestaurantsImage.find();
  res.status(200).json(getImages);
});

const getOneBarsRestaurantsImage = asyncHandler(async(req,res)=>{
  const getOneImage = await UploadBarsRestaurantsImage.findById(req.params.id)
  res.status(200).json(getOneImage)
})

const addUploadedBarsRestaurantsImage = asyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!req.body) {
    res.status(400);
    throw new Error("Not found");
  }
  let image;
  if (req.files) {
    const result = await uploadBarsRestaurantsImage(req.files.image.tempFilePath);
    image = {
      url: result.secure_url,
      public_id: result.public_id,
    };
    await fs.remove(req.files.image.tempFilePath);
  }
  const addImage = await UploadBarsRestaurantsImage.create({ name, image });

  return res.status(200).json(addImage);
});

const deleteUploadedBarsRestaurantsImage = asyncHandler(async (req, res) => {
  const imageRemoved = await UploadBarsRestaurantsImage.findByIdAndDelete(req.params.id);
  if (!imageRemoved) {
    res.status(400);
    throw new Error("Image not found");
  }
  if (imageRemoved.image.public_id) {
    await deleteBarsRestaurantsImage(imageRemoved.image.public_id);
  }

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getUploadedBarsRestaurantsImages,
  addUploadedBarsRestaurantsImage,
  deleteUploadedBarsRestaurantsImage,
  getOneBarsRestaurantsImage
};
