import breathless from "../../assets/Logos/breathless.png";
import hourglass from "../../assets/Logos/hourglass.png";
import { TbDoorExit } from "react-icons/tb";
import { IoIosKeypad } from "react-icons/io";
import { AddLocationForm, AddActivityForm } from "../../components/index";

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
        <div className="dashboard_navbar-title">Admin Dashboard</div>
        <div className="dashboard_navbar-btn">
          <IoIosKeypad
            className="dashboard_navbar-btn-iconapp"
            size={40}
            color="#fff"
          />
          <div className="appalert">Go to App</div>
          <TbDoorExit
            className="dashboard_navbar-btn-iconexit"
            size={40}
            color="#fff"
          />
          <div className="exitalert">Exit</div>
        </div>
      </div>
      <div className="dashboard_categories-container">
        <AddLocationForm />
        <AddActivityForm />
        <AddActivityForm />
        <AddActivityForm />
        <AddActivityForm />
        <AddActivityForm />
        <AddActivityForm />
        <AddActivityForm />
       
       
      </div>
    </div>
  );
}

export default Dashboard;
