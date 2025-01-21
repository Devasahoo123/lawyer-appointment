import { configureStore } from '@reduxjs/toolkit';
import lawyersReducer from '../features/lawyersSlice';
import appointmentsReducer from '../features/appointmentsSlice';
import loggerMiddleware from './middleware';

const store = configureStore({
  reducer: {
    lawyers: lawyersReducer,
    appointments: appointmentsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
