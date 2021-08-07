import React from "react";
import PropTypes from "prop-types";
const Finder = ({ value, onChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="name" value={value} onChange={onChange} />
    </>
  );
};

export default Finder;
Finder.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
