import { useEffect } from "react";
import { useAppInfo } from "../../context/AppContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./locationactivity.css";

const Activity = () => {
  const { appInfo } = useAppInfo();


  return (
    <div className="locations_container">
      <div className="locations_container-title">Activities</div>
      {appInfo.activities.map((act) => (
        <div key={act._id} className="locations_container-enes">
          <div className="locations_es">
            <div className="location_word">
              <div className="word">{act.es}</div>
            </div>
          </div>
          <RiDeleteBin5Line className="locations_delete" size={45} />
          <div className="locations_es">
            <div className="location_word">
              <div className="word">{act.en}</div>
            </div>
          </div>
        </div>
      )).reverse()}
    </div>
  );
};

export default Activity;
