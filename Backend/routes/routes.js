const express = require("express");
const router = express.Router();

//UploadImage Controllers
const {getUploadedImages, addUploadedImage,deleteUploadedImage} = require('../Controllers/UploadImage/uploadImageControllers')
const {getUploadedStaffImages, addUploadedStaffImage,deleteUploadedStaffImage} = require('../Controllers/UploadImage/uploadStaffImageControllers')
const {getUploadedFlyerImages, addUploadedFlyerImage,deleteUploadedFlyerImage} = require('../Controllers/UploadImage/uploadFlyerControllers')
const {getUploadedBarsRestaurantsImages, addUploadedBarsRestaurantsImage,deleteUploadedBarsRestaurantsImage} = require('../Controllers/UploadImage/uploadBarsRestaurantsControllers')

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
const {getCarouselStaff, createCarouselStaff, updateCarouselStaff, deleteCarouselStaff,} = require("../Controllers/CarouselStaff/carouselStaffController");


//Carousel Staff Controllers


const {getVocabulary, addVocabulary, deleteVocabularyWord} = require('../Controllers/Language/vocabularyActivitiesControllers')
const {getLocationsVocabulary, addLocationsVocabulary, deleteLocationsVocabularyWord } = require('../Controllers/Language/vocabularyLocationsControllers')
const {getBarsVocabulary, addBarsVocabulary, deleteBarsVocabularyWord } = require('../Controllers/Language/vocabularyBarsControllers')
const {getRestaurantsVocabulary, addRestaurantsVocabulary, deleteRestaurantsVocabularyWord } = require('../Controllers/Language/vocabularyRestaurantsControllers')

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
router.route("/carouselactivities/Sunday/:id").put(updateCarouselSunday).delete(deleteCarouselSunday);

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

//Carousel Staff
router.route("/carouselstaff").get(getCarouselStaff).post(createCarouselStaff);
router.route("/carouselstaff/:id").put(updateCarouselStaff).delete(deleteCarouselStaff);


//Carousel Flyer




//Vocabulary Routes
router.route('/vocabulary/activities').get(getVocabulary).post(addVocabulary)
router.route('/vocabulary/activities/:id').delete(deleteVocabularyWord)
router.route('/vocabulary/locations').get(getLocationsVocabulary).post(addLocationsVocabulary)
router.route('/vocabulary/locations/:id').delete(deleteLocationsVocabularyWord)
router.route('/vocabulary/bars').get(getBarsVocabulary).post(addBarsVocabulary)
router.route('/vocabulary/bars/:id').delete(deleteBarsVocabularyWord)
router.route('/vocabulary/restaurants').get(getRestaurantsVocabulary).post(addRestaurantsVocabulary)
router.route('/vocabulary/restaurants/:id').delete(deleteRestaurantsVocabularyWord)


//UploadImageRoute
router.route("/imagebank").get(getUploadedImages).post(addUploadedImage);
router.route("/imagebank/:id").delete(deleteUploadedImage)
router.route("/imagebank/staff").get(getUploadedStaffImages).post(addUploadedStaffImage);
router.route("/imagebank/staff:id").delete(deleteUploadedStaffImage)
router.route("/imagebank/barsRestaurants").get(getUploadedBarsRestaurantsImages).post(addUploadedBarsRestaurantsImage);
router.route("/imagebank/barsRestaurants/:id").delete(deleteUploadedBarsRestaurantsImage)
router.route("/imagebank/flyer").get(getUploadedFlyerImages).post(addUploadedFlyerImage);
router.route("/imagebank/flyer/:id").delete(deleteUploadedFlyerImage)


module.exports = router