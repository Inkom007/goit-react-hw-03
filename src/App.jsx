import { useState } from "react";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import SearchBox from "./Components/SearchBox/SearchBox";
import initialContacts from "./contacts.json";
import * as Yup from "yup";

const App = () => {
  const [contacts, setContacts] = useState(initialContacts);

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const initialValues = {
    name: "",
    number: "",
  };

  const registerSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min(3, "Too short!")
      .max(50, "Too long!"),
    number: Yup.string()
      .required("Required")
      .min(3, "Too short!")
      .max(50, "Too long!"),
  });

  const handleSubmit = (data, actions) => {
    addContact({
      id: Date.now(),
      name: data.name,
      number: data.number,
    });
    actions.resetForm();
  };

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
      <ContactForm
        initialValues={initialValues}
        addContact={addContact}
        handleSubmit={handleSubmit}
        registerSchema={registerSchema}
      />
      <SearchBox value={filter} onSearch={setFilter} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </>
  );
};

export default App;
