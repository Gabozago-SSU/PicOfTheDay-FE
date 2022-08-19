import React, { useId } from 'react'
import styled from 'styled-components';
import colors from 'styles/colors';
import { useState } from 'react';
import { useEffect } from 'react';
import { requestOtherUserpage } from '../../apis/index';
import { useLocation } from 'react-router-dom';


export const StyleBox = styled.div`
    width: 100%;
    padding-top: 100%;
    background-size: cover;
    background-color: ${colors.black_60};
    background-image: url(${(props) => props.reviewImage});
`;
export const PostlistBox = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    justify-content: center;
    margin: 0 auto;
    margin-top: 210px;
`;

function ProfilePost({reviews}) {

  const [otherUserPost, setOtherUserPost] = useState(reviews);
  
  useEffect(() => {
   console.log(reviews)
  },[])

  return (
    <>
      <PostlistBox>
            {reviews.map((i, index)=>{
                return<StyleBox key={index} reviewImage={i.reviewImage} >
                {/* <img src={i.reviewImage} alt="photo"/> */}
                </StyleBox>
            })
         
            }
      </PostlistBox>
    </>
  )
}

export default ProfilePost