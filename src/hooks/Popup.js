import React, { useContext } from 'react'
import { SlLike } from 'react-icons/sl';
import { BsInstagram } from 'react-icons/bs'
import { ImageContext } from "../App";

function Popup(props) {
  const { isDark } = useContext(ImageContext);
  
  return (props.trigger) ? (
    <div className={isDark ? "popup drop-shadow-md bg-white dark:bg-neutral-800" :"popup drop-shadow-md bg-white"}>
      <div className='imgDiv drop-shadow-md'>
        <img className='' src={props.data.urls.full} alt={props.data.alt_description} />

        <div class="imgBtn">
          <div class="Ldiv">
            <div>share</div>
            <div>info</div>
          </div>
          <a href={props.data.links.download} target='blank' class="Rdiv text-lg">
            Download
          </a>
        </div>

      </div>
      <div className="shortBio" style={{ position: "relative" }}>
        <div className="circle">
          <img src={props.data.user.profile_image.medium} />
        </div>
        <div>
          <h4 className="font-semibold">{props.data.user.name}</h4>
          <p className="font-thin"><BsInstagram style={{ display: "inline-block", marginRight: "5px" }} />{props.data.user.instagram_username}</p>
        </div>
        <div className='likeDiv' style={{ right: "4vw", bottom: "5vh" }}>
          <SlLike style={{ fontSize: "20px" }} />
          <h5>{props.data.likes}</h5>
        </div>
      </div>
      <div className='tagDiv'>
        <h3>Related Tags</h3>
        <div className='tags'>
          {props.data.tags.map((ele, index) => {
            return (
              <div key={index}>
                {ele.title}
              </div>
            )
          })}
        </div>
      </div>

      <button className='buttonPopup' onClick={() => props.setTrigger(false)}>X</button>
    </div>
  ) : "";
}

export default Popup