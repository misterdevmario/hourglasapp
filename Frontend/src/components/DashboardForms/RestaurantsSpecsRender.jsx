import React from "react";
import "./restaurantsspecsform.css";
import  RestaurantsSpecsMembersForm  from "./RestaurantsSpecsMembersForm";
import  RestaurantsSpecsTypeForm  from "./RestaurantsSpecsTypeForm";
import  RestaurantsSpecsServiceForm  from "./RestaurantsSpecsServiceForm";

const RestaurantsSpecsRender = () => {
  return (
    <>
      <div className="restaurantsspecs_container">
      <RestaurantsSpecsMembersForm/>
      <RestaurantsSpecsTypeForm/>
      <RestaurantsSpecsServiceForm/>
     
      </div>
    </>
  );
};

export default RestaurantsSpecsRender;
