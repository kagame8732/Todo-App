import React, { useState, useEffect } from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  const STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}
