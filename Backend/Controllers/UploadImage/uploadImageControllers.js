const asyncHandler = require("express-async-handler");
const UploadImage = require("../../Models/UploadImage/uploadImageSchema");
const { uploadImage, deleteImage } = require("../../Libs/cloudinary");
const fs = require("fs-extra");

const getUploadedImages = asyncHandler(async (req, res) => {
  const getImages = await UploadImage.find();
  res.status(200).json(getImages);
});

const addUploadedImage = asyncHandler(async (req, res) => {
  const { en, es } = req.body;
  if (!req.body) {
    res.status(400);
    throw new Error("Not found");
  }
  let image;
  if (req.files) {
    const result = await uploadImage(req.files.image.tempFilePath);
    image = {
      url: result.secure_url,
      public_id: result.public_id,
    };
    await fs.remove(req.files.image.tempFilePath);
  }
  const addImage = await UploadImage.create({ en, es, image });

  return res.status(200).json(addImage);
});

const deleteUploadedImage = asyncHandler(async (req, res) => {
  const imageRemoved = await UploadImage.findByIdAndDelete(req.params.id);
  if (!imageRemoved) {
    res.status(400);
    throw new Error("Image not found");
  }
  if (imageRemoved.image.public_id) {
    await deleteImage(imageRemoved.image.public_id);
  }

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getUploadedImages,
  addUploadedImage,
  deleteUploadedImage,
};
