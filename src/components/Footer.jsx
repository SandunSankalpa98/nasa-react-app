import PropTypes from 'prop-types';

const Footer = ({ showModal, handleToggleModal }) => {
  return (
    <footer>
      <div className="bgGradient">
        <div>
          <h2>The Brutal Martian Landscape</h2>
          <h1>APOD PROJECT</h1>
        </div>
        <button onClick={handleToggleModal} aria-label="Toggle Modal">
          <i className="fa-solid fa-circle-info"></i>
        </button>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};

export default Footer;
