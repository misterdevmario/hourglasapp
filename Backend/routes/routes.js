const express = require("express");
const router = express.Router();

//UploadImage Controllers
const {getUploadedImages, addUploadedImage,deleteUploadedImage} = require('../Controllers/uploadImageControllers')

//CarouselActivities Controllers
const {getCarouselMonday, createCarouselMonday, updateCarouselMonday, deleteCarouselMonday,} = require("../Controllers/CarouselActivities/carouselControllerMonday");
const {getCarouselThuesday, createCarouselThuesday, updateCarouselThuesday, deleteCarouselThuesday,} = require("../Controllers/CarouselActivities/carouselControllerThuesday");
const {getCarouselWednesday, createCarouselWednesday, updateCarouselWednesday, deleteCarouselWednesday,} = require("../Controllers/CarouselActivities/carouselControllerWednesday");
const {getCarouselThursday, createCarouselThursday, updateCarouselThursday, deleteCarouselThursday,} = require("../Controllers/CarouselActivities/carouselControllerThursday");
const {getCarouselFriday, createCarouselFriday, updateCarouselFriday, deleteCarouselFriday,} = require("../Controllers/CarouselActivities/carouselControllerFriday");
const {getCarouselSaturday, createCarouselSaturday, updateCarouselSaturday, deleteCarouselSaturday,} = require("../Controllers/CarouselActivities/carouselControllerSaturday");
const {getCarouselSunday, createCarouselSunday, updateCarouselSunday, deleteCarouselSunday,} = require("../Controllers/CarouselActivities/carouselControllerSunday");


//Restaurants Controllers
const {getRestaurantsMonday, createRestaurantsMonday, updateRestaurantsMonday, deleteRestaurantsMonday} = require('../Controllers/Restaurants/restaurantsControllerMonday')
const {getRestaurantsThuesday, createRestaurantsThuesday, updateRestaurantsThuesday, deleteRestaurantsThuesday} = require('../Controllers/Restaurants/restaurantsControllerThuesday')
const {getRestaurantsWednesday, createRestaurantsWednesday, updateRestaurantsWednesday, deleteRestaurantsWednesday} = require('../Controllers/Restaurants/restaurantsControllerWednesday')
const {getRestaurantsThursday, createRestaurantsThursday, updateRestaurantsThursday, deleteRestaurantsThursday} = require('../Controllers/Restaurants/restaurantsControllerThursday')
const {getRestaurantsFriday, createRestaurantsFriday, updateRestaurantsFriday, deleteRestaurantsFriday} = require('../Controllers/Restaurants/restaurantsControllerFriday')
const {getRestaurantsSaturday, createRestaurantsSaturday, updateRestaurantsSaturday, deleteRestaurantsSaturday} = require('../Controllers/Restaurants/restaurantsControllerSaturday')
const {getRestaurantsSunday, createRestaurantsSunday, updateRestaurantsSunday, deleteRestaurantsSunday} = require('../Controllers/Restaurants/restaurantsControllerSunday')

//Bars Controllers
const {getBarsMonday, createBarsMonday, updateBarsMonday, deleteBarsMonday} = require('../Controllers/Bars/barsControllerMonday')
const {getBarsThuesday, createBarsThuesday, updateBarsThuesday, deleteBarsThuesday} = require('../Controllers/Bars/barsControllerThuesday')
const {getBarsWednesday, createBarsWednesday, updateBarsWednesday, deleteBarsWednesday} = require('../Controllers/Bars/barsControllerWednesday')
const {getBarsThursday, createBarsThursday, updateBarsThursday, deleteBarsThursday} = require('../Controllers/Bars/barsControllerThursday')
const {getBarsFriday, createBarsFriday, updateBarsFriday, deleteBarsFriday} = require('../Controllers/Bars/barsControllerFriday')
const {getBarsSaturday, createBarsSaturday, updateBarsSaturday, deleteBarsSaturday} = require('../Controllers/Bars/barsControllerSaturday')
const {getBarsSunday, createBarsSunday, updateBarsSunday, deleteBarsSunday} = require('../Controllers/Bars/barsControllerSunday')
//Carousel Routes
router.route("/carousel/monday").get(getCarouselMonday).post(createCarouselMonday);
router.route("/carousel/monday/:id").put(updateCarouselMonday).delete(deleteCarouselMonday);
router.route("/carousel/thuesday").get(getCarouselThuesday).post(createCarouselThuesday);
router.route("/carousel/thuesday/:id").put(updateCarouselThuesday).delete(deleteCarouselThuesday);
router.route("/carousel/wednesday").get(getCarouselWednesday).post(createCarouselWednesday);
router.route("/carousel/wednesday/:id").put(updateCarouselWednesday).delete(deleteCarouselWednesday);
router.route("/carousel/thursday").get(getCarouselThursday).post(createCarouselThursday);
router.route("/carousel/thursday/:id").put(updateCarouselThursday).delete(deleteCarouselThursday);
router.route("/carousel/friday").get(getCarouselFriday).post(createCarouselFriday);
router.route("/carousel/friday/:id").put(updateCarouselFriday).delete(deleteCarouselFriday);
router.route("/carousel/saturday").get(getCarouselSaturday).post(createCarouselSaturday);
router.route("/carousel/saturday/:id").put(updateCarouselSaturday).delete(deleteCarouselSaturday);
router.route("/carousel/Sunday").get(getCarouselSunday).post(createCarouselSunday);
router.route("/carousel/Sunday/:id").put(updateCarouselSunday).delete(deleteCarouselFriday);

//Restaurants Routes
router.route("/restaurants/monday").get(getRestaurantsMonday).post(createRestaurantsMonday);
router.route("/restaurants/monday/:id").put(updateRestaurantsMonday).delete(deleteRestaurantsMonday)
router.route("/restaurants/thuesday").get(getRestaurantsThuesday).post(createRestaurantsThuesday);
router.route("/restaurants/thuesday/:id").put(updateRestaurantsThuesday).delete(deleteRestaurantsThuesday)
router.route("/restaurants/wednesday").get(getRestaurantsWednesday).post(createRestaurantsWednesday);
router.route("/restaurants/wednesday/:id").put(updateRestaurantsWednesday).delete(deleteRestaurantsWednesday)
router.route("/restaurants/thursday").get(getRestaurantsThursday).post(createRestaurantsThursday);
router.route("/restaurants/thursday/:id").put(updateRestaurantsThursday).delete(deleteRestaurantsThursday)
router.route("/restaurants/friday").get(getRestaurantsFriday).post(createRestaurantsFriday);
router.route("/restaurants/friday/:id").put(updateRestaurantsFriday).delete(deleteRestaurantsFriday)
router.route("/restaurants/saturday").get(getRestaurantsSaturday).post(createRestaurantsSaturday);
router.route("/restaurants/saturday/:id").put(updateRestaurantsSaturday).delete(deleteRestaurantsSaturday)
router.route("/restaurants/sunday").get(getRestaurantsSunday).post(createRestaurantsSunday);
router.route("/restaurants/sunday/:id").put(updateRestaurantsSunday).delete(deleteRestaurantsSunday)

//Bars Routes
router.route("/bars/monday").get(getBarsMonday).post(createBarsMonday);
router.route("/bars/monday/:id").put(updateBarsMonday).delete(deleteBarsMonday)
router.route("/bars/thuesday").get(getBarsThuesday).post(createBarsThuesday);
router.route("/bars/thuesday/:id").put(updateBarsThuesday).delete(deleteBarsThuesday)
router.route("/bars/wednesday").get(getBarsWednesday).post(createBarsWednesday);
router.route("/bars/wednesday/:id").put(updateBarsWednesday).delete(deleteBarsWednesday)
router.route("/bars/thursday").get(getBarsThursday).post(createBarsThursday);
router.route("/bars/thursday/:id").put(updateBarsThursday).delete(deleteBarsThursday)
router.route("/bars/friday").get(getBarsFriday).post(createBarsFriday);
router.route("/bars/friday/:id").put(updateBarsFriday).delete(deleteBarsFriday)
router.route("/bars/saturday").get(getBarsSaturday).post(createBarsSaturday);
router.route("/bars/saturday/:id").put(updateBarsSaturday).delete(deleteBarsSaturday)
router.route("/bars/sunday").get(getBarsSunday).post(createBarsSunday);
router.route("/bars/sunday/:id").put(updateBarsSunday).delete(deleteBarsSunday)



//UploadImageRoute
router.route("/imagebank").get(getUploadedImages).post(addUploadedImage);
router.route("/imagebank/:id").delete(deleteUploadedImage);

module.exports = router;

