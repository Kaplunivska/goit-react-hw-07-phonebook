import { StyledForm } from 'components/ContactForm/ContactForm.styled';
import {
  StyledFormInput,
  StyledFormLabel,
} from 'components/FormInput/FormInput.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/contacts.selectors';
import { updateFilter } from 'redux/contacts/contacts.slice';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <StyledForm>
      <StyledFormLabel>
        Find contact by name
        <StyledFormInput
          type="text"
          name="filter"
          value={filter}
          onChange={evt => {
            dispatch(updateFilter(evt.target.value));
          }}
          placeholder="Search..."
        />
      </StyledFormLabel>
    </StyledForm>
  );
}
