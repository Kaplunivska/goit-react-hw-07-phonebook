import { SubHeader } from 'components/Typography';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyledContactList,
  StyledContactListButton,
  StyledContactListItem,
} from './ContactList.styled';
import {
  fetchContacts,
  removeContact,
} from 'redux/contacts/contacts.operations';
import {
  selectError,
  selectFilteredContacts,
  selectStatus,
} from 'redux/contacts/contacts.selectors';
import { useEffect } from 'react';
import { fetchStatus } from 'constants';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (status === fetchStatus.FULFILLED && filteredContacts?.length === 0) {
    return <SubHeader mt={3}>The contact list is empty</SubHeader>;
  }

  return (
    <>
      {status === fetchStatus.PENDING && (
        <StyledContactList mt={3}>Loading...</StyledContactList>
      )}

      {status === fetchStatus.REJECTED && (
        <StyledContactList mt={3}>{error}</StyledContactList>
      )}

      <StyledContactList mt={3}>
        {filteredContacts.map(({ id, name, number }) => (
          <StyledContactListItem key={id}>
            {name}: {number}
            <StyledContactListButton
              type="button"
              onClick={() => {
                dispatch(removeContact(id));
              }}
              aria-label="delete contact button"
            >
              <RiDeleteBack2Line fill="red" />
            </StyledContactListButton>
          </StyledContactListItem>
        ))}
      </StyledContactList>
    </>
  );
}