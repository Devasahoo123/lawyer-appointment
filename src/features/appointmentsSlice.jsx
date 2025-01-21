import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    bookAppointment: (state, action) => {
      state.push(action.payload);
      
    },
  },
});

export const { bookAppointment } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
