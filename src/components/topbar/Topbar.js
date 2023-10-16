import React from "react";
import "./Topbar.css";
// import { Link } from "react-router-dom";
// import logo from "../../assets/nav-logo-colored.png";
import { MdLocationPin } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { AiOutlinePhone } from "react-icons/ai";

const Topbar = () => {
  return (
    <div className="topbar" name='top'>
      <div className="topbar-content container">



        <div className="address bar-box1 hide">
          <span>
            <MdLocationPin />
          </span>
          <div className="address-header">
            <p>23412 Moulton Pkwy, Laguna Hills, CA 92653</p>
          </div>
        </div>

        <div className="email bar-box2">
          <span>
            <FiMail />
          </span>
          <div>
            <p>Info@palmspringsrehab.com</p>
          </div>
        </div>

        <div className="number bar-box3 hide">
          <span>
            <AiOutlinePhone />
          </span>
          <div>
            <p>+1 (323) 452-1224</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
