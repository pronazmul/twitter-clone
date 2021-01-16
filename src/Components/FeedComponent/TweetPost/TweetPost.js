import { Avatar } from '@material-ui/core'
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@material-ui/icons'
import React from 'react'
import './TweetPost.css'

const TweetPost = ({ displayName, userName, VarifiedId, text, image, avatar }) => {
    return (
        <div className='post'>
            <div className='post-avatar'>
                <Avatar src={avatar} />
            </div>

            <div className='post-body'>
                <div className='post-header'>
                    <div className='post-headerText'>
                        <h3>{displayName}
                            {VarifiedId && <VerifiedUser className='verified-userBadge' />}
                            <span className='light-text'>@{userName}</span>
                        </h3>
                    </div>
                    <div className='post-headerDescription'>
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt='' />
                
                <div className='post-footer'>
                    <ChatBubbleOutline fontSize='small' />
                    <Repeat fontSize='small' />
                    <FavoriteBorder fontSize='small' />
                    <Publish fontSize='small' />
                </div>
            </div>
        </div>
    )
}

export default TweetPost