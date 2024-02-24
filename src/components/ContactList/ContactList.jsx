import PropTypes from 'prop-types';
import Contact from "../Contact/Contact"
import css from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
        {contacts.map(({id, name, number }) => {
            return <Contact key={id} id={id} name={name} number={number} onDeleteContact={onDeleteContact} />
        })}
    </ul>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList