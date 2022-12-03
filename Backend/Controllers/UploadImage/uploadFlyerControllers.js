const asyncHandler = require("express-async-handler");
const UploadFlyer = require("../../Models/UploadImage/uploadFlyerImageSchema");
const { uploadFlyerImage, deleteFlyerImage } = require("../../Libs/cloudinary");
const fs = require("fs-extra");

const getUploadedFlyerImages = asyncHandler(async (req, res) => {
  const getImages = await UploadFlyer.find();
  res.status(200).json(getImages);
});

const getOneUploadedFlyerImage = asyncHandler(async(req,res)=>{
  const getOneFlyerImage = await UploadFlyer.findById(req.params.id)
  res.status(200).json(getOneFlyerImage)
})

const addUploadedFlyerImage = asyncHandler(async (req, res) => {
  const { en, es } = req.body;
  if (!req.body) {
    res.status(400);
    throw new Error("Not found");
  }
  let image;
  if (req.files) {
    const result = await uploadFlyerImage(req.files.image.tempFilePath);
    image = {
      url: result.secure_url,
      public_id: result.public_id,
    };
    await fs.remove(req.files.image.tempFilePath);
  }
  const addImage = await UploadFlyer.create({ en, es, image });

  return res.status(200).json(addImage);
});

const deleteUploadedFlyerImage = asyncHandler(async (req, res) => {
  const imageRemoved = await UploadFlyer.findByIdAndDelete(req.params.id);
  if (!imageRemoved) {
    res.status(400);
    throw new Error("Image not found");
  }
  if (imageRemoved.image.public_id) {
    await deleteFlyerImage(imageRemoved.image.public_id);
  }

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getUploadedFlyerImages,
  addUploadedFlyerImage,
  deleteUploadedFlyerImage,
  getOneUploadedFlyerImage
};
