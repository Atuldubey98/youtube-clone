import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import ModalSheet from "./ModalSheet";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Header.css";
import Avatar from "@mui/material/Avatar";
import Modal from "react-modal";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Link, useNavigate } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUserLoading } from "../redux/actions/usersActions";
const Header = ({ navToggle }) => {
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    overlay: {
      backgroundColor: "none",
    },
    content: {
      top: "150px",
      left: "85%",
      margin: 0,
      padding: 0,
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const handleChannelPage = () => {
    navigate("/channel");
  };
  const handleLogoutUser = async () => {
    try {
      dispatch(setUserLoading(true));
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="header">
      <div className="header-title">
        <div onClick={navToggle} className="header-menu">
          <i className="header-icon fa-solid fa-bars"></i>
        </div>
        <Link to="/">
          <img className="youtube-img" src="image/you" alt="youtube-icon" />
        </Link>
      </div>
      <div className="header-search">
        <input type="text" name="search" autoComplete="off" />
        <div className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="search-mic">
          <i className="search-phone fa-solid fa-microphone"></i>
        </div>
      </div>
      <div className="header-icons">
        <VideoCallIcon className="header-icon" />
        <AppsIcon className="header-icon" />
        <NotificationsIcon className="header-icon" />
        <div className="avatar-menu">
          <Avatar
            src={user?.photoURL}
            onClick={openModal}
            sx={{
              width: "30px",
              height: "30px",
              border: !modalIsOpen ? "1px solid blue" : "none",
            }}
            className="header-icon"
          />
          <ModalSheet
            children={
              <div className="avatar-menu">
                <div className="avatar-title">
                  <Avatar
                    src={user?.photoURL}
                    onClick={openModal}
                    sx={{
                      width: "30px",
                      height: "30px",
                      border: "1px solid blue",
                    }}
                    className="header-icon"
                  />
                  <div className="avatar-content">
                    <p className="title">{user?.displayName}</p>
                    <span className="avatar-subtitle">
                      Manage your Google Accounts
                    </span>
                  </div>
                </div>
                <div onClick={handleChannelPage} className="avatar-menu-item">
                  <AccountBoxOutlinedIcon className="menu-item-icon" />
                  <span className="menu-item-text">Your channel</span>
                </div>
                <div className="avatar-menu-item">
                  <MonetizationOnOutlinedIcon className="menu-item-icon" />
                  <span className="menu-item-text">
                    Purchase and Memberships
                  </span>
                </div>
                <div className="avatar-menu-item">
                  <SettingsOutlinedIcon className="menu-item-icon" />
                  <span className="menu-item-text">YouTube Studio</span>
                </div>
                <div className="avatar-menu-item">
                  <GroupOutlinedIcon className="menu-item-icon" />
                  <span className="menu-item-text">Switch Accounts</span>
                </div>
                <div onClick={handleLogoutUser} className="avatar-menu-item">
                  <ExitToAppOutlinedIcon className="menu-item-icon" />
                  <span className="menu-item-text">Sign Out</span>
                </div>
              </div>
            }
            modalIsOpen={modalIsOpen}
            customStyles={customStyles}
            closeModal={closeModal}
            openModal={openModal}
            afterOpenModal={afterOpenModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
