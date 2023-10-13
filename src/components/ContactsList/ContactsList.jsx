import { useDispatch, useSelector } from 'react-redux';
import { Button, Li, List, P } from './ContactsList.styled';
import { deleteContacts, fetchContacts } from 'components/redux/operations';
import { filterNumbers } from 'components/redux/filterSlice';
import { useEffect } from 'react';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const visibleNumbers = useSelector(filterNumbers);
  const onDelete = delEl => {
    dispatch(deleteContacts(delEl));
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <List>
        {visibleNumbers.map(user => (
          <Li key={user.id}>
            <P>{user.name}:</P>
            <P>{user.number}</P>
            <Button onClick={() => onDelete(user.id)} type="button">
              delete
            </Button>
          </Li>
        ))}
      </List>
    </div>
  );
};
