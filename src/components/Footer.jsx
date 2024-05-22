
import PropTypes from 'prop-types';

const Footer = ({ showModal, handleToggleModal, data }) => {
  return (
    <footer>
      <div className="bgGradient">
        <div>
          <h2>{data?.title}</h2>
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
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Footer;
