import { selectError, selectIsLoading } from 'components/redux/contactSlice';
import { useSelector } from 'react-redux';
import { FormPhoneBook } from 'components/Form/Form';
import { FindContacts } from 'components/FindContacts/FindContacts';
import { ContactsList } from 'components/ContactsList/ContactsList';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div>
      <h1>Phonebook</h1>
      <FormPhoneBook />
      <h2>Contacts</h2>
      {isLoading && !error && <div>Request in progress...</div>}
      <FindContacts />
      <ContactsList />
    </div>
  );
};
export default ContactsPage;
