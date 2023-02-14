import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.list;
export const selectFilter = state => state.contacts.filter;
export const selectStatus = state => state.contacts.status;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
 [selectContacts, selectFilter],
   (contacts, filter) => {
     const normalizeFilter = filter.toLowerCase();
     return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizeFilter)
        );
   }
);