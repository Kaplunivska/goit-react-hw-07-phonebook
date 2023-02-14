import { createSlice } from '@reduxjs/toolkit';
import { fetchStatus } from 'constants';

import {
  fetchStatus,
  addContact,
  removeContact,
} from './contacts.operations';

const initialState = {
  list: [],
  filter: '',
  status: fetchStatus.IDLE,
  error: null,
};

const contacts = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
       updateFilter: (state, { payload }) => {
        state.filter = payload;
       },     
    },

     extraReducers: builder => {
      builder 
        .addCase(fetchContacts.fulfilled, (state, { payload }) => {
         state.list = payload;
         state.status = fetchStatus.FULFILLED;
        })
        .addCase(addContact.fulfilled, (state, { payload }) => {
          state.list.unshift(payload);
          state.status = fetchStatus.FULFILLED;
         })
        .addCase(removeContact.fulfilled, (state, { payload }) => {
          const index = state.list.findIndex(
            contact => contact.id === payload.id
          );
          state.list.splice(index, 1);
          state.status = fetchStatus.FULFILLED;
        })

        .addMatcher(
          action => action.type.endWith('/pending'),
          state => {
            state.status = fetchStatus.PENDING;
            state.error = null;
          }
        )
        .addMatcher(
         action => action.type.endWith('/rejected'),
         (state, { payload }) => {
          state.status = fetchStatus.REJECTED;
          state.error = payload;
         }
        );
  },
});

export const { updateFilter } = contacts.actions;
export default contacts.reducer;