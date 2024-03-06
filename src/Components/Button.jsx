import PropTypes from "prop-types";

function Button({ variant, size, children, className, ...restProps }) {
  let buttonSize = size ? `button-${size}` : "";

  return (
    <div className="container">
      <button
        className={`${buttonSize}  ${className} ${`button-${variant}`} `}
        {...restProps}
      >
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  className: PropTypes.string,
  onclick: PropTypes.func,
  size: PropTypes.string,
};

export default Button;
