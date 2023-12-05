import React from 'react'
import styled from 'styled-components';

const Policy = () => {
  return (
    <>
    <Wrapper>
     <div className='policy-img'></div>
     </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
.policy-img{
    width:100vw;
    height:80vh;
    background-image:url(policyimg.jpg);
    background-size:cover;
    display:flex;
   align-items:center;
   justify-content:center;
  }
`;
export default Policy
