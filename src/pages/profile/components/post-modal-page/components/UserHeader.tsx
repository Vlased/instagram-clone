import AreYouSureModal from 'components/modal/AreYouSureModal';
import Modal from 'components/modal/Modal';
import UserLoader from 'components/other/UserLoader';
import RoutesTypes from 'constants/routes-types';
import useFollowers from 'helpers/useFollowers';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'redux-setup/hooks';

type UserHeaderProps = {
    userInfo: {
        username: string,
        profileImage: string,
        userId: string
    }
}

const UserHeader: React.FC<UserHeaderProps> = ({ userInfo }) => {
    const loggedUser = useAppSelector(state => state.signedUser.user);
    const navigate = useNavigate();

    const { addToFollowing, removeFromFollowing } = useFollowers({ userId: userInfo.userId });

    const [isUnfollowModalOpen, setIsUnfollowModalOpen] = useState<boolean>(false);

    return (
        <>
            <div className="w-full flex justify-start border-b items-center">
                {
                    userInfo.userId.length ?
                        <button
                            className="h-14 py-[0.5px] gap-4 flex items-center px-3"
                            onClick={() => navigate(RoutesTypes.DASHBOARD + userInfo.userId)}
                        >
                            <img
                                src={userInfo.profileImage.length ? userInfo.profileImage : "../images/default-avatar-image.jpg"}
                                className="h-9 w-9 rounded-full object-cover"
                            />
                            <p className="font-medium text-[14px] tracking-wide whitespace-nowrap">{userInfo.username}</p>
                        </button> :
                        <UserLoader
                            imageStyles={{ width: 36, height: 36, borderRadius: "50%" }}
                            firstTextStyles={{ width: 100, height: 7, borderRadius: "10px" }}
                            secondTextStyles={{ width: 80, height: 7, borderRadius: "10px" }}
                            margin="my-1"
                        />
                }
                {
                    loggedUser.userId !== userInfo.userId && userInfo.userId.length ?
                        <div className="flex gap-1">
                            <p>•</p>
                            {
                                loggedUser.following.some(data => data.userId === userInfo.userId) ?
                                    <button
                                        className="rounded text-gray-800 text-sm font-medium cursor-pointer"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            setIsUnfollowModalOpen(true);
                                        }}
                                    >
                                        Following
                                    </button> :
                                    <button
                                        className="font-medium text-cyan-500 rounded cursor-pointer text-sm tracking-wide"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            addToFollowing();
                                        }}
                                    >
                                        Follow
                                    </button>
                            }
                        </div> :
                        null
                }
            </div>
            {
                isUnfollowModalOpen ?
                    <Modal
                        closeEvent={() => setIsUnfollowModalOpen(false)}
                        styles="h-72 top-[26.5%]"
                    >
                        <AreYouSureModal
                            areYouSureEvent={() => {
                                setIsUnfollowModalOpen(false)
                                removeFromFollowing()
                            }}
                            profileImage={userInfo.profileImage}
                            closeEvent={() => setIsUnfollowModalOpen(false)}
                            questionText={`Unfollow @${userInfo.username}`}
                            buttonText="Unfollow"
                        />
                    </Modal> :
                    null
            }
        </>
    )
}

export default UserHeader