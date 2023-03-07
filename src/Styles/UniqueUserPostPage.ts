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
  height: 125px;
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
  border-top: 1px solid #888;
  margin: 1em 1.25em;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const PostSideBarBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 7em;
  padding: 0 1.25em;
`;

export const Caption = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  word-break: normal;
  color: #888;
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 10%;
  width: 100%;
  word-break: break-all;
`;

export const UserProfilePic = styled.div`
  img {
    width: 30px;
    height: 30px;
    opacity: 1;
    border-radius: 50%;
    object-fit: cover;
    object-position: center center;
    cursor: pointer;
    margin-right: 7px;
  }
`;

export const UserComment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 14px 0;

  h5 {
    padding-right: 7px;
    font-size: 13.5px;
  }

  span {
    font-size: 13.5px;
    text-align: left;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 4px;
  width: 100%;
`;

export const PostedDate = styled.div`
  color: #888;
  font-size: 13.5px;
  padding-right: 4px;
  padding-left: 10px;
  white-space: nowrap;
  overflow: hidden;
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const LikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
`;

export const Likes = styled.div`
  cursor: pointer;
  margin: 0.5rem 0 0;
  font-weight: 700;
  font-size: 0.85rem;
  text-align: left;
`;

export const CommentInputTextContianer = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #888;
`;
