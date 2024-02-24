import { useState, useEffect } from 'react'
import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'
import initData from './data/initData.json'
import './App.css'

function App() {

  const [ contacts, setContacts ] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts-list");
    if (savedContacts !== null) {
      try{
        return JSON.parse(savedContacts);
      }catch{
        console.log("Error occured! Data removed!");
      }
    }
    return initData;
  });

  const [filterValue, setFilter] = useState("");

  useEffect(() => {
      window.localStorage.setItem("contacts-list", JSON.stringify(contacts));
    }, [contacts]
  )

  const onAddContact = values => {
    setContacts((prevContacts) => {
      return [...prevContacts, values];
    });
  }

  const onDeleteContact = (contactID) => {
    setContacts((prevContacts) => {
      return prevContacts.filter(({id}) => id !== contactID);
    })
  }

  const filteredContacts = contacts.filter(({name}) => name.toLowerCase().includes(filterValue.toLowerCase()));

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filterValue={filterValue} setFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDeleteContact={onDeleteContact} />
    </>
  )
}

export default App
