import styled from "styled-components";
import { User } from "@styled-icons/fa-regular/User";
import { HomeOutlined, HomeFilled } from "@ant-design/icons";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 54px;
  background-color: white;
  position: fixed;
  box-shadow: 0 0 26px 5px rgb(0 0 0 / 9%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InstagramLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 3em;

  img {
    width: 30px;
    height: 30px;
    margin-right: 0.5em;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70px;
  padding: 0 4em;
`;

export const UserIcon = styled(User)`
  width: 24px;
  height: 24px;
`;
