import React from "react";
import "./carouselmodal.css";
import { useAppInfo } from "../../../context/AppContext";
import "../../CarouselActivities/carouselActivities.css";

const AppCarouselActivitiesModal = () => {
  const { appInfo } = useAppInfo();
  return (
    <div className="locations_container">
      <div className="locations_container-title">Selecciona una Actividad</div>
      <div className="carousel_image-container ">
        {appInfo.images.map((img) => (
          <div key={img._id} className="carousel_image-container-card">
            <img src={img.image.url} alt={img.en} />
            <div className="card-name-container">
              <div className="card-name">{img.en}</div>
              <div className="card-name">{img.es}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppCarouselActivitiesModal;
