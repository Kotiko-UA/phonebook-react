import { filterStatus } from 'components/redux/filterSlice';
import { useDispatch } from 'react-redux';
import { Input, Text } from './FindContacts.styled';

export const FindContacts = () => {
  const dispatch = useDispatch();
  const onFindUser = ({ target: { value } }) => {
    dispatch(filterStatus(value));
  };
  return (
    <div>
      <Text>find contacts by name</Text>
      <Input onChange={onFindUser} name="findName" type="text" />
    </div>
  );
};
