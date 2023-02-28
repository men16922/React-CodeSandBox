import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
  margin: 40px;
`;

const ContentH2 = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

const Review = () => {
  return (
    <ContentDiv>
      <ContentH2>Review</ContentH2>
      <p>리뷰리뷰</p>
    </ContentDiv>
  );
};

export default Review;
