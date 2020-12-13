import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mutation: '',
};

const exempleSlice = createSlice({
  name: 'mutation',
  initialState,
  reducers: {
    exempleMutation(state, action) {
      console.log(action.payload);
      state.mutation = 'state changé';
    },
  },
});

export const { exempleMutation } = exempleSlice.actions;

export default exempleSlice.reducer;
