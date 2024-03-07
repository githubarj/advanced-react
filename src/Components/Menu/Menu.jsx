import PropTypes from "prop-types";
import { useState, Children, cloneElement} from "react";

export default function Menu({ children }) {
  const [open, setOpen] = useState(true);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className="menu">
      {Children.map(children, (child, index) =>
        cloneElement(child, { key: index, open, toggle })
      )}
    </div>
  );
}

Menu.propTypes = {
  children: PropTypes.node,
};
