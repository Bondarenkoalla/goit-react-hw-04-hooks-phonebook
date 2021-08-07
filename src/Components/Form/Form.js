import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import styles from "./Form.module.css";

const Form = ({onSubmitProp}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const reset = () => {
    setName("");
    setNumber("")
  };
    const onInputTelChange = (event) => {
    setNumber( event.currentTarget.value );
  };

 const  onInputChange = (event) => {
    setName( event.currentTarget.value);
 };
  
    const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmitProp(name, number);
    reset();
  };
  
const inputId = uuidv4();
  return (
    <form onSubmit={onFormSubmit} className={styles.form}>
         <label htmlFor={inputId} className={styles.form_item}>
          Name:
           <input
            type="text"
            name="name"
            value={name}
            id={inputId}
            onChange={onInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label className={styles.form_item}>
          Number:
          <input
            type="tel"
            name="number"
            value={number}
            onChange={onInputTelChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
  )
}


// class Form extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   reset() {
//     this.setState({ name: "", number: "" });
//   }

//   onInputChange = (event) => {
//     this.setState({ name: event.currentTarget.value });
//   };
//   onInputTelChange = (event) => {
//     this.setState({ number: event.currentTarget.value });
//   };
//   onFormSubmit = (event) => {
//     event.preventDefault();
//     this.props.onSubmitProp(this.state.name, this.state.number);
//     this.reset();
//   };

//   render() {
//     const inputId = uuidv4();
//     return (
//       <form onSubmit={this.onFormSubmit} className={styles.form}>
//         <label htmlFor={inputId} className={styles.form_item}>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             id={inputId}
//             onChange={this.onInputChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           />
//         </label>

//         <label className={styles.form_item}>
//           Number:
//           <input
//             type="tel"
//             name="number"
//             value={this.state.number}
//             onChange={this.onInputTelChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//           />
//         </label>
//         <button type="submit" className={styles.button}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
export default Form;
Form.propTypes = {
  onSubmitProp: PropTypes.func.isRequired,
};
