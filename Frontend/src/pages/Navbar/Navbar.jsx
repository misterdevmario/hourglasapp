import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/Logos/hourglass.png";
import { TbDoorExit } from "react-icons/tb";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BsMenuDown, BsMenuUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


let weekday= ""
const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const [wday, setWday] = useState('Lunes')

  const handleDay = (e) =>{
 weekday =e.target.textContent
 setWday(weekday)


 
}



  return (
    <div className="navbar_container">
      <div className="navbar_container-logo">
        <img src={logo} alt="" />
      </div>

      <ul className="navbar_container-days">
        <NavLink to="/monday">Lunes</NavLink>
        <NavLink to="/thuesday">Martes</NavLink>
        <NavLink to="/wednesday">Miercoles</NavLink>
        <NavLink to="/thursday">Jueves</NavLink>
        <NavLink to="/friday">Viernes</NavLink>
        <NavLink to="/saturday">Sabado</NavLink>
        <NavLink to="/sunday">Domingo</NavLink>
      </ul>

    <div className="navbar_container-icons-app">
   <div  className="dashboard_navbar-btn-iconapp">
   <MdOutlineDashboardCustomize
          onClick={() => navigate("/dashboard")}
      
          size={40}
          color="#fff"
        />
        <TbDoorExit  size={40} />
   </div>
   
      
    </div>
      
        <div className="navbar_toggle-app-title">{wday}</div>
      <div className="navbar_toggle-app">
        {toggle ? (
          <BsMenuDown
            className="bsmenudown"
            size={45}
            color="#fff"
            onClick={() => setToggle(false)}
          />
        ) : (
          <BsMenuUp size={45} color="#fff" onClick={() => setToggle(true)} />
        )}
        {toggle && (
          <div className="navbar_toggle-items-app">
            <ul className="navbar_a-toggle-app">
              <NavLink to="/monday"><button onClick={(e) => {setToggle(false);handleDay(e)}}>Lunes</button></NavLink>
              <NavLink to="/thuesday"><button onClick={(e) => {setToggle(false);handleDay(e)}}>Martes</button></NavLink>
              <NavLink to="/wednesday"><button onClick={(e) => {setToggle(false);handleDay(e)}}>Miercoles</button></NavLink>
              <NavLink to="/thursday"><button onClick={(e) => {setToggle(false);handleDay(e)}}>Jueves</button></NavLink>
              <NavLink to="/friday"><button onClick={(e) => {setToggle(false);handleDay(e)}}>Viernes</button></NavLink>
              <NavLink to="/saturday"><button onClick={(e) => {setToggle(false);handleDay(e)}}>Sabado</button></NavLink>
              <NavLink to="/sunday"><button onClick={(e) => {setToggle(false);handleDay(e)}}>Domingo</button></NavLink>
            </ul>
            <div className="navbar_toggle-items-btn-app">
              <MdOutlineDashboardCustomize
                onClick={() => navigate("/dashboard")}
                className="dashboard_navbar-btn-iconapp-app"
                size={50}
                color="#fff"
              />
              <TbDoorExit size={50} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
