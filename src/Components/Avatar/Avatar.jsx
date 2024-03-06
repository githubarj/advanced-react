import { IoPersonSharp } from "react-icons/io5";
import "./avatar.css";
import PropTypes from "prop-types";

function Avatar({ src, alt, children }) {

    let backgroundColors = ["navy", "pink", "red", "blue", "green"]
    let chooseColor =
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)];


  return (
    <div className="avatar-container">
      <div
        className={
          src
            ? "avatar"
            : children
            ? "avatar avatar-letters"
            : "avatar avatar-icon"
        }
      >
        {src ? (
          <img src={src} alt={alt} />
        ) : children ? (
          <h2> {children} </h2>
        ) : (
          <IoPersonSharp />
        )}
      </div>
    </div>
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,
};

export default Avatar;
