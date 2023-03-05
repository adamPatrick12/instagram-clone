import styled from "styled-components";

export const PageCenterContainer = styled.div`
  position: absolute;
  padding-top: 54px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  text-align: center;
  box-sizing: border-box;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  img {
    width: 35em;
    height: 39.5em;
  }
`;

export const PostSideBarContainer = styled.div`
  width: 400px;
  background-color: white;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 1em;
  overflow: hidden;
`;

export const PostSideBarTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  margin: 0 1.25em;
  padding: 1.2rem 0;
  justify-content: center;
  align-items: center;
  text-align: left;
`;

export const PostSideBarMiddleContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 315px;
  border: 1px solid red;
  margin: 1em 1.25em;
`;
export const PostSideBarBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 7em;
  padding: 0 1.25em;
  border: 1px solid red;
`;
