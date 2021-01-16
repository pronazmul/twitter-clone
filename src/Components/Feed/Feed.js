import React, { useEffect, useState } from 'react'
import TweetBox from '../FeedComponent/TweetBox/TweetBox'
import TweetPost from '../FeedComponent/TweetPost/TweetPost'
import firebaseApp from '../Firebase/firebaseConfig'
import './Feed.css'

const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
            const data = firebaseApp.database().ref("posts")
            data.on("value", (snapshot)=>{
                setPosts(snapshot.val()) 
            })

    },[])
    
    return (
        <div className='feed'>
            {/* Header */}
            <div className='feed-header'>
                <h2>Home</h2>
            </div>

            {/* Tweet Box */}
            <TweetBox />

            {/* ({ displayName, userName, VarifiedId, text, image, avatar }) */}

            {/* Post */}
            <TweetPost
                displayName={posts.displayName}
                userName={posts.userName}
                varifiedId={posts.varifiedId}
                text={posts.text}
                image={posts.image}
                avatar={posts.avatar}
            />

        </div>
    )
}

export default Feed