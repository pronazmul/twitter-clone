import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import './TweetBox.css'

const TweetBox = () => {
    return (
        <div className='tweet-box'>
            <form>
                <div className='tweetbox-input'>
                    <Avatar src='https://i.ibb.co/3v4qVhN/pro-nazmul.jpg' />
                    <input type='text' placeholder="What's happening?" />
                </div>
                <input className="tweetBox-imageInput" type='text' placeholder='Input Image URL'/>
                <Button className='tweetBox-tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox