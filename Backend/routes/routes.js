const express = require("express");
const router = express.Router();
const {getCarouselInfo, createCarouselInfo, updateCarouselInfo, deleteCarouselInfo,} = require("../Controllers/carouselControllers");
const {getUploadedImages, addUploadedImage,deleteUploadedImage} = require('../Controllers/uploadImageControllers')


//CarouselRoute
router.route("/carousel").get(getCarouselInfo).post(createCarouselInfo);
router.route("/carousel/:id").put(updateCarouselInfo).delete(deleteCarouselInfo);

//UploadImageRoute
router.route("/imagebank").get(getUploadedImages).post(addUploadedImage);
router.route("/imagebank/:id").delete(deleteUploadedImage);

module.exports = router;
