import { useState, useContext, createContext, useEffect } from "react";
import {} from "../api/infoRequests";
import {
  getCarouselActRequestMonday,
  getCarouselActRequestThuesday,
  getCarouselActRequestWednesday,
  getCarouselActRequestThursday,
  getCarouselActRequestFriday,
  getCarouselActRequestSaturday,
  getCarouselActRequestSunday,
  getRestaurantsRequestMonday,
  getRestaurantsRequestThuesday,
  getRestaurantsRequestWednesday,
  getRestaurantsRequestThursday,
  getRestaurantsRequestFriday,
  getRestaurantsRequestSaturday,
  getRestaurantsRequestSunday,
  getBarsRequestMonday,
  getBarsRequestThuesday,
  getBarsRequestWednesday,
  getBarsRequestThursday,
  getBarsRequestFriday,
  getBarsRequestSaturday,
  getBarsRequestSunday,
  getCarouselFlyersRequest,
  getCarouselStaffRequest,
  getOneCarouselActRequest,
  putOneCarouselActRequestFriday,
} from "../api/appInfoRequests";

const applicationContext = createContext();

export const useApplicationInfo = () => {
  const context = useContext(applicationContext);
  return context;
};

export const ApplicationContextProvider = ({ children }) => {
  const [applicationInfo, setApplicationInfo] = useState({});

  const id = "637e4b0627eac0220cf25aa6";
  const updates = {
    hours: "Updated",
    locationEn: "Updated",
    locationEs: "Entrada principal",
    activityEn: "Dancing lessons",
    activityEs: "Mama",
    image:
      "https://res.cloudinary.com/di4hxks72/image/upload/v1668447062/StaffImages/fcln2o9s29cjel8ynuou.jpg",
    __v: 0,
  };

  useEffect(() => {
    (async () => {
   
      const camonday = await getCarouselActRequestMonday();
      const cathuesday = await getCarouselActRequestThuesday();
      const cawed = await getCarouselActRequestWednesday();
      const cathursday = await getCarouselActRequestThursday();
      const cafriday = await getCarouselActRequestFriday();
      const casaturday = await getCarouselActRequestSaturday();
      const casunday = await getCarouselActRequestSunday();

      const rMonday = await getRestaurantsRequestMonday();
      const rThuesday = await getRestaurantsRequestThuesday();
      const rWednesday = await getRestaurantsRequestWednesday();
      const rThursday = await getRestaurantsRequestThursday();
      const rFriday = await getRestaurantsRequestFriday();
      const rSaturday = await getRestaurantsRequestSaturday();
      const rSunday = await getRestaurantsRequestSunday();

      const bMonday = await getBarsRequestMonday();
      const bThuesday = await getBarsRequestThuesday();
      const bWednesday = await getBarsRequestWednesday();
      const bThursday = await getBarsRequestThursday();
      const bFriday = await getBarsRequestFriday();
      const bSaturday = await getBarsRequestSaturday();
      const bSunday = await getBarsRequestSunday();

      const cFlyers = await getCarouselFlyersRequest();
      const cStaff = await getCarouselStaffRequest();
    
      setApplicationInfo({
        cActMonday: camonday.data,
        cActThuesday: cathuesday.data,
        cActWednesday: cawed.data,
        cActThursday: cathursday.data,
        cActFriday: cafriday.data,
        cActSaturday: casaturday.data,
        cActSunday: casunday.data,

        resMonday: rMonday.data,
        resThuesday: rThuesday.data,
        resWednesday: rWednesday.data,
        resThursday: rThursday.data,
        resFriday: rFriday.data,
        resSaturday: rSaturday.data,
        resSunday: rSunday.data,

        barsMonday: bMonday.data,
        barsThuesday: bThuesday.data,
        barsWednesday: bWednesday.data,
        barsThursday: bThursday.data,
        barsFriday: bFriday.data,
        barsSaturday: bSaturday.data,
        barsSunday: bSunday.data,

        carouselFlyers: cFlyers.data,
        carouselStaff: cStaff.data,
      });
    })();
  }, []);

  let monday = {
    activities: applicationInfo.cActMonday,
    restaurants: applicationInfo.resMonday,
    bars: applicationInfo.barsMonday,
    staff: applicationInfo.carouselStaff,
    flyers: applicationInfo.carouselFlyers,
  };
  let thuesday = {
    activities: applicationInfo.cActThuesday,
    restaurants: applicationInfo.resThuesday,
    bars: applicationInfo.barsThuesday,
    staff: applicationInfo.carouselStaff,
    flyers: applicationInfo.carouselFlyers,
  };
  let wednesday = {
    activities: applicationInfo.cActWednesday,
    restaurants: applicationInfo.resWednesday,
    bars: applicationInfo.barsWednesday,
    staff: applicationInfo.carouselStaff,
    flyers: applicationInfo.carouselFlyers,
  };
  let thursday = {
    activities: applicationInfo.cActThursday,
    restaurants: applicationInfo.resThursday,
    bars: applicationInfo.barsThursday,
    staff: applicationInfo.carouselStaff,
    flyers: applicationInfo.carouselFlyers,
  };
  let friday = {
    activities: applicationInfo.cActFriday,
    restaurants: applicationInfo.resFriday,
    bars: applicationInfo.barsFriday,
    staff: applicationInfo.carouselStaff,
    flyers: applicationInfo.carouselFlyers,
  };
  let saturday = {
    activities: applicationInfo.cActSaturday,
    restaurants: applicationInfo.resSaturday,
    bars: applicationInfo.barsSaturday,
    staff: applicationInfo.carouselStaff,
    flyers: applicationInfo.carouselFlyers,
  };
  let sunday = {
    activities: applicationInfo.cActSunday,
    restaurants: applicationInfo.resSunday,
    bars: applicationInfo.barsSunday,
    staff: applicationInfo.carouselStaff,
    flyers: applicationInfo.carouselFlyers,
  };
  useEffect(() => {
    monday = {
      activities: applicationInfo.cActMonday,
      restaurants: applicationInfo.resMonday,
      bars: applicationInfo.barsMonday,
      staff: applicationInfo.carouselStaff,
      flyers: applicationInfo.carouselFlyers,
      day: "Lunes",
    };
    thuesday = {
      activities: applicationInfo.cActThuesday,
      restaurants: applicationInfo.resThuesday,
      bars: applicationInfo.barsThuesday,
      staff: applicationInfo.carouselStaff,
      flyers: applicationInfo.carouselFlyers,
    };
    wednesday = {
      activities: applicationInfo.cActWednesday,
      restaurants: applicationInfo.resWednesday,
      bars: applicationInfo.barsWednesday,
      staff: applicationInfo.carouselStaff,
      flyers: applicationInfo.carouselFlyers,
    };
    thursday = {
      activities: applicationInfo.cActThursday,
      restaurants: applicationInfo.resThursday,
      bars: applicationInfo.barsThursday,
      staff: applicationInfo.carouselStaff,
      flyers: applicationInfo.carouselFlyers,
    };
    friday = {
      activities: applicationInfo.cActFriday,
      restaurants: applicationInfo.resFriday,
      bars: applicationInfo.barsFriday,
      staff: applicationInfo.carouselStaff,
      flyers: applicationInfo.carouselFlyers,
    };
    saturday = {
      activities: applicationInfo.cActSaturday,
      restaurants: applicationInfo.resSaturday,
      bars: applicationInfo.barsSaturday,
      staff: applicationInfo.carouselStaff,
      flyers: applicationInfo.carouselFlyers,
    };
    sunday = {
      activities: applicationInfo.cActSunday,
      restaurants: applicationInfo.resSunday,
      bars: applicationInfo.barsSunday,
      staff: applicationInfo.carouselStaff,
      flyers: applicationInfo.carouselFlyers,
    };
  }, [applicationInfo]);
  const getOneCarouselAct = async (id) => {
    const oneRes = await getOneCarouselActRequest(id);
    return oneRes.data;
  };
  const putOneCarouselActFriday = async (id, updates) => {
    const res = await putOneCarouselActRequestFriday(id, updates);
    console.log(res.data);
    applicationInfo?.cActFriday?.map((item) =>
      item._id === id ? res.data : item
    );
    setApplicationInfo({ ...applicationInfo });
  };

  return (
    <applicationContext.Provider
      value={{
        applicationInfo,
        monday,
        thuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
        getOneCarouselAct,
        putOneCarouselActFriday
       
      }}
    >
      {children}
    </applicationContext.Provider>
  );
};
