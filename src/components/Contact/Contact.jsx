import css from './Contact.module.css';
import { BsPersonFill } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contact_item}>
      <div className={css.contact_det}>
        <div className={css.contact_phone}>
          <BsPersonFill style={{ fontSize: '28px' }} />
          <p className={css.name}>{name}</p>
        </div>
        <div className={css.contact_phone}>
          <FaPhone style={{ fontSize: '22px' }} />
          <p className={css.name}>{number}</p>
        </div>
      </div>
      <button
        type='button'
        onClick={() => dispatch(deleteContact(id))}
        className={css.button}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactItem;
