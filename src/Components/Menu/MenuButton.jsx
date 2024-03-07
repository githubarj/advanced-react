import Button from "../Button";
import PropTypes from "prop-types";
export default function MenuButton({ children, toggle }) {
  return <Button onClick={toggle}>{children}</Button>;
}

MenuButton.propTypes = {
  children: PropTypes.node,
  toggle: PropTypes.func,
};
