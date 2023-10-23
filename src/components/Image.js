import React, { useState } from 'react';
import { SlLike } from 'react-icons/sl';
import Popup from '../hooks/Popup';

const Image = ({ data }) => {
  const [trigger, setTrigger] = useState(false);

  const ImgClickHandler = () => {
    setTrigger(true);
  };

  const formatLikes = (likeCount) => {
    if (likeCount >= 1000) {
      return `${(likeCount / 1000).toFixed(1)}k`;
    }
    return likeCount.toString();
  };

  return (
    <div className="mainImgDiv" style={{ position: "relative" }}>
      <img
        onClick={ImgClickHandler}
        className="h-72 w-full object-cover shadow-md cursor-pointer"
        src={data.urls.small}
        alt={data.alt_description}
      />
      <Popup data={data} trigger={trigger} setTrigger={setTrigger} />
      <div className="shortBio">
        <div className="circle">
          <img src={data.user.profile_image.medium} alt={data.user.name} />
        </div>
        <div>
          <h4 className="font-semibold">{data.user.name}</h4>
          <p className="font-thin">@{data.user.instagram_username}</p>
        </div>
      </div>
      <div className='likeDiv'>
        <SlLike style={{ fontSize: "20px" }} />
        <h5>{formatLikes(data.likes)}</h5>
      </div>
    </div>
  );
};

export default Image;
