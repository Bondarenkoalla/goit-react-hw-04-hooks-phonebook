import React from "react";
import PropTypes from "prop-types";
import FormItem from "../FormItem/FormItem";

const FormList = ({ contacts, deleteItem }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <FormItem
          name={name}
          id={id}
          number={number}
          deleteItem={() => deleteItem(id)}
        />
      ))}
    </ul>
  );
};

export default FormList;
FormList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
