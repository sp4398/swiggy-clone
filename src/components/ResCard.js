import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, cloudinaryImageId } = resData.info;
  return (
    <div className="w-[200px] h-[300px] m-[25px] bg-[#f0f0f0] rounded-[3%] cursor-pointer">
      <div className="card-img">
        <img
          className="w-[180px] h-[150px] p-[10px] m-3"
          src={CDN_URL + cloudinaryImageId}
          alt="cardImg"
        />
      </div>
      <div className="m-3">
        <div className="text-[18px] font-bold text-black font-[Gill Sans,sans-serif]">
          {name}
        </div>
        <span className="rating">
          ⭐{avgRating}
          <span className="distance">
            &nbsp;{resData.info.sla.deliveryTime}mins
          </span>
        </span>
        <div className="desc">
          {cuisines.join(", ")}
          <br />
        </div>
      </div>
    </div>
  );
};

export default ResCard;
