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

//Carousel Staff Controllers
const {getCarouselStaffMonday, createCarouselStaffMonday, updateCarouselStaffMonday, deleteCarouselStaffMonday,} = require("../Controllers/CarouselStaff/carouselStaffControllerMonday");
const {getCarouselStaffThuesday, createCarouselStaffThuesday, updateCarouselStaffThuesday, deleteCarouselStaffThuesday,} = require("../Controllers/CarouselStaff/carouselStaffControllerThuesday");
const {getCarouselStaffWednesday, createCarouselStaffWednesday, updateCarouselStaffWednesday, deleteCarouselStaffWednesday,} = require("../Controllers/CarouselStaff/carouselStaffControllerWednesday");
const {getCarouselStaffThursday, createCarouselStaffThursday, updateCarouselStaffThursday, deleteCarouselStaffThursday,} = require("../Controllers/CarouselStaff/carouselStaffControllerThursday");
const {getCarouselStaffFriday, createCarouselStaffFriday, updateCarouselStaffFriday, deleteCarouselStaffFriday,} = require("../Controllers/CarouselStaff/carouselStaffControllerFriday");
const {getCarouselStaffSaturday, createCarouselStaffSaturday, updateCarouselStaffSaturday, deleteCarouselStaffSaturday,} = require("../Controllers/CarouselStaff/carouselStaffControllerSaturday");
const {getCarouselStaffSunday, createCarouselStaffSunday, updateCarouselStaffSunday, deleteCarouselStaffSunday,} = require("../Controllers/CarouselStaff/carouselStaffControllerSunday");

//Carousel Staff Controllers
const {getCarouselFlyerMonday, createCarouselFlyerMonday, updateCarouselFlyerMonday, deleteCarouselFlyerMonday,} = require("../Controllers/CarouselFlyer/carouselFlyerControllerMonday");
const {getCarouselFlyerThuesday, createCarouselFlyerThuesday, updateCarouselFlyerThuesday, deleteCarouselFlyerThuesday,} = require("../Controllers/CarouselFlyer/carouselFlyerControllerThuesday");
const {getCarouselFlyerWednesday, createCarouselFlyerWednesday, updateCarouselFlyerWednesday, deleteCarouselFlyerWednesday,} = require("../Controllers/CarouselFlyer/carouselFlyerControllerWednesday");
const {getCarouselFlyerThursday, createCarouselFlyerThursday, updateCarouselFlyerThursday, deleteCarouselFlyerThursday,} = require("../Controllers/CarouselFlyer/carouselFlyerControllerThursday");
const {getCarouselFlyerFriday, createCarouselFlyerFriday, updateCarouselFlyerFriday, deleteCarouselFlyerFriday,} = require("../Controllers/CarouselFlyer/carouselFlyerControllerFriday");
const {getCarouselFlyerSaturday, createCarouselFlyerSaturday, updateCarouselFlyerSaturday, deleteCarouselFlyerSaturday,} = require("../Controllers/CarouselFlyer/carouselFlyerControllerSaturday");
const {getCarouselFlyerSunday, createCarouselFlyerSunday, updateCarouselFlyerSunday, deleteCarouselFlyerSunday,} = require("../Controllers/CarouselFlyer/carouselFlyerControllerSunday");


//Carousel Routes
router.route("/carouselactivities/monday").get(getCarouselMonday).post(createCarouselMonday);
router.route("/carouselactivities/monday/:id").put(updateCarouselMonday).delete(deleteCarouselMonday);
router.route("/carouselactivities/thuesday").get(getCarouselThuesday).post(createCarouselThuesday);
router.route("/carouselactivities/thuesday/:id").put(updateCarouselThuesday).delete(deleteCarouselThuesday);
router.route("/carouselactivities/wednesday").get(getCarouselWednesday).post(createCarouselWednesday);
router.route("/carouselactivities/wednesday/:id").put(updateCarouselWednesday).delete(deleteCarouselWednesday);
router.route("/carouselactivities/thursday").get(getCarouselThursday).post(createCarouselThursday);
router.route("/carouselactivities/thursday/:id").put(updateCarouselThursday).delete(deleteCarouselThursday);
router.route("/carouselactivities/friday").get(getCarouselFriday).post(createCarouselFriday);
router.route("/carouselactivities/friday/:id").put(updateCarouselFriday).delete(deleteCarouselFriday);
router.route("/carouselactivities/saturday").get(getCarouselSaturday).post(createCarouselSaturday);
router.route("/carouselactivities/saturday/:id").put(updateCarouselSaturday).delete(deleteCarouselSaturday);
router.route("/carouselactivities/Sunday").get(getCarouselSunday).post(createCarouselSunday);
router.route("/carouselactivities/Sunday/:id").put(updateCarouselSunday).delete(deleteCarouselFriday);

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
router.route("/restaurants/sunday/:id").put(updateRestaurantsSunday).delete(deleteCarouselFlyerSunday)

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

//Carousel Staff
router.route("/carouselStaff/monday").get(getCarouselStaffMonday).post(createCarouselStaffMonday);
router.route("/carouselStaff/monday/:id").put(updateCarouselStaffMonday).delete(deleteCarouselStaffMonday);
router.route("/carouselStaff/thuesday").get(getCarouselStaffThuesday).post(createCarouselStaffThuesday);
router.route("/carouselStaff/thuesday/:id").put(updateCarouselStaffThuesday).delete(deleteCarouselStaffThuesday);
router.route("/carouselStaff/wednesday").get(getCarouselStaffWednesday).post(createCarouselStaffWednesday);
router.route("/carouselStaff/wednesday/:id").put(updateCarouselStaffWednesday).delete(deleteCarouselStaffWednesday);
router.route("/carouselStaff/thursday").get(getCarouselStaffThursday).post(createCarouselStaffThursday);
router.route("/carouselStaff/thursday/:id").put(updateCarouselStaffThursday).delete(deleteCarouselStaffThursday);
router.route("/carouselStaff/friday").get(getCarouselStaffFriday).post(createCarouselStaffFriday);
router.route("/carouselStaff/friday/:id").put(updateCarouselStaffFriday).delete(deleteCarouselStaffFriday);
router.route("/carouselStaff/saturday").get(getCarouselStaffSaturday).post(createCarouselStaffSaturday);
router.route("/carouselStaff/saturday/:id").put(updateCarouselStaffSaturday).delete(deleteCarouselStaffSaturday);
router.route("/carouselStaff/Sunday").get(getCarouselStaffSunday).post(createCarouselStaffSunday);
router.route("/carouselStaff/Sunday/:id").put(updateCarouselStaffSunday).delete(deleteCarouselStaffFriday);

//Carousel Flyer
router.route("/carouselFlyer/monday").get(getCarouselFlyerMonday).post(createCarouselFlyerMonday);
router.route("/carouselFlyer/monday/:id").put(updateCarouselFlyerMonday).delete(deleteCarouselFlyerMonday);
router.route("/carouselFlyer/thuesday").get(getCarouselFlyerThuesday).post(createCarouselFlyerThuesday);
router.route("/carouselFlyer/thuesday/:id").put(updateCarouselFlyerThuesday).delete(deleteCarouselFlyerThuesday);
router.route("/carouselFlyer/wednesday").get(getCarouselFlyerWednesday).post(createCarouselFlyerWednesday);
router.route("/carouselFlyer/wednesday/:id").put(updateCarouselFlyerWednesday).delete(deleteCarouselFlyerWednesday);
router.route("/carouselFlyer/thursday").get(getCarouselFlyerThursday).post(createCarouselFlyerThursday);
router.route("/carouselFlyer/thursday/:id").put(updateCarouselFlyerThursday).delete(deleteCarouselFlyerThursday);
router.route("/carouselFlyer/friday").get(getCarouselFlyerFriday).post(createCarouselFlyerFriday);
router.route("/carouselFlyer/friday/:id").put(updateCarouselFlyerFriday).delete(deleteCarouselFlyerFriday);
router.route("/carouselFlyer/saturday").get(getCarouselFlyerSaturday).post(createCarouselFlyerSaturday);
router.route("/carouselFlyer/saturday/:id").put(updateCarouselFlyerSaturday).delete(deleteCarouselFlyerSaturday);
router.route("/carouselFlyer/Sunday").get(getCarouselFlyerSunday).post(createCarouselFlyerSunday);
router.route("/carouselFlyer/Sunday/:id").put(updateCarouselFlyerSunday).delete(deleteCarouselFlyerFriday);






//UploadImageRoute
router.route("/imagebank").get(getUploadedImages).post(addUploadedImage);
router.route("/imagebank/:id").delete(deleteUploadedImage)


module.exports = router