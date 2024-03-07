import PropTypes from "prop-types"
export default function MenuItem({ children }) {
  return <div className="menu-item">{children}</div>;
}

MenuItem.propTypes = {
  children: PropTypes.array,
};