import React from "react";
import PropTypes from "prop-types";

const SideBar = ({ handleToggleModal, data }) => {
  return (
    <div className="sidebar" onClick={handleToggleModal}>
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explantion}</p>
        </div>
        <button onClick={handleToggleModal} aria-label="Toggle Modal">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default SideBar;
