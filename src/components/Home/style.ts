// postStyles.ts
import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 30px auto;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h4`
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
`;
