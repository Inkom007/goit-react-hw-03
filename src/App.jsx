import { useState } from "react";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import SearchBox from "./Components/SearchBox/SearchBox";
import initialContacts from "./contacts.json";

const App = () => {
  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const initialValues = {
    name: "",
    number: "",
  };

  const [contacts, setContacts] = useState(initialContacts);

  const deleteContact = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  const [filter, setFilter] = useState("");

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm initialValues={initialValues} addContact={addContact} />
      <SearchBox value={filter} onSearch={setFilter} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </>
  );
};

export default App;
