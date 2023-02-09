import styled from "styled-components";
import { AddCircle } from "@styled-icons/fluentui-system-regular/AddCircle";

export const PageContainer = styled.div`
  margin: 40px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const UserFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserContainer = styled.div`
  width: 30%;
  border: 1px solid red;
  display: flex;
  justify-content: center;
`;

export const UserPostCard = styled.div`
  width: 560px;
  height: 750px;
  border: 1px solid black;
  margin: 0 0 30px 0;
`;

export const UserInfoCardContainer = styled.div`
  position: fixed;
  top: 15%;
`;

export const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 0 0 16px 10px rgb(0 0 0 / 10%);
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
