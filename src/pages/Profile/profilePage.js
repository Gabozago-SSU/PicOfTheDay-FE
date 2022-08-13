import React from 'react'
import BackHeader from 'components/commons/BackHeader';
import ProfilePost from './profilePost';
import { StyledProfileimg, StyledFeedNikname } from './styleProfile';
import FeedProfileImg from './feedProfile';

function ProfilePage() {
  return (
    <>
        <BackHeader title={"프로필"} />
            <StyledProfileimg>
                <FeedProfileImg img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmOQYNXeFqlSq-DIIXj23q2YnEkBpbgIW3w&usqp=CAU"}
                />
                <StyledFeedNikname>멋사멋사</StyledFeedNikname>
            </StyledProfileimg>
        <ProfilePost />
        
    </>
  )
}

export default ProfilePage