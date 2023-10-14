import { selectError, selectIsLoading } from 'components/redux/contactSlice';
import { useSelector } from 'react-redux';
import { FormPhoneBook } from 'components/Form/Form';
import { FindContacts } from 'components/FindContacts/FindContacts';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { PageWrapper, Text } from './ContactsPage.styled';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <PageWrapper>
      <Text>Add to somebody to contacts, meow!</Text>
      <FormPhoneBook />
      <Text>Contacts</Text>
      {isLoading && !error && <div>Request in progress...</div>}
      <FindContacts />
      <ContactsList />
    </PageWrapper>
  );
};
export default ContactsPage;
