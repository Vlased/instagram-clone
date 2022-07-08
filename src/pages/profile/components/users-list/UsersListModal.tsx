import { nanoid } from '@reduxjs/toolkit';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { db } from 'firebase-setup/firebaseConfig';
import Close from 'svgs/empty/Close';
import UserState from 'types/user-state-type';
import UserLoader from 'components/other/UserLoader';
import UserSuggestion from "./UserSuggestion";

type UsersListProps = {
    usersList: {userId: string}[];
    descriptionLine: string;
    closeEvent: () => void
}

const UsersListModal: React.FC<UsersListProps> = ({ usersList, descriptionLine, closeEvent }) => {
    const [isBeingLoaded, setIsBeingLoaded] = useState<boolean>(true);
    const [allUsers, setAllUsers] = useState<UserState[]>([])

    useEffect(() => {
        const getUsers = async () => {
            if(!usersList.length){
                return;
            }

            const usersRef = collection(db, "users");
            const q = query(usersRef, where("userId", "in", usersList.map(obj => obj.userId)));
        
            const querySnapshot = await getDocs(q);
            setAllUsers(querySnapshot.docs.map(doc => doc.data()) as UserState[])
        } 

        getUsers();
        setIsBeingLoaded(false);
    }, [usersList])

    const users = allUsers.map(data => <UserSuggestion {...data} key={data.userId} />)

    const generateSkeletons = () => {
        const skeletons = [];
        for (let i = 0; i < 3; i++) {
            skeletons.push(
                <UserLoader
                    key={nanoid()}
                    imageStyles={{ width: 40, height: 40, borderRadius: "50%" }}
                    firstTextStyles={{ width: 150, height: 9, borderRadius: "10px" }}
                    secondTextStyles={{ width: 130, height: 9, borderRadius: "10px" }}
                />
            );
        }

        return skeletons
    }

    return (
        <>
            <div className="h-10 w-full flex justify-center items-center font-medium border-b relative">
                <p>{descriptionLine}</p>
                <button
                    className="absolute right-2"
                    onClick={closeEvent}
                >
                    <Close
                        styles="h-7 w-7"
                    />
                </button>
            </div>
            {
                isBeingLoaded ?
                    generateSkeletons() :
                    users.length ?
                        <div className="overflow-hidden overflow-y-auto">
                            {users}
                        </div> :
                        <div className="h-10 w-full flex justify-center items-center">
                            <p className="font-medium text-sm">No Results</p>
                        </div>
            }
        </>
    )
}

export default UsersListModal