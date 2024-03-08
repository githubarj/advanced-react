import PropTypes from "prop-types";
import { MenuContext } from "./Menu";
import { useContext } from "react";
export default function MenuDropdown({ children }) {
  let { open } = useContext(MenuContext);
  return <div className="menu-dropdown">{open && children}</div>;
}

MenuDropdown.propTypes = {
  children: PropTypes.array,
};
