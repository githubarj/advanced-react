import PropTypes from "prop-types";
export default function MenuDropdown({ items }) {
  return (
    <div className="menu-dropdown">
      {items.map((item) => (
        <div className="menu-item" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}

MenuDropdown.propTypes = {
  items: PropTypes.object,
};
