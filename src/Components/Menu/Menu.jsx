import React, { Children } from "react";
import PropTypes from "prop-types"

export default function Menu({children}) {

  const [open, setOpen] = React.useState(true);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className="menu">
     {children}
    </div>
  );
}


Menu.propTypes = {
    children: PropTypes.array,
}