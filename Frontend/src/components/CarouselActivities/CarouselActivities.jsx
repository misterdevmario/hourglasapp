import { useAppInfo } from "../../context/AppContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import toast from "react-hot-toast";
import { VscEmptyWindow} from "react-icons/vsc";
import "./carouselactivities.css";

const CarouselActivities = () => {
  const { appInfo, deleteImageBank } = useAppInfo();
console.log(appInfo.images)
  const render = () => {
    if (appInfo.images.length === 0)
      return (
        <div className="conditional_rendering-container">
          <VscEmptyWindow size={100} color="#663388" />
          <h1>No hay imagenes para mostrar</h1>
        </div>
      );

    return (
      <>
        <div className="carousel_image-container">
          {appInfo.images.map((img) => (
            <div key={img._id} className="carousel_image-container-card">
              <img src={img.image.url} alt={img.en} />
              <div className="card-name-container">
                <div className="card-name">{img.en}</div>
                <div className="card-name">{img.es}</div>
                <RiDeleteBin5Line
                  onClick={() => handleDelete(img._id, img.en, img.es)}
                  className="activities-image_delete"
                  size={50}
                  
                />
              </div>
            </div>
          )).reverse()}
        </div>
      </>
    );
  };

  const handleDelete = (id, en, es) => {
    toast(
      (t) => (
        <div className="toast_container">
          <div className="toast_container-text">Esta seguro de eliminar?</div>
          <div className="toast_container-text-name">"{en}"</div>
          <div className="toast_container-text-name">"{es}"</div>
          <div className="toast_container-btn">
            <button
              onClick={() => {
                toast.dismiss(t.id);
                deleteImageBank(id);
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
      <div className="locations_container-title">Carousel de Actividades</div>

      {render()}
    </div>
  );
};

export default CarouselActivities;
