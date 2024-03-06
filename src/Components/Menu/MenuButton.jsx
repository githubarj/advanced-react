import Button from "../Button";
import PropTypes from "prop-types"
export default function MenuButton({ buttonText, onClick }) {
  return <Button onClick={onClick}>{buttonText}</Button>;
}


MenuButton.propTypes = {
    buttonText : PropTypes.string,
    onClick : PropTypes.func,
}