import React from "react";
import ChannelHeader from "../components/ChannelHeader";
import Header from "../components/Header";
import Nav from "../components/Nav";
import "./ChannelPage.css";
const ChannelPage = ({ nav, navToggle }) => {
  return (
    <div className="channel">
      <Header navToggle={navToggle} />
      <div className="channel-div">
        <Nav nav={nav} />
        <div
          className={nav ? "channel channel-withnav" : "channel channel-normal"}
        >
          <ChannelHeader />
        </div>
      </div>
    </div>
  );
};

export default ChannelPage;
