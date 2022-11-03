import { ShowImages } from "../../components/index";
import breathless from "../../assets/Logos/breathless.png";
import hourglass from "../../assets/Logos/hourglass.png";
import { TbDoorExit } from "react-icons/tb";
import { IoIosKeypad } from "react-icons/io"
import {UploadImageForm, Modal} from '../../components/index'
import {useModal} from '../../components/Modals/useModal'


import "./dashboard.css";

function Dashboard() {

  const [isOpenGallery, closeGallery, openGallery] = useModal(false)

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
           size={55}
           color="#a028cc"
           />
           <div className="appalert">Go to App</div>
          <TbDoorExit
            className="dashboard_navbar-btn-iconexit"
            size={55}
            color="#a028cc"
          />
          <div className="exitalert">Exit</div>
        </div>
      </div>
      <div className="dashboard_categories-container">
          <UploadImageForm/>
        <div className="dashboard_form">
        <button onClick={openGallery}>Gallery</button>
      <Modal isOpen={isOpenGallery} closeModal={closeGallery}>
        <ShowImages/>
      </Modal>
          <button></button>
        </div>
      
      
      </div>
    </div>
  );
}

export default Dashboard;
