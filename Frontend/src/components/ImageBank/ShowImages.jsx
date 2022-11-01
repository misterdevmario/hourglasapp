import { useAppInfo } from "../../context/AppContext";
import './showimages.css'

const ShowImages = () => {
  const { appInfo } = useAppInfo();
  console.log(appInfo);

  return (
    <div className="image">
      {appInfo.map((img) => (
        <div className="cardimage">
          <div key={img._id}>
          <img src={img.image.url} alt={img.name} />
          <div className="cardname">{img.name}</div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default ShowImages;
