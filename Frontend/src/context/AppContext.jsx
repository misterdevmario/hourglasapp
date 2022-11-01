import { useState, useContext, createContext, useEffect } from "react";
import { getImagesRequest } from "../api/infoRequests";

const appContext = createContext();

export const useAppInfo = () => {
  const context = useContext(appContext);
  return context;
};

export const AppContextProvider = ({ children }) => {
 
  const [appInfo, setAppInfo] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getImagesRequest();
      setAppInfo(res.data);
    })();
  }, []);

  return (
    <appContext.Provider
      value={{
        appInfo,
    
      }}
    >
      {children}
    </appContext.Provider>
  );
};
