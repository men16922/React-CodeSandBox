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

const Question = () => {
  return (
    <ContentDiv>
      <ContentH2>Question</ContentH2>
      <p>질문질문</p>
    </ContentDiv>
  );
};

export default Question;
