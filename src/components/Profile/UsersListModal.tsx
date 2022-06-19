import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase/firebaseConfig';
import Close from '../../svgs/Close';
import UserState from '../../types/user-state-type';
import UserSuggestion from "./UserSuggestion";

type UsersListProps = {
    uid: string,
    usersList: {userId: string}[];
    descriptionLine: string;
}

const UsersListModal: React.FC<UsersListProps> = ({ uid, usersList, descriptionLine }) => {
    const navigate = useNavigate();
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
    }, [usersList])

    const users = allUsers.map(data => <UserSuggestion {...data} key={data.userId} />)

    return (
        <>
            <div className="h-10 w-full flex justify-center items-center font-medium border-b relative">
                <p>{descriptionLine}</p>
                <button
                    className="absolute right-2"
                    onClick={() => navigate(-1)}
                >
                    <Close 
                        styles="h-7 w-7"
                    />
                </button>
            </div>
            {
                users.length === 0 ?
                    <div className="text-center mt-2">No Users Found</div> :
                    <div>
                        {users}
                    </div>
            }
        </>
    )
}

export default UsersListModal