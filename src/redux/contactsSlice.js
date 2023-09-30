import { fetchContacts, addContact, deleteContact } from '../redux/operations';
const { createSlice } = require('@reduxjs/toolkit');

const handlePending = state => {
  state.isLoading = true;
};

const handleFetchContactsRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

const handleFetchContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleAddContactRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

const handleAddContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const handleDeleteContactRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

const handleDeleteContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(item => item.id !== action.payload.id);
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleFetchContactsRejected)
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleAddContactRejected)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleDeleteContactRejected)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled);
  },
});

export const contactsReducer = slice.reducer;