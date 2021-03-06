import React, { useMemo } from 'react'
import MessageType from 'types/messageType'
import ImageMessage from './ImageMessage';
import PostMessage from './PostMessage';
import TextMessage from './TextMessage';

export interface IMessageProps extends MessageType {
    profileImage: string,
}

type RoomMessagesProps = {
    messages: MessageType[],
    profileImage: string,
}

const RoomMessages: React.FC<RoomMessagesProps> = React.memo(({ messages, profileImage }) => {
    const messagesToRender = useMemo(() => messages.map(message => {
        if (!message.media && !message.post) {
            return (
                <TextMessage 
                    {...message}
                    profileImage={profileImage}
                    key={message.createdAt}
                />
            )
        }

        if(message.post){
            return (
                <PostMessage 
                    {...message}
                    profileImage={profileImage}
                    key={message.createdAt}
                />
            )
        }
        
        if (message.media) {
            return (
                <ImageMessage 
                    {...message}
                    profileImage={profileImage}
                    key={message.createdAt}
                />
            )
        }
    }), [messages])

    return (
        <div className="max-h-[calc(100%-45px-18px)] overflow-hidden overflow-y-auto w-full no-bar flex flex-col items-center">
            {messagesToRender}
        </div>
    )
})

export default RoomMessages