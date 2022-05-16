import React from "react";
import ChannelHeader from "../components/ChannelHeader";
import ChannelHome from "../components/ChannelHome";
import Header from "../components/Header";
import Nav from "../components/Nav";
import useQuery from "../hooks/useQuery";
import "./ChannelPage.css";
const ChannelPage = ({ nav, navToggle }) => {
  const query = useQuery();
  return (
    <div className="channel">
      <Header navToggle={navToggle} />
      <div className="channel-div">
        <Nav nav={nav} />
        <div
          className={nav ? "channel channel-withnav" : "channel channel-normal"}
        >
          <ChannelHeader />
          {!query.get("to") && query.get("to") === "home" && <ChannelHome />}
        </div>
      </div>
    </div>
  );
};

export default ChannelPage;
