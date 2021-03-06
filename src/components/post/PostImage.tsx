import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProfileRoutes from 'constants/profile-routes';
import FilledComment from 'svgs/filled/FilledComment';
import FilledHeart from 'svgs/filled/FilledHeart';
import PostType from 'types/postType'

const PostImage: React.FC<PostType> = React.memo(({ postImage, postId, likes, comments, }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const navigate = useNavigate();

    const makeHoveredTrue = useCallback(() => {
        setIsHovered(true)
    }, [])

    const makeHoveredFalse = useCallback(() => {
        setIsHovered(false)
    }, [])

    const navigateToPost = useCallback(() => {
        navigate(ProfileRoutes.POST + postId)
    }, [postId])

    return (
        <div 
            className="relative z-10 w-full h-full aspect-square cursor-pointer rounded-sm"
            onMouseEnter={makeHoveredTrue}
            onMouseLeave={makeHoveredFalse}
            onClick={navigateToPost}
        >
            <img
                src={postImage}
                className={`w-full h-full object-cover rounded-sm ${isHovered && "brightness-75"}`}
            />
            {
                isHovered ?
                    <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex gap-4">
                        <div className="flex gap-1 items-center">
                            <FilledHeart styles="h-6 w-6 text-white" />
                            <p className="text-lg font-medium text-white">{likes.length}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <FilledComment styles="h-6 w-6 text-white" />
                            <p className="text-lg font-medium text-white">{comments.length}</p>
                        </div>
                    </div> :
                    null
            }
        </div>
    )
})

export default PostImage