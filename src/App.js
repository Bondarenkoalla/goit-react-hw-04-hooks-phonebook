import "./App.css";

import Form from "./Components/Form/Form";
import React, { useState, useEffect } from "react";
// import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Finder from "./Components/Finder/Finder";
import FormList from "./Components/FormList/FormList";

const defContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ?? defContacts;
  });
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitHandler = (name, number) => {
    const isAlreadyInContacts = contacts.some(
      (contact) => contact.name === name
    );
    const item = {
      name,
      number,
      id: uuidv4(),
    };
    if (isAlreadyInContacts) {
      alert("вы что такое делаете");
      return;
    }
    setContacts((prevState) => [item, ...prevState]);
    console.log(contacts);
  };

  const deleteItem = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const onFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const includingContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className="App">
      <Form onSubmitProp={onSubmitHandler} />

      <Finder value={filter} onChange={onFilter} />
      <FormList contacts={includingContacts()} deleteItem={deleteItem} />
    </div>
  );
};


export default App;
