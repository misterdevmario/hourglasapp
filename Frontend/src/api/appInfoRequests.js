import axios from "axios";
//Carousel Activities
export const getCarouselActRequestMonday = async () =>await axios.get("http://localhost:8000/carouselactivities/monday");
export const getCarouselActRequestThuesday = async () =>await axios.get("http://localhost:8000/carouselactivities/thuesday");
export const getCarouselActRequestWednesday = async () =>await axios.get("http://localhost:8000/carouselactivities/wednesday");
export const getCarouselActRequestThursday = async () =>await axios.get("http://localhost:8000/carouselactivities/thursday");
export const getCarouselActRequestFriday = async () =>await axios.get("http://localhost:8000/carouselactivities/friday");
export const getCarouselActRequestSaturday = async () =>await axios.get("http://localhost:8000/carouselactivities/saturday");
export const getCarouselActRequestSunday = async () =>await axios.get("http://localhost:8000/carouselactivities/sunday");
export const getOneCarouselActRequest = async (id) => await axios.get("http://localhost:8000/imagebank/" + id)


//Restaurants 
export const getRestaurantsRequestMonday = async () =>await axios.get("http://localhost:8000/restaurants/monday");
export const getRestaurantsRequestThuesday = async () =>await axios.get("http://localhost:8000/restaurants/thuesday");
export const getRestaurantsRequestWednesday = async () =>await axios.get("http://localhost:8000/restaurants/wednesday");
export const getRestaurantsRequestThursday = async () =>await axios.get("http://localhost:8000/restaurants/thursday");
export const getRestaurantsRequestFriday = async () =>await axios.get("http://localhost:8000/restaurants/friday");
export const getRestaurantsRequestSaturday = async () =>await axios.get("http://localhost:8000/restaurants/saturday");
export const getRestaurantsRequestSunday = async () =>await axios.get("http://localhost:8000/restaurants/sunday");

//Bars
export const getBarsRequestMonday = async () =>await axios.get("http://localhost:8000/bars/monday");
export const getBarsRequestThuesday = async () =>await axios.get("http://localhost:8000/bars/thuesday");
export const getBarsRequestWednesday = async () =>await axios.get("http://localhost:8000/bars/wednesday");
export const getBarsRequestThursday = async () =>await axios.get("http://localhost:8000/bars/thursday");
export const getBarsRequestFriday = async () =>await axios.get("http://localhost:8000/bars/friday");
export const getBarsRequestSaturday = async () =>await axios.get("http://localhost:8000/bars/saturday");
export const getBarsRequestSunday = async () =>await axios.get("http://localhost:8000/bars/sunday");

//Carousel Flyers
export const getCarouselFlyersRequest = async () =>await axios.get("http://localhost:8000/imagebank/flyer");

//Carousel Staff
export const getCarouselStaffRequest = async () =>await axios.get("http://localhost:8000/imagebank/staff");





