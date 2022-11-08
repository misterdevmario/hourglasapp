import { useState, useContext, createContext, useEffect } from "react";
import {
  getImagesRequest,
  addLocationRequest,
  getLocationRequest,
  addActivityRequest,
  getActivityRequest,
  deleteActivityRequest,
  deleteLocationRequest
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
  });

  useEffect(() => {
    (async () => {
      const res = await getImagesRequest();
      const loc = await getLocationRequest();
      const act = await getActivityRequest();
      setAppInfo({
        images: res.data,
        locations: loc.data,
        activities: act.data,
      });
    })();
  }, []);

  const addLocation = async (location) => {
    const loc = await addLocationRequest(location)
    appInfo.locations.push(loc.data)
    setAppInfo({...appInfo})
  };
  const addActivity = async (activity) => {
    const act = await addActivityRequest(activity);
    appInfo.activities.push(act.data)
    setAppInfo({...appInfo})
  };

  const deleteActivity = async(id)=>{
    const act = await deleteActivityRequest(id)
    console.log(id)
    const newActs =appInfo.activities.filter(item => item._id !== id)
    appInfo.activities = newActs
    setAppInfo({...appInfo})
  }
  const deleteLocation = async(id)=>{
    const act = await deleteLocationRequest(id)
    console.log(id)
    const newActs =appInfo.locations.filter(item => item._id !== id)
    appInfo.locations = newActs
    setAppInfo({...appInfo})
  }
  return (
    <appContext.Provider
      value={{
        appInfo,
        addLocation,
        addActivity,
        deleteActivity,
        deleteLocation
      }}
    >
      {children}
    </appContext.Provider>
  );
};
