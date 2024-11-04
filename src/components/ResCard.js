const ResCard = (props) => {
    const { resData } = props;
    const { name, avgRating, cuisines, cloudinaryImageId } = resData.info;
    return (
      <div className="res-card">
        <div className="card-img">
          <img
            className="cardImg"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +cloudinaryImageId
            }
            alt="cardImg"
          />
        </div>
        <div className="res-detail">
          <div className="res-title">{name}</div>
          <span>
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