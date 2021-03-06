import React, { useCallback, useState } from 'react'
import usePostLikes from 'helpers/hooks/usePostLikes'
import Comment from 'svgs/empty/Comment'
import Direct from 'svgs/empty/Direct'
import FilledHeart from 'svgs/filled/FilledHeart'
import Heart from 'svgs/empty/Heart'
import PostType from 'types/postType'
import { motion } from "framer-motion"
import Saved from 'svgs/empty/Saved'
import { useAppDispatch, useAppSelector } from 'redux-setup/hooks'
import FilledSaved from 'svgs/filled/FilledSaved'
import Modal from 'components/modal/Modal'
import UsersListModal from 'pages/profile/components/users-list/UsersListModal'
import SharePostModal from '../modal/SharePostModal'
import addToSaved from "redux-setup/features/signed-user/thunks/addToSaved";
import removeFromSaved from "redux-setup/features/signed-user/thunks/removeFromSaved";

type LikesBarProps = {
    commentsRef: any,
    currentPost: PostType
    changePostsAdd: any,
    changePostsRemove: any,
}

const LikesBar: React.FC<LikesBarProps> = React.memo(({ 
    commentsRef, 
    currentPost,
    changePostsAdd, 
    changePostsRemove
}) => {
    const loggedUser = useAppSelector(state => state.signedUser.user);
    const dispatch = useAppDispatch();

    const { addLike, removeLike } = usePostLikes({ 
        userId: currentPost.fromId,
        postId: currentPost.postId,
        changePostsAdd: changePostsAdd,
        changePostsRemove: changePostsRemove
    });

    const [isListModalOpen, setIsListModalOpen] = useState<boolean>(false);
    const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);

    const handleLikesAmount = useCallback(() => {
        const likesAmount = currentPost.likes.length
        return `${likesAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} like${likesAmount === 1 ? "" : "s"}`
    }, [currentPost.likes.length])

    const focusInput = useCallback(() => {
        commentsRef.current.focus()
    }, [commentsRef.current])

    const openShareModal = useCallback(() => {
        setIsShareModalOpen(true)
    }, [])

    const openListModal = useCallback(() => {
        setIsListModalOpen(true)
    }, [])

    const closeShareModal = useCallback(() => {
        setIsShareModalOpen(false)
    }, [])

    const closeListModal = useCallback(() => {
        setIsListModalOpen(false)
    }, [])

    const removeSaved = useCallback(() => {
        dispatch(removeFromSaved({ userId: currentPost.fromId, postId: currentPost.postId }))
    }, [currentPost.fromId, currentPost.postId])

    const addSaved = useCallback(() => {
        dispatch(addToSaved({ userId: currentPost.fromId, postId: currentPost.postId }))
    }, [currentPost.fromId, currentPost.postId])

    return (
        <>
            <div className="flex flex-col px-4 pt-2 border-t">
                <div className="flex w-full justify-between">
                    <div className="flex items-center gap-3 ml-[-8px]">
                        {
                            currentPost.likes.some(obj => obj.userId === loggedUser.userId) ?
                                <div className="flex items-center justify-center h-[40px] w-[40px] mr-[-12px]">
                                    <div
                                        className="h-[28px] w-[28px] cursor-pointer"
                                        onClick={removeLike}
                                    >
                                        <FilledHeart
                                            styles="h-full w-full text-red-500"
                                        />
                                    </div>
                                </div> :
                                <div className="flex items-center justify-center h-[40px] w-[40px] mr-[-12px]">
                                    <motion.div
                                        onClick={addLike}
                                        className="h-[28px] w-[28px] cursor-pointer"
                                        whileTap={{
                                            width: "40px",
                                            height: "40px",
                                            transition: { repeat: 1, repeatType: "reverse", duration: 0.16 },
                                        }}
                                    >
                                        <Heart
                                            styles="h-full w-full"
                                            includeHovering={true}
                                        />
                                    </motion.div>
                                </div>
                        }
                        <button onClick={focusInput}>
                            <Comment
                                styles="h-[28px] w-[28px]"
                                includeHovering={true}
                            />
                        </button>
                        <button
                            className="pb-1 mr-[-3px]"
                            onClick={openShareModal}
                        >
                            <Direct
                                styles="h-[23px] w-[23px] rotate-[55deg]"
                                includeHovering={true}
                            />
                        </button>
                    </div>
                    {
                        loggedUser.savedPosts.some(post => post.postId === currentPost.postId) ?
                            <button onClick={removeSaved}>
                                <FilledSaved
                                    styles="h-[25px] w-[25px]"
                                />
                            </button> :
                            <button onClick={addSaved}>
                                <Saved
                                    styles="h-[25px] w-[25px]"
                                    includeHovering={true}
                                />
                            </button>
                    }
                </div>
                <button
                    onClick={openListModal}
                    className="flex flex-start"
                >
                    <p className="font-medium text-sm tracking-wide whitespace-nowrap">
                        {handleLikesAmount()}
                    </p>
                </button>
            </div>
            {
                isListModalOpen ?
                    <Modal
                        closeEvent={closeListModal}
                        styles="h-96 top-[20%]"
                    >
                        <UsersListModal
                            descriptionLine="Likes"
                            usersList={currentPost.likes}
                            closeEvent={closeListModal}
                        />
                    </Modal> :
                    null
            }
            {
                isShareModalOpen ?
                    <Modal
                        closeEvent={closeShareModal}
                        styles="h-[450px] top-[20%]"
                    >
                        <SharePostModal
                            closeEvent={closeShareModal}
                            currentPost={currentPost}
                        />
                    </Modal> :
                    null
            }
        </>
    )
})

export default LikesBar