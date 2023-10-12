import { Contacts } from '../Contacts/Contacts';
import { FormPhoneBook } from '../Form/Form';
import { FindContacts } from '../FindContacts/FindContacts';
import { PageWrapper } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'components/redux/contactSlice';
import { useEffect } from 'react';
import { fetchContacts } from 'components/redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <PageWrapper>
      <h1>Phonebook</h1>
      <FormPhoneBook />
      <h2>Contacts</h2>
      {isLoading && !error && <div>Request in progress...</div>}
      <FindContacts />
      <Contacts />
    </PageWrapper>
  );
};
