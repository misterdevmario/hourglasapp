import React from "react";
import { useAppInfo } from "../../context/AppContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import { VscEmptyWindow } from "react-icons/vsc";
import toast from "react-hot-toast";
import "./locationactivity.css";

const Locations = () => {
  const { appInfo, deleteLocation } = useAppInfo();

  const render = () => {
    if (appInfo.locations.length === 0)
      return (
        <div className="conditional_rendering-container">
          <VscEmptyWindow size={100} color="#663388" />
          <h1>There are not locations</h1>
        </div>
      );

    return (
      <>
        {appInfo.locations
          .map((loc) => (
            <div key={loc._id} className="locations_container-enes">
              <div className="locations_es">
                <div className="location_word">
                  <div className="word">{loc.en}</div>
                </div>
              </div>
              <RiDeleteBin5Line
                onClick={() => handleDelete(loc._id, loc.en, loc.es)}
                className="locations_delete"
                size={45}
              />
              <div className="locations_es">
                <div className="location_word">
                  <div className="word">{loc.es}</div>
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
                deleteLocation(id);
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

export default Locations;
