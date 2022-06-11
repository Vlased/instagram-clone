import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import BirthdateState from "../../types/birthdate-type";
import UserState from "../../types/user-state-type";

export const initialState: { user: UserState } = {
    user: {
        dateCreated: 0,
        emailAddress: "",
        following: [],
        followers: [],
        fullName: "full name",
        userId: "jXvXw2V5w9fWoLqvEPfGLGp6wMy1",
        username: "usernamea",
        birthdate:  {} as BirthdateState,
        phoneNumber: "",
        profileImage: "",
        posts: []
    }
}

const signedUserSlice = createSlice({
    name: "signedUser",
    initialState,
    reducers: {
        setSignedUser: (state, action: PayloadAction<UserState>) => {
            state.user = action.payload
        },
        removeSignedUser: (state) => {
            state = initialState
        }
    }
})

export default signedUserSlice.reducer
export const { setSignedUser, removeSignedUser } = signedUserSlice.actions;