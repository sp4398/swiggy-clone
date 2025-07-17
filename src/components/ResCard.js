import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, cloudinaryImageId } = resData?.info;
  return (
    <div className="w-[200px] h-80 m-[25px] bg-gray-100 hover:bg-gray-200 rounded-[3%] cursor-pointer">
      <div className="card-img">
        <img
          className="w-[180px] h-[150px] px-2 py-2 mx-2 rounded-xl"
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

//Higher order component
//input: ResCard => ResCardPromoted

export const withPromotedLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-300 text-white">Promoted</label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
