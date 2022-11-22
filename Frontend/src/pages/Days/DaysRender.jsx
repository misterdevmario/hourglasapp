import React from "react";
import Navbar from "../Navbar/Navbar";
import './daysrender.css'
import {AppCarouselActivities} from '../../components/App/index'


const DaysRender = ({day}) => {

const {activities, carouselStaff} = day
  return (
    <>
      <div className="daysrender_container">
        <Navbar />
        <div className="daysrender_container-content">
          <div className="activities">
            <AppCarouselActivities/>
          </div>
          <div className="dos">Dos</div>
        </div>
        
      </div>
    </>
  );
};

export default DaysRender;
