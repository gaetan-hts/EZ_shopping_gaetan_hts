import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const storedState = localStorage.getItem("user");
  return storedState
    ? JSON.parse(storedState)
    : {
        id: 1,
        name: "Alan",
        lastName: "Turing",
        email: "alan@turing.com",
      };
};

const initialState = getInitialState();

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
      localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
