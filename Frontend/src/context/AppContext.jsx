import { useState, useContext, createContext, useEffect } from "react";
import { getImagesRequest, addLocationRequest } from "../api/infoRequests";

const appContext = createContext();

export const useAppInfo = () => {
  const context = useContext(appContext);
  return context;
};

export const AppContextProvider = ({ children }) => {
 
  const [appInfo, setAppInfo] = useState({
    images:[],
    locations:[]
  });

  useEffect(() => {
    (async () => {
      const res = await getImagesRequest();
      setAppInfo({images:res.data});
    })();
  }, []);

  const addLocation = async(location) => {
   const res = await addLocationRequest(location)
   setAppInfo({locations:res.data})
  }

  return (
    <appContext.Provider
      value={{
        appInfo,
        addLocation
      }}
    >
      {children}
    </appContext.Provider>
  );
};
