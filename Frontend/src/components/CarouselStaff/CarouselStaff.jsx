import { useAppInfo } from "../../context/AppContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import toast from "react-hot-toast";
import { VscEmptyWindow } from "react-icons/vsc";
import "./carouselstaff.css";

const CarouselStaff = () => {
  const { appInfo, deleteStaffCarousel } = useAppInfo();

  const render = () => {
    if (appInfo.carouselstaff.length === 0)
      return (
        <div className="conditional_rendering-container">
          <VscEmptyWindow size={100} color="#663388" />
          <h1>No hay personal para mostrar</h1>
        </div>
      );

    return (
      <>
        <div className="carousel_image-container">
       {appInfo.carouselstaff.map((item) => (
           <div key={item._id}className="carousel_image-container-card-container">
           <div className="carousel_image-container-name">{item.name}</div>
           <div className="carousel_image-container-img">
            <img src={item.image.url} alt={item.name} />
           </div>
           <div className="carousel_image-container-phrase">
             <div className="phraseen">"{item.phraseEn}"</div>
             <div className="phraseen">"{item.phraseEs}"</div>
           </div>
           <RiDeleteBin5Line
                  onClick={() => handleDelete(item._id, item.name)}
                  className="image_delete"
                  size={50}
                />
         </div>
         
       ))}
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
                deleteStaffCarousel(id);
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
      <div className="locations_container-title">Carousel staff</div>

      {render()}
    </div>
  );
};

export default CarouselStaff;
