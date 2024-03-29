import styled from "styled-components";
import { Heart } from "styled-icons/boxicons-regular";
import { Comment } from "@styled-icons/boxicons-regular/Comment";
import { Plus } from "@styled-icons/heroicons-solid/Plus";

interface img {
  img?: string;
}

export const UserProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileHeaderImage = styled.div<img>`
  width: 100vw;
  background-size: 200%;
  height: 320px;

  img {
    object-fit: cover;
    object-position: center center;
    width: inherit;
    height: inherit;
  }
`;

export const ProfileTopSectionContainer = styled.div`
  width: 90%;
  padding: 0 16px;
  position: relative;
  top: -20px;
`;

export const ProfileTopSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;

  img {
    border-radius: 100%;
    width: 200px;
    height: 200px;
    object-fit: cover;
    object-position: center center;

    position: relative;
    top: -75px;
  }
`;

export const ProfileActionButton = styled.button`
  border: none;
  box-shadow: 0 0 20px 1px rgb(0 0 0 / 10%);
  background-color: #fff;
  color: #000;
  padding: 0 32px;
  height: 44px;
  font-size: 17px;
  border-radius: 20px;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: 700;
  transition: box-shadow 0.25s, -webkit-transform 0.25s;
  transition: box-shadow 0.25s, transform 0.25s;
  transition: box-shadow 0.25s, transform 0.25s, -webkit-transform 0.25s;

  &:hover {
    box-shadow: 0 3px 20px 1px rgb(0 0 0 / 20%);
    transform: translateY(-2px);
  }
`;

export const ProfilePlusButton = styled.button`
  border: none;
  box-shadow: 0 0 20px 1px rgb(0 0 0 / 10%);
  background-color: #fff;
  color: #000;
  width: 44px;
  height: 44px;
  font-size: 17px;
  border-radius: 20px;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: 700;
  transition: box-shadow 0.25s, -webkit-transform 0.25s;
  transition: box-shadow 0.25s, transform 0.25s;
  transition: box-shadow 0.25s, transform 0.25s, -webkit-transform 0.25s;
  margin: 0px 10px;
  text-align: center;

  &:hover {
    box-shadow: 0 3px 20px 1px rgb(0 0 0 / 20%);
    transform: translateY(-2px);
  }
`;

export const ProfileInnerContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px;
  display: flex;
  justify-content: center;
`;

export const ProfileUserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 40px;
`;

export const NameContainer = styled.div`
  h2 {
    font-size: 28px;
    margin: 0 0 3px 0;
    font-family: Helvetica, sans-serif;
  }

  h3 {
    font-size: 20px;
    color: #888888;
    font-family: Helvetica, sans-serif;
  }
`;

export const InfoContainerPost = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 0 0 0;
  align-items: flex-end;
  width: 240px;

  p {
    font-size: 16px;
    margin-left: 0.5rem;
    font-weight: 700;
    color: #888888;
  }
`;

export const InfoContainerFollow = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid hsla(0, 0%, 48.6%, 0.2);
  border-bottom: 1px solid hsla(0, 0%, 48.6%, 0.2);
  padding: 16px 0;
  margin: 16px 0;
  justify-content: space-between;
`;

export const InfoContainerFollowing = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  align-items: flex-start;

  p {
    font-size: 16px;
    font-weight: 700;
    color: #888888;
    cursor: pointer;
  }
`;

export const InfoContainerFollowers = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  justify-content: flex-start;
  margin-right: 50px;
  cursor: pointer;

  p {
    font-size: 16px;
    font-weight: 700;
    color: #888888;
  }

  h3 {
    cursor: pointer;
  }
`;

export const UserBioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h3 {
    margin-bottom: 4px;
  }

  p {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const ProfilePhotosContainer = styled.div`
  width: 100%;
  margin: 0 0 24px 24px;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export const ProfilePhotoHoverState = styled.div`
  width: 280px;
  height: 280px;
  background-color: black;
  border-radius: 9px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: inherit;
  justify-content: inherit;
  display: none;
  position: absolute;
`;

export const ProfilePhoto = styled.div<img>`
  display: flex;
  width: 280px;
  height: 280px;
  position: relative;
  border-radius: 9px;
  border: 1px solid black;
  margin: 20px;
  box-sizing: border-box;
  background-size: 150%;
  background-position: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  img {
    width: 279px;
    height: 279px;
    border-radius: 9px;
    object-fit: cover;
    object-position: center center;
  }

  &:hover ${ProfilePhotoHoverState} {
    display: flexbox;
  }
`;

export const LikeHover = styled(Heart)`
  width: 2em;
  height: 2.3em;
  margin: 0 7px 0 0;
  z-index: 1000;
  color: white;
`;

export const CommentHover = styled(Comment)`
  width: 2em;
  height: 2.3em;
  margin: 0 7px 0 0;
  padding-top: 1.5px;
  cursor: pointer;
  color: white;
`;

export const HoverContainers = styled.div`
  p {
    color: white;
    align-self: center;
    font-weight: lighter;
  }

  display: flex;
  flex-direction: row;
  margin: 24px;
`;

export const PlusIcon = styled(Plus)`
  width: 24px;
  height: 24px;
`;
