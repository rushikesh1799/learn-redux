import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, fullName: "Adarsh Balika" },
    { id: 2, fullName: "Pratik Aher" },
    { id: 3, fullName: "Siddhant Bhadke" },
];

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
