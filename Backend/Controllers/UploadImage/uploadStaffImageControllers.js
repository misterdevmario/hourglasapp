const asyncHandler = require("express-async-handler");
const UploadStaffImage = require("../../Models/UploadImage/uploadStaffImageSchema");
const { uploadStaffImage, deleteStaffImage } = require("../../Libs/cloudinary");
const fs = require("fs-extra");

const getUploadedStaffImages = asyncHandler(async (req, res) => {
  const getImages = await UploadStaffImage.find();
  res.status(200).json(getImages);
});

const addUploadedStaffImage = asyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!req.body) {
    res.status(400);
    throw new Error("Not found");
  }
  let image;
  if (req.files) {
    const result = await uploadStaffImage(req.files.image.tempFilePath);
    image = {
      url: result.secure_url,
      public_id: result.public_id,
    };
    await fs.remove(req.files.image.tempFilePath);
  }
  const addImage = await UploadStaffImage.create({ name, image });

  return res.status(200).json(addImage);
});

const deleteUploadedStaffImage = asyncHandler(async (req, res) => {
  const imageRemoved = await UploadStaffImage.findByIdAndDelete(req.params.id);
  if (!imageRemoved) {
    res.status(400);
    throw new Error("Image not found");
  }
  if (imageRemoved.image.public_id) {
    await deleteStaffImage(imageRemoved.image.public_id);
  }

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getUploadedStaffImages,
  addUploadedStaffImage,
  deleteUploadedStaffImage,
};
