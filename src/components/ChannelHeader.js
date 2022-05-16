import "./ChannelHeader.css";
import React from "react";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ChannelHeader = () => {
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div className="channel-header">
      <div className="channel-avatar">
        <div className="avatar-heading">
          <Avatar
            src={user?.photoURL}
            sx={{
              width: "100px",
              height: "100px",
            }}
          />
          <div className="avatar-header">
            <h4>{user?.displayName}</h4>
            <p>2 Subscribers</p>
          </div>
        </div>
        <div className="button-set">
          <button className="button-channel">CUSTOMIZE CHANNEL</button>
          <button className="button-channel">MANAGE VIDEOES</button>
        </div>
      </div>
      <div className="header-links">
        <Link to={"/channel?to=home"}>
          <span className="header-link">HOME</span>
        </Link>
        <span className="header-link">VIDEOES</span>
        <span className="header-link">PLAYLISTS</span>
        <span className="header-link">CHANNELS</span>
        <span className="header-link">ABOUT</span>
      </div>
    </div>
  );
};

export default ChannelHeader;
