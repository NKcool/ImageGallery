import React, { useContext } from 'react';
import { SlLike } from 'react-icons/sl';
import { BsInstagram } from 'react-icons/bs';
import { ImageContext } from '../App';

function Popup({ trigger, data, setTrigger }) {
  const { isDark } = useContext(ImageContext);

  if (!trigger) return null;

  const { urls, alt_description, links, user, likes, tags } = data;

  // Function to convert likes to 'k'
  const formatLikes = (likeCount) => {
    if (likeCount >= 1000) {
      return `${(likeCount / 1000).toFixed(1)}k`;
    }
    return likeCount.toString();
  };

  return (
    <div className={`popup drop-shadow-md bg-white ${isDark ? 'dark:bg-neutral-800' : ''}`}>
      <div className="imgDiv drop-shadow-md">
        <img src={urls.full} alt={alt_description} onLoad={() => console.log('Image loaded')} />

        <div className="imgBtn">
          <div className="Ldiv">
            <div>share</div>
            <div>info</div>
          </div>
          <a href={links.download} target="_blank" rel="noreferrer" className="Rdiv text-lg">
            Download
          </a>
        </div>
      </div>
      <div className="shortBio" style={{ position: 'relative' }}>
        <div className="circle">
          <img src={user.profile_image.medium} alt={user.name} />
        </div>
        <div>
          <h4 className="font-semibold">{user.name}</h4>
          <p className="font-thin">
            <BsInstagram style={{ display: 'inline-block', marginRight: '5px' }} />
            {user.instagram_username}
          </p>
        </div>
        <div className="likeDiv" style={{ right: '4vw', bottom: '5vh' }}>
          <SlLike style={{ fontSize: '20px' }} />
          <h5>{formatLikes(likes)}</h5>
        </div>
      </div>
      <div className="tagDiv">
        <h3>Related Tags</h3>
        <div className="tags">
          {tags.map((tag, index) => (
            <div key={`tag-${index}`}>{tag.title}</div>
          ))}
        </div>
      </div>

      <button className="buttonPopup" onClick={() => setTrigger(false)}>
        X
      </button>
    </div>
  );
}

export default Popup;
