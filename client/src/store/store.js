import { configureStore } from '@reduxjs/toolkit';

import exempleSlice from './reducers/exemple.slice';

const store = configureStore({
  reducer: {
    exemple: exempleSlice,
  },
});

export default store;
