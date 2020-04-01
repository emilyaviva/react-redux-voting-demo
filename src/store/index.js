import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import candidates from '../reducers/candidates';
import totalVotes from '../reducers/totalVotes';
import logger from '../middleware/logger';

const store = configureStore({
  middleware: [logger, ...getDefaultMiddleware()],
  reducer: {
    candidates,
    totalVotes
  }
});

export default store;
