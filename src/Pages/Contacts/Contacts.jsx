import { PageWrapper } from 'components/App/App.styled';
import { Contacts } from 'components/ContactsList/ContactsList';
import { FindContacts } from 'components/FindContacts/FindContacts';
import { FormPhoneBook } from 'components/Form/Form';
import { selectError, selectIsLoading } from 'components/redux/contactSlice';
import { useSelector } from 'react-redux';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  <PageWrapper>
    <h1>Phonebook</h1>
    <FormPhoneBook />
    <h2>Contacts</h2>
    {isLoading && !error && <div>Request in progress...</div>}
    <FindContacts />
    <Contacts />
  </PageWrapper>;
};
export default ContactsPage;
