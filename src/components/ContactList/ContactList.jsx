import PropTypes from 'prop-types';
import Contact from "../Contact/Contact"
import css from './ContactList.module.css'

const ContactList = ({ items, onDelete }) => {
  return (
    <ul className={css.contactList}>
        {items.map(({id, name, number }) => {
            return <Contact key={id} id={id} name={name} number={number} onDelete={onDelete} />
        })}
    </ul>
  )
}

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default ContactList