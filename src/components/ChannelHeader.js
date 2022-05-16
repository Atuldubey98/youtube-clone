import "./ChannelHeader.css";
import React from "react";
import { Avatar } from "@mui/material";

const ChannelHeader = () => {
  return (
    <div className="channel-header">
      <div className="avatar-heading">
        <Avatar sx={{ width: "100px", height: "100px" }} />
        <div className="avatar-header">
          <h4>Atul Dubey</h4>
          <p>2 Subscribers</p>
        </div>
      </div>
      <div className="button-set">
        <button className="button-channel">CUSTOMIZE CHANNEL</button>
        <button className="button-channel">MANAGE VIDEOES</button>
      </div>
      <div className="header-links">
          <span className="header-link">HOME</span>
          <span className="header-link">VIDEOES</span>
          <span className="header-link">PLAYLISTS</span>
          <span className="header-link">CHANNELS</span>
          <span className="header-link">ABOUT</span>
      </div>
    </div>
  );
};

export default ChannelHeader;
