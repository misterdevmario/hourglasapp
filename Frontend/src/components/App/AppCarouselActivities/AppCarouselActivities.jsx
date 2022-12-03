import { MdEditNote } from "react-icons/md";
import {useNavigate} from 'react-router-dom'

import "./carousel.css";

const AppCarouselActivities = (act) => {

  const actInfo = act;
  const path = window.location.pathname
  const navigate = useNavigate()
  console.log(path)

  return (
    <div className="card_container-wrapper"  >
      <div className="card_container">
        {actInfo?.act?.map((item) => (
          <div key={item._id} className="card_container-content">
            <div className="card_container-img">
              <img src={item.image} alt="" />
            </div>

            <MdEditNote className="card_containermodal"color="#fff" size={100}  onClick={()=>navigate(`${path}/${item._id}`)} />
            <div className="card_container-name">{item.activityEs}</div>
            <div key={item._id} className="card_container-info">
              <div className="card_container-hours">{item.hours}</div>
              <div className="card_container-location">{item.locationEs}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppCarouselActivities;
