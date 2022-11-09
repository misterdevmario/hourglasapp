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



//Vocabulary Locations
export const getLocationRequest = async () =>
  await axios.get("http://localhost:8000/vocabulary/locations");
export const addLocationRequest = async (location) =>
  await axios.post("http://localhost:8000/vocabulary/locations", location);
export const deleteLocationRequest = async (id) =>
  await axios.delete("http://localhost:8000/vocabulary/locations/" + id);
//Vocabulary Activieties
export const getActivityRequest = async () =>
  await axios.get("http://localhost:8000/vocabulary/activities");
export const addActivityRequest = async (activity) =>
  await axios.post("http://localhost:8000/vocabulary/activities", activity);
export const deleteActivityRequest = async (id) =>
  await axios.delete("http://localhost:8000/vocabulary/activities/" + id);
//Upload
