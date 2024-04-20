import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  travelFrom: '',
  travelTo: '',
  travelDate: '',
  returnDate: '',
  travelPlan: '',
  totalAdult: '',
  duration: '',
  airline: '',
  price: '',
  middleName: '',
  firstName: '',
  lastName: '',
  travelingTime: '',
  arrivalTime: '',
};
const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    flight: {
      prepare(
        travelFrom,
        travelTo,
        travelDate,
        returnDate,
        travelPlan,
        totalAdult,
        duration,
        airline,
        price,
        middleName,
        firstName,
        lastName,
        travelingTime,
        arrivalTime
      ) {
        return {
          payload: {
            travelFrom,
            travelTo,
            travelDate,
            returnDate,
            travelPlan,
            totalAdult,
            duration,
            airline,
            price,
            middleName,
            firstName,
            lastName,
            travelingTime,
            arrivalTime,
          },
        };
      },
      reducer(state, action) {
        (state.travelFrom = action.payload.travelFrom),
          (state.travelTo = action.payload.travelTo),
          (state.travelDate = action.payload.travelDate),
          (state.returnDate = action.payload.returnDate),
          (state.travelPlan = action.payload.travelPlan),
          (state.totalAdult = action.payload.totalAdult),
          (state.duration = action.payload.duration),
          (state.airline = action.payload.airline),
          (state.price = action.payload.price),
          (state.middleName = action.payload.middleName),
          (state.firstName = action.payload.firstName),
          (state.lastName = action.payload.lastName),
          (state.travelingTime = action.payload.travelingTime),
          (state.arrivalTime = action.payload.arrivalTime);
      },
    },
  },
});

export const { flight } = userReducer.actions;
export default userReducer.reducer;
