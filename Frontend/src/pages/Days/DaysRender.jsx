import React from "react";
import Navbar from "../Navbar/Navbar";
import './daysrender.css'


const DaysRender = ({day}) => {

const {activities, carouselStaff} = day
console.log(activities)
  return (
    <>
      <div className="daysrender_container">
        <Navbar />
        <div className="daysrender_container-content">
          {activities&&activities.map((item)=>(<div key={item._id}>{item.hours}</div>))}
        </div>
        
      </div>
    </>
  );
};

export default DaysRender;
