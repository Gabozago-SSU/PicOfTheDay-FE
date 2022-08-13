import React from 'react'
import styled from 'styled-components';
import colors from 'styles/colors';

export const feedArray1 = [
  {
    reviewid : 1,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    reviewid : 2,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    reviewid : 3,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    reviewid : 4,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    reviewid : 5,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    reviewid : 6,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    reviewid : 7,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    reviewid : 8,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    reviewid : 9,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    reviewid : 10,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    reviewid : 11,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    reviewid : 12,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    reviewid : 13,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    reviewid : 14,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    reviewid : 15,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    reviewid : 16,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    reviewid : 17,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    reviewid : 18,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    reviewid : 19,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    reviewid : 20,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
]

export const StyleBox = styled.div`
  width: 130px;
  height: 130px;
  background-color: ${colors.black_30};
`;

export const PostlistBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 130px);
  gap: 1px;
  justify-content: center;
  margin: 0 auto;
`;

function BestFeedPost() {
  return (
    <>
      <PostlistBox>
            {feedArray1.map(({reviewid, image})=>
              <StyleBox key={reviewid} image={image}>
                  <img src={image} alt="photo"/>

              </StyleBox>
            )}
      </PostlistBox>
    </>
  )
}

export default BestFeedPost
