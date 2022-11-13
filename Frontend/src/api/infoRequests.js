import axios from "axios";

//ImageBank
export const getImagesRequest = async () =>
  await axios.get("http://localhost:8000/imagebank");

  export const addImageRequest = async (image) => {
    const form = new FormData();
  for (let key in image) {
    form.append(key, image[key]);
  }

 return await axios.post("http://localhost:8000/imagebank", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteImageRequest = async (id) =>
  await axios.delete("http://localhost:8000/imagebank/" + id);

//ImageBank/staff
export const getCarouselStaffImagesRequest = async () =>
  await axios.get("http://localhost:8000/imagebank/staff");

  export const addCarouselStaffImageRequest = async (imagestaff) => {
    const form = new FormData();
  for (let key in imagestaff) {
    form.append(key, imagestaff[key]);
  }

 return await axios.post("http://localhost:8000/imagebank/staff", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteCarouselStaffImageRequest = async (id) =>
  await axios.delete("http://localhost:8000/imagebank/staff/" + id);

//ImageBank/flyers
export const getCarouselFlyerImagesRequest = async () =>
  await axios.get("http://localhost:8000/imagebank/flyer");

  export const addCarouselFlyerImageRequest = async (flyers) => {
    const form = new FormData();
  for (let key in flyers) {
    form.append(key, flyers[key]);
  }

 return await axios.post("http://localhost:8000/imagebank/flyer", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteCarouselFlyerImageRequest = async (id) =>
  await axios.delete("http://localhost:8000/imagebank/barsrestaurants/" + id);

//ImageBank/RestaurantsBars
export const getRestaurantsBarsImagesRequest = async () =>
  await axios.get("http://localhost:8000/imagebank/barsrestaurants");

  export const addRestaurantsBarsImageRequest = async (resbar) => {
    const form = new FormData();
  for (let key in resbar) {
    form.append(key, resbar[key]);
  }

 return await axios.post("http://localhost:8000/imagebank/barsrestaurants", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteRestaurantsBarsImageRequest = async (id) =>
  await axios.delete("http://localhost:8000/imagebank/barsrestaurants/" + id);

//Vocabulary Locations
export const getLocationRequest = async () =>
  await axios.get("http://localhost:8000/vocabulary/locations");
export const addLocationRequest = async (location) =>
  await axios.post("http://localhost:8000/vocabulary/locations", location);
export const deleteLocationRequest = async (id) =>
  await axios.delete("http://localhost:8000/vocabulary/locations/" + id);
  
  //Restaurants Specs Type
export const getRestaurantsTypeRequest = async () =>
  await axios.get("http://localhost:8000/restaurants/specs/type");
export const addRestaurantsTypeRequest = async (type) =>
  await axios.post("http://localhost:8000/restaurants/specs/type", type);
export const deleteRestaurantsTypeRequest = async (id) =>
  await axios.delete("http://localhost:8000/restaurants/specs/type/" + id);

  //Restaurants Service
export const getRestaurantsServiceRequest = async () =>
  await axios.get("http://localhost:8000/restaurants/specs/service");
export const addRestaurantsServiceRequest = async (service) =>
  await axios.post("http://localhost:8000/restaurants/specs/service", service);
export const deleteRestaurantsServiceRequest = async (id) =>
  await axios.delete("http://localhost:8000/restaurants/specs/service/" + id);

  //Restaurants Specs Members
export const getRestaurantsMembersRequest = async () =>
  await axios.get("http://localhost:8000/restaurants/specs/members");
export const addRestaurantsMembersRequest = async (members) =>
  await axios.post("http://localhost:8000/restaurants/specs/members", members);
export const deleteRestaurantsMembersRequest = async (id) =>
  await axios.delete("http://localhost:8000/restaurants/specs/members/" + id);

