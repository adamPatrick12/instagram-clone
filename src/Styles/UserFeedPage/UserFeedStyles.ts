import styled from "styled-components";
import { AddCircle } from "@styled-icons/fluentui-system-regular/AddCircle";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FeedDataContainer = styled.div`
  margin: 100px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 855px) {
    flex-direction: column-reverse;
    align-content: center;
    justify-content: end;
    flex-wrap: wrap;
  }
`;

interface InputWrapperProps {
  children?: JSX.Element | JSX.Element[];
}

export const UserFeedContainer = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;
`;

export const UserContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
`;

export const UserInfoCardContainer = styled.div`
  position: fixed;
  top: 15%;
  width: 270px;

  @media (max-width: 855px) {
    position: relative;
  }
`;

export const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 0 0 16px 10px rgb(0 0 0 / 10%);
    align-self: flex-start;
  }
`;

export const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 0 20px;
`;

export const DisplayName = styled.h2``;

export const UserName = styled.p`
  color: #888888;
  cursor: pointer;
`;

export const UserFollowingContainer = styled.div`
  margin-top: 20px;
  height: 45px;
  box-shadow: 0 5px 20px 1px rgb(0 0 0 / 5%);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  transition: box-shadow 0.5s, background-color 0.5s, color 0.25s,
    transform 0.5s, -webkit-transform 0.5s;

  &:hover {
    background-color: black;
    transform: translateY(-3px);
    box-shadow: 0 5px 20px 1px rgba(0, 0, 0, 0.2);

    p {
      color: white;
    }

    div {
      color: white;
    }
  }
`;

export const ProfileNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  p {
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    height: 14px;
    cursor: pointer;
    transition: color 0.5s;
  }
`;

export const ProfileNewPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  p {
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    height: 14px;
    cursor: pointer;
    transition: color 0.5s;
  }
`;

export const TextDescription = styled.div`
  font-size: 11px;
  color: #888888;
  font-weight: 100;
  padding-top: 4px;
  cursor: pointer;
`;

export const AddIcon = styled(AddCircle)`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpBtn = styled.button`
  background-color: black;
  color: white;
  width: 13em;
  height: 2.25em;
  border: none;
  border-radius: 16px;
  font-weight: 700;
  font-size: 16px;
  margin: 10px;
  transition: box-shadow 0.25s, transform 0.25s, -webkit-transform 0.25s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.2);
    transform: translate(0px, -2px);
  }
`;

export const LoginBtn = styled.button`
  background-color: white;
  color: black;
  width: 13em;
  height: 2.25em;
  border: none;
  border-radius: 16px;
  font-weight: 700;
  font-size: 16px;
  margin: 10px;
  transition: box-shadow 0.25s, transform 0.25s, -webkit-transform 0.25s;
  cursor: pointer;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.2);
    transform: translate(0px, -2px);
  }
`;
