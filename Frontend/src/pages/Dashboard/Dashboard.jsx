import breathless from "../../assets/Logos/breathless.png";
import hourglass from "../../assets/Logos/hourglass.png";
import { TbDoorExit } from "react-icons/tb";
import { IoIosKeypad } from "react-icons/io";
import {
  AddLocationForm,
  AddActivityForm,
  AddCarosuselImageForm,
  AddStaffCarouselForm,
  AddCarouselFlyerForm,
} from "../../components/index";

import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard_container">
      <div className="dashboard_navbar">
        <div className="dashboard_navbar-logos-container">
          <div className="dashboard_navbar-logos hourglass">
            <img src={hourglass} alt="logo hourglass app" />
          </div>
          <div className="dashboard_navbar-logos">
            <img src={breathless} alt="logo breathless" />
          </div>
        </div>
        <div className="dashboard_navbar-title">Panel de administración</div>
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
        <AddLocationForm />
        <AddActivityForm />
        <AddCarosuselImageForm />
        <AddStaffCarouselForm />
        <AddCarouselFlyerForm />
        <AddCarouselFlyerForm />
        <AddCarouselFlyerForm />
      </div>
    </div>
  );
}

export default Dashboard;
