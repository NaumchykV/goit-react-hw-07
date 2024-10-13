import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoading, selectError, selectFilteredContacts } from '../../redux/contactsSlice';
import { fetchContacts, deleteContact } from '../../redux/contactsOps';
import ContactItem from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul className={css.contact_list}>
        {contacts.map(contact => (
          <li key={contact.id}>
            <ContactItem
              name={contact.name}
              number={contact.number}
              id={contact.id}
              onDeleteContact={() => dispatch(deleteContact(contact.id))}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
