import { useAppInfo } from "../../context/AppContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import toast from "react-hot-toast";
import { VscEmptyWindow } from "react-icons/vsc";
import "./locationactivity.css";

const Activity = () => {
  const { appInfo, deleteActivity } = useAppInfo();

  const render = () => {
    if (appInfo.activities.length === 0)
      return (
        <div className="conditional_rendering-container">
          <VscEmptyWindow size={100} color="#663388" />
          <h1>There are not activities</h1>
        </div>
      );

    return (
      <>
        {appInfo.activities
          .map((act) => (
            <div key={act._id} className="locations_container-enes">
              <div className="locations_es">
                <div className="location_word">
                  <div className="word">{act.en}</div>
                </div>
              </div>
              <RiDeleteBin5Line
                onClick={() => handleDelete(act._id, act.en, act.es)}
                className="locations_delete"
                size={45}
              />
              <div className="locations_es">
                <div className="location_word">
                  <div className="word">{act.es}</div>
                </div>
              </div>
            </div>
          ))
          .reverse()}
      </>
    );
  };

  const handleDelete = (id, en, es) => {
    toast(
      (t) => (
        <div className="toast_container">
          <div className="toast_container-text">Do you want to delete?</div>
          <div className="toast_container-text-name">
            "{en}-{es}"
          </div>
          <div className="toast_container-btn">
            <button
              onClick={() => {
                toast.dismiss(t.id);
                deleteActivity(id);
              }}
              className="toast_container-btn-delete"
            >
              Delete
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="toast_container-btn-cancel"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        style: {
          background: "#663388",
          width: "18rem",
          height: "8rem",
          fontSize: "1rem",
          marginTop: "40vh",
          color: "#fff",
        },
      }
    );
  };

  return (
    <div className="locations_container">
      <div className="locations_container-title">Activities</div>
      <div className="locations_container-title-language">
        <h2 className="language-word">English</h2>
        <h2 className="language-word">Spanish</h2>
      </div>
      {render()}
    </div>
  );
};

export default Activity;
