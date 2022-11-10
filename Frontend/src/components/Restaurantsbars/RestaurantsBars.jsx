import { useAppInfo } from "../../context/AppContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import toast from "react-hot-toast";
import { VscEmptyWindow} from "react-icons/vsc";
import "../CarouselActivities/carouselactivities.css";

const RestaurantsBars = () => {
  const { appInfo, deleteRestaurantBar } = useAppInfo();

  const render = () => {
    if (appInfo.restaurantsbars.length === 0)
      return (
        <div className="conditional_rendering-container">
          <VscEmptyWindow size={100} color="#663388" />
          <h1>No hay logotipos para mostrar</h1>
        </div>
      );

    return (
      <>
        <div className="carousel_image-container">
          {appInfo.restaurantsbars.map((img) => (
            <div key={img._id} className="carousel_image-container-card">
              <img src={img.image.url} alt={img.name} />
              <div className="card-name-container">
                <div className="card-name">{img.name}</div>
                <RiDeleteBin5Line
                  onClick={() => handleDelete(img._id, img.name)}
                  className="image_delete"
                  size={50}
                />
              </div>
            </div>
          )).reverse()}
        </div>
      </>
    );
  };

  const handleDelete = (id, name) => {
    toast(
      (t) => (
        <div className="toast_container">
          <div className="toast_container-text">Esta seguro de eliminar?</div>
          <div className="toast_container-text-name">"{name}"</div>
          <div className="toast_container-btn">
            <button
              onClick={() => {
                toast.dismiss(t.id);
                deleteRestaurantBar(id);
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

  return (
    <div className="locations_container">
      <div className="locations_container-title">Restaurantes y Bares</div>

      {render()}
    </div>
  );
};

export default RestaurantsBars;
