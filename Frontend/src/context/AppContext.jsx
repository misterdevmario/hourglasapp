import { useState, useContext, createContext, useEffect } from "react";
import {
  getImagesRequest,
  addLocationRequest,
  getLocationRequest,
  deleteLocationRequest,
  addImageRequest,
  deleteImageRequest,
  getCarouselStaffImagesRequest,
  addCarouselStaffImageRequest,
  deleteCarouselStaffImageRequest,
  getCarouselFlyerImagesRequest,
  addCarouselFlyerImageRequest,
  deleteCarouselFlyerImageRequest,
  getRestaurantsBarsImagesRequest,
  addRestaurantsBarsImageRequest,
  deleteRestaurantsBarsImageRequest,
  getRestaurantsTypeRequest,
  addRestaurantsTypeRequest,
  deleteRestaurantsTypeRequest,
  getRestaurantsServiceRequest,
  addRestaurantsServiceRequest,
  deleteRestaurantsServiceRequest,
  getRestaurantsMembersRequest,
  addRestaurantsMembersRequest,
  deleteRestaurantsMembersRequest,


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
    carouselstaff: [],
    carouselflyer: [],
    restaurantsbars: [],
    restaurantstype: [],
    restaurantsservice: [],
    restaurantsmembers: [],
  });

  useEffect(() => {
    (async () => {
      const res = await getImagesRequest();
      const loc = await getLocationRequest();
      const cstaff = await getCarouselStaffImagesRequest();
      const cflyer = await getCarouselFlyerImagesRequest();
      const cresbars = await getRestaurantsBarsImagesRequest();
      const ctype = await getRestaurantsTypeRequest()
      const cservice = await getRestaurantsServiceRequest()
      const cmembers = await getRestaurantsMembersRequest()

      setAppInfo({
        images: res.data,
        locations: loc.data,
        carouselstaff: cstaff.data,
        carouselflyer: cflyer.data,
        restaurantsbars: cresbars.data,
        restaurantstype:ctype.data,
        restaurantsservice:cservice.data,
        restaurantsmembers:cmembers.data,

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
    const newActs = appInfo.locations.filter((item) => item._id !== id);
    appInfo.locations = newActs;
    setAppInfo({ ...appInfo });
  };
  
  //Restaurants Specs Type
  const addRestaurantsType = async (type) => {
    const ctype = await addRestaurantsTypeRequest(type);
    appInfo.restaurantstype.push(ctype.data)
    setAppInfo({ ...appInfo });
  };
  const deleteRestaurantsType = async (id) => {
    const ctype = await deleteRestaurantsTypeRequest(id);
    const newType = appInfo.restaurantstype.filter((item) => item._id !== id);
    appInfo.restaurantstype = newType;
    setAppInfo({ ...appInfo });
  };
  //Restaurants Specs Service
  const addRestaurantsService = async (service) => {
    const cservice = await addRestaurantsServiceRequest(service);
    appInfo.restaurantsservice.push(cservice.data);
    setAppInfo({ ...appInfo });
  };
  const deleteRestaurantsService = async (id) => {
    const cservice = await deleteRestaurantsServiceRequest(id);
    const newService = appInfo.restaurantsservice.filter((item) => item._id !== id);
    appInfo.restaurantsservice = newService;
    setAppInfo({ ...appInfo });
  };
  //Restaurants Specs Members
  const addRestaurantsMembers = async (members) => {
    const cmembers = await addRestaurantsMembersRequest(members);
    appInfo.restaurantsmembers.push(cmembers.data);
    setAppInfo({ ...appInfo });
  };
  const deleteRestaurantsMembers = async (id) => {
    const cmembers = await deleteRestaurantsMembersRequest(id);
    const newMember = appInfo.restaurantsmembers.filter((item) => item._id !== id);
    appInfo.restaurantsmembers = newMember;
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

    const newCarouselStaffImages = appInfo.carouselstaff.filter(
      (item) => item._id !== id
    );
    appInfo.carouselstaff = newCarouselStaffImages;
    setAppInfo({ ...appInfo });
  };

  //Imagebank/flyer
  const addFlyerCarousel = async (flyers) => {
    const cflyer = await addCarouselFlyerImageRequest(flyers);
    appInfo.carouselflyer.push(cflyer.data);
    setAppInfo({ ...appInfo });
  };

  const deleteFlyerCarousel = async (id) => {
    const cflyer = await deleteCarouselFlyerImageRequest(id);

    const newCarouselFlyerImages = appInfo.carouselflyer.filter(
      (item) => item._id !== id
    );
    appInfo.carouselflyer = newCarouselFlyerImages;
    setAppInfo({ ...appInfo });
  };
  //Imagebank/RestaurantsBars
  const addRestaurantBar = async (resbar) => {
    const cresbars = await addRestaurantsBarsImageRequest(resbar);
    appInfo.restaurantsbars.push(cresbars.data);
    setAppInfo({ ...appInfo });
  };

  const deleteRestaurantBar = async (id) => {
    const cresbars = await deleteRestaurantsBarsImageRequest(id);

    const newRestaurantBarImages = appInfo.restaurantsbars.filter(
      (item) => item._id !== id
    );
    appInfo.restaurantsbars = newRestaurantBarImages;
    setAppInfo({ ...appInfo });
  };

  return (
    <appContext.Provider
      value={{
        appInfo,
        addLocation,
        deleteLocation,
        addImageBank,
        deleteImageBank,
        addStaffCarousel,
        deleteStaffCarousel,
        addFlyerCarousel,
        deleteFlyerCarousel,
        addRestaurantBar,
        deleteRestaurantBar,
        addRestaurantsType,
        deleteRestaurantsType,
        addRestaurantsService,
        deleteRestaurantsService,
        addRestaurantsMembers,
        deleteRestaurantsMembers,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
