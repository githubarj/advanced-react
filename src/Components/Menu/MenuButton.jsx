import Button from "../Button";
import PropTypes from "prop-types";
import { MenuContext } from "./Menu";
import { useContext } from "react";
export default function MenuButton({ children }) {
  const {toggle} = useContext(MenuContext)
  return <Button onClick={toggle}>{children}</Button>;
}

MenuButton.propTypes = {
  children: PropTypes.node,
};
