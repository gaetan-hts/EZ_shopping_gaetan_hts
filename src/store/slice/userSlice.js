import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  name: "Alan",
  lastName: "Turing",
  email: "alan@turing.com",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, name, lastName, email } = action.payload;
      state.id = id;
      state.name = name;
      state.lastName = lastName;
      state.email = email;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
