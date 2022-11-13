import React from "react";
import { useAppInfo } from "../../context/AppContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import { VscEmptyWindow } from "react-icons/vsc";
import toast from "react-hot-toast";
import "../LocationActivity/locationactivity.css";

const RestaurantsSpecsMembers = () => {
  const { appInfo, deleteRestaurantsMembers } = useAppInfo();

  const render = () => {
    if (appInfo.restaurantsmembers.length === 0)
      return (
        <div className="conditional_rendering-container">
          <VscEmptyWindow size={100} color="#663388" />
          <h1>No hay tipos estatus de miembros para mostrar</h1>
        </div>
      );

    return (
      <>
       
        <div className="locations_container-title-language">
          <h2 className="language-word">Ingles</h2>
          <h2 className="language-word">Español</h2>
        </div>
        {appInfo.restaurantsmembers
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
          <div className="toast_container-text">Esta seguro de eliminar?</div>
          <div className="toast_container-text-name">
            "{en}-{es}"
          </div>
          <div className="toast_container-btn">
            <button
              onClick={() => {
                toast.dismiss(t.id);
                deleteRestaurantsMembers(id);
              }}
              className="toast_container-btn-delete"
            >
              Eliminar
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="toast_container-btn-cancel"
            >
              Cancelar
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

  return <div className="locations_container">
     <div className="locations_container-title">Tipos de estatus de miembros</div>
    {render()}</div>;
};

export default RestaurantsSpecsMembers;
