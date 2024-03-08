import PropTypes from "prop-types";
import { useState, Children, cloneElement, createContext } from "react";

export const MenuContext = createContext();

export default function Menu({ children }) {
  const [open, setOpen] = useState(false);
  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <MenuContext.Provider value={{ toggle, open }}>
      <div className="menu">
        {Children.map(children, (child, index) =>
          cloneElement(child, { key: index, open, toggle })
        )}
      </div>
    </MenuContext.Provider>
  );
}

Menu.propTypes = {
  children: PropTypes.node,
};
