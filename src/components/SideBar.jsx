import PropTypes from 'prop-types';
const SideBar = (props) => {
  
  const {handleToggleModal} = props

  return (
    <div className="sidebar" onClick={handleToggleModal}>
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>The Brutial Martian Landscape</h2>
        <div>
          <p>Description</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ex
            ipsum asperiores nobis earum dolorum et explicabo rem iste maxime.
          </p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
};

export default SideBar;
