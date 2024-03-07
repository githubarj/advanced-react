import PropTypes from "prop-types";
export default function MenuDropdown({ children , open }) {
  return (
    <div className="menu-dropdown">
      { open &&  children}
    </div>
  );
}

MenuDropdown.propTypes = {
  children: PropTypes.array,
  open: PropTypes.bool,
};
