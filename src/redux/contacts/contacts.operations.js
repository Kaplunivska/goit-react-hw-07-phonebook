import { createAsyncThunk } from '@reduxjs/toolkit';
import contactsAPI from 'services/contactsAPI';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
      try {
        const { data } = await contactsAPI.getContacts();
  
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, { rejectWithValue }) => {
      try {
        const { data } = await contactsAPI.addContact(contact);
  
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
);
  
export const removeContact = createAsyncThunk(
    'contacts/removeContact',
    async (contactId, { rejectWithValue }) => {
      try {
        const { data } = await contactsAPI.removeContact(contactId);
  
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
);