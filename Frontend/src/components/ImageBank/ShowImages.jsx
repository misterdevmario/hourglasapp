import { useAppInfo } from "../../context/AppContext";
import "./showimages.css";

const ShowImages = () => {
  const { appInfo } = useAppInfo();

  return (
    <div className="image_container">
      <div className="image_container-title">Gallery</div>
      <div className="image">
        {appInfo.images.map((img) => (
          <div key={img._id} className="cardimage">
            <div>
              <img src={img.image.url} alt={img.name} />
              <div className="cardname">{img.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowImages;
