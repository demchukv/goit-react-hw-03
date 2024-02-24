import PropTypes from 'prop-types';
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from './Contact.module.css'

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={css.contactItem}>
        <div>
        <span className={css.contactName}><FaUser /> {name}</span>
        <span className={css.contactNumber}><FaPhone /> {number}</span>
        </div>
        <button type='button' onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  )
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

export default Contact