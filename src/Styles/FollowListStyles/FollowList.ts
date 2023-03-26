import styled from "styled-components";
import { Close } from "@styled-icons/evil/Close";

export const PageContainer = styled.div`
  display: flex;
  position: fixed;
  left: 0%;
  height: 101vh;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  z-index: 1000;
  justify-content: center;
  align-items: center;
`;

export const FollowerContainer = styled.div`
  width: 740px;
  height: 590px;
  background-color: white;
  max-height: 90%;
  max-width: 90vw;
  border-radius: 16px;
  box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FollowViewHeaderContainer = styled.div`
  width: 93%;
  justify-self: center;
  height: 10%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  justify-content: space-between;
`;

export const CloseModelIcon = styled(Close)`
  height: 22px;
  width: 22px;
  cursor: pointer;
`;

export const FollowTitles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid black;
  height: 100%;

  h3 {
    cursor: pointer;
    padding: 10px;
  }
`;

export const FollowListContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 86%;
  padding: 20px 25px;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;

  img {
    position: relative;
    width: 70px;
    height: 70px;
    opacity: 1;
    border-radius: 100%;
    object-fit: cover;
    object-position: center center;
    cursor: pointer;
    transition: opacity 0.7s ease 0s;
    box-shadow: none;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 0 0 22px;

  span {
    font-size: 20px;
    font-weight: 700;
  }

  h6 {
    font-size: 15px;
    font-weight: 700;
    color: #888888;
  }
`;

export const FollowButton = styled.div`
  border: 1px solid #888;
  color: #888;
  height: 43px;
  font-size: 16px;
  width: 25%;
  border-radius: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  transition: box-shadow 0.25s, -webkit-transform 0.25s;
  transition: box-shadow 0.25s, transform 0.25s;
  transition: box-shadow 0.25s, transform 0.25s, -webkit-transform;

  &:hover {
    color: white;
    background-color: black;
    box-shadow: 0 5px 20px 1px rgba(0, 0, 0, 0.25);
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
`;
