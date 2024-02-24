import PropTypes from 'prop-types';
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from './Contact.module.css'

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.contactItem}>
        <div>
        <span className={css.contactName}><FaUser /> {name}</span>
        <span className={css.contactNumer}><FaPhone /> {number}</span>
        </div>
        <button type='button' onClick={() => onDelete(id)}>Delete</button>
    </li>
  )
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Contact