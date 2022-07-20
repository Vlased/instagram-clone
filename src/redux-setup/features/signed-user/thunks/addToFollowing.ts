import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "firebase-setup/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { RootState } from "redux-setup";
import { setUserOnPage } from "redux-setup/features/user-on-page/userOnPage";
import UserState from "types/userStateType";
import { setSignedUser } from "../signedUser";

type FollowingProps = {
    userId: string,
    uid: string,
}

const addToFollowing = createAsyncThunk(
    "signedUser/addToFollowing",
    async ({ userId, uid }: FollowingProps, { rejectWithValue, dispatch, getState }) => {
        const loggedUser = (getState() as RootState).signedUser.user;
        const userOnPage = (getState() as RootState).userOnPage.user;

        const newUser = { userId }

        await updateDoc(doc(db, "users", loggedUser.userId), {
            following: [...loggedUser.following, newUser]
        })

        dispatch(setSignedUser({ ...loggedUser, following: [...loggedUser.following, newUser] }))

        if (uid === loggedUser.userId) {
            dispatch(setUserOnPage({ ...loggedUser, following: [...loggedUser.following, newUser] }))
        }

        const userToUpdate = await getDoc(doc(db, "users", userId));

        const modifiedFollowers = [ ...(userToUpdate.data() as UserState).followers, { userId: loggedUser.userId } ];
        await updateDoc(doc(db, "users", userId), {
            followers: modifiedFollowers
        })

        if (userId === userOnPage.userId) {
            dispatch(setUserOnPage({ ...(userToUpdate.data() as UserState), followers: modifiedFollowers }))
        }
    }
)


export default addToFollowing