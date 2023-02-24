import styled from "styled-components";
import { AddCircle } from "@styled-icons/fluentui-system-regular/AddCircle";

export const PageContainer = styled.div`
  margin: 40px 0 0 0;
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
`;

export const ProfileNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    height: 14px;
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
