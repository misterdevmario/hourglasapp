import { useState, useContext, createContext, useEffect } from "react";
import {
  getImagesRequest,
  addLocationRequest,
  getLocationRequest,
  addActivityRequest,
  getActivityRequest,
  deleteActivityRequest,
  deleteLocationRequest,
  addImageRequest,
  deleteImageRequest,
  getCarouselStaffImagesRequest,
  addCarouselStaffImageRequest,
  deleteCarouselStaffImageRequest,
} from "../api/infoRequests";

const appContext = createContext();

export const useAppInfo = () => {
  const context = useContext(appContext);
  return context;
};

export const AppContextProvider = ({ children }) => {
  const [appInfo, setAppInfo] = useState({
    images: [],
    locations: [],
    activities: [],
    carouselstaff:[]
  });

  useEffect(() => {
    (async () => {
      const res = await getImagesRequest();
      const loc = await getLocationRequest();
      const act = await getActivityRequest();
      const cstaff = await getCarouselStaffImagesRequest()
      setAppInfo({
        images: res.data,
        locations: loc.data,
        activities: act.data,
        carouselstaff: cstaff.data
      });
    })();
  }, []);

  //Locations
  const addLocation = async (location) => {
    const loc = await addLocationRequest(location);
    appInfo.locations.push(loc.data);
    setAppInfo({ ...appInfo });
  };
  const deleteLocation = async (id) => {
    const act = await deleteLocationRequest(id);
    console.log(id);
    const newActs = appInfo.locations.filter((item) => item._id !== id);
    appInfo.locations = newActs;
    setAppInfo({ ...appInfo });
  };
  //Activities

  const addActivity = async (activity) => {
    const act = await addActivityRequest(activity);
    appInfo.activities.push(act.data);
    setAppInfo({ ...appInfo });
  };

  const deleteActivity = async (id) => {
    const act = await deleteActivityRequest(id);
    console.log(id);
    const newActs = appInfo.activities.filter((item) => item._id !== id);
    appInfo.activities = newActs;
    setAppInfo({ ...appInfo });
  };

  //Imagebank
  const addImageBank = async (image) => {
    const img = await addImageRequest(image);
    appInfo.images.push(img.data);
    setAppInfo({ ...appInfo });
    
  };

  const deleteImageBank = async (id) => {
    const img = await deleteImageRequest(id);
    
    const newImages = appInfo.images.filter((item) => item._id !== id);
    appInfo.images = newImages;
    setAppInfo({ ...appInfo });
  };
  
//Imagebank/staff
const addStaffCarousel = async (imagestaff) => {
  const cstaff = await addCarouselStaffImageRequest(imagestaff);
  appInfo.carouselstaff.push(cstaff.data);
  setAppInfo({ ...appInfo });
  
};

const deleteStaffCarousel = async (id) => {
  const cstaff = await deleteCarouselStaffImageRequest(id);
  
  const newCarouselStaffImages = appInfo.carouselstaff.filter((item) => item._id !== id);
  appInfo.carouselstaff = newCarouselStaffImages;
  setAppInfo({ ...appInfo });
};


  return (
    <appContext.Provider
      value={{
        appInfo,
        addLocation,
        addActivity,
        deleteActivity,
        deleteLocation,
        addImageBank,
        deleteImageBank,
        addStaffCarousel,
        deleteStaffCarousel
       
      }}
    >
      {children}
    </appContext.Provider>
  );
};
