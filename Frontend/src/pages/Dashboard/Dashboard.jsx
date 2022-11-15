import { useState } from "react";
import breathless from "../../assets/Logos/breathless.png";
import hourglass from "../../assets/Logos/hourglass.png";
import { TbDoorExit } from "react-icons/tb";
import { IoIosKeypad } from "react-icons/io";
import { BsMenuDown, BsMenuUp } from "react-icons/bs";
import {
  AddLocationForm,
  AddCarosuselImageForm,
  AddStaffCarouselForm,
  AddCarouselFlyerForm,
  AddRestaurantImageForm,
  RestaurantsSpecsRender,
} from "../../components/index";

import "./dashboard.css";

function Dashboard() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="dashboard_container">
      <div className="dashboard_navbar">
        <div className="dashboard_navbar-logos-container">
          <div className="dashboard_navbar-logos hourglass">
            <img src={hourglass} alt="logo hourglass app" />
          </div>
          <div className="dashboard_navbar-logos breathless">
            <img src={breathless} alt="logo breathless" />
          </div>
        </div>
        <div className="dashboard_navbar-title">Panel de administración</div>
        <div className="navbar_toggle">
          {toggle ? (
            <BsMenuDown
              className="bsmenudown"
              size={35}
              color="#fff"
              onClick={() => setToggle(false)}
            />
          ) : (
            <BsMenuUp size={35} color="#fff" onClick={() => setToggle(true)} />
          )}
          {toggle && (
            <div className="navbar_toggle-items">
              <div className="navbar_a-toggle">
               <button onClick={()=>setToggle(false)}> <a href="#activities">Carousel Actividades</a></button>
                <button onClick={()=>setToggle(false)}><a href="#staff">Carousel de personal</a></button>
                <button onClick={()=>setToggle(false)}><a href="#flyer">Carousel Flyers</a></button>
                <button onClick={()=>setToggle(false)}><a href="#restaurants">Restaurantes y Bares</a></button>
                <button onClick={()=>setToggle(false)}><a href="#locations">Locaciones</a></button>
                <button onClick={()=>setToggle(false)}><a href="#members">Estatus de Miembros</a></button>
                <button onClick={()=>setToggle(false)}><a href="#type">Tipos Restaurantes</a></button>
                <button onClick={()=>setToggle(false)}><a href="#service">Tipos de Servicio</a></button>
                <IoIosKeypad />
              </div>
            </div>
          )}
        </div>
        <div className="dashboard_navbar-btn">
          <IoIosKeypad
            className="dashboard_navbar-btn-iconapp"
            size={40}
            color="#fff"
          />
          <div className="appalert">Ir a la aplicación</div>
          <TbDoorExit
            className="dashboard_navbar-btn-iconexit"
            size={40}
            color="#fff"
          />
          <div className="exitalert">Salir</div>
        </div>
      </div>

      <div className="dashboard_categories-container">
        <AddCarosuselImageForm />
        <AddStaffCarouselForm />
        <AddCarouselFlyerForm />
        <AddRestaurantImageForm />
        <AddLocationForm />
        <RestaurantsSpecsRender />
      </div>
    </div>
  );
}

export default Dashboard;
