import React from "react";
import { useAppInfo } from "../../context/AppContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./locationactivity.css";

const Locations = () => {
  const { appInfo } = useAppInfo();
  return (
    <div className="locations_container">
      <div className="locations_container-title">Locations</div>
      {appInfo.locations.map((loc) => (
        <div key={loc._id} className="locations_container-enes">
          <div className="locations_es">
            <div className="location_word">
              <div className="word">{loc.es}</div>
            </div>
          </div>
          <RiDeleteBin5Line className="locations_delete" size={45} />
          <div className="locations_es">
            <div className="location_word">
              <div className="word">{loc.en}</div>
            </div>
          </div>
        </div>
      )).reverse()}
    </div>
  );
};

export default Locations;
