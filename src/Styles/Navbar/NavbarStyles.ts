import styled from "styled-components";
import { User } from "@styled-icons/fa-regular/User";
import { HomeOutlined, HomeFilled } from "@ant-design/icons";

interface display {
  display: string;
}

export const NavbarContainer = styled.div`
  width: 100%;
  height: 54px;
  background-color: white;
  position: fixed;
  box-shadow: 0 0 26px 5px rgb(0 0 0 / 9%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1000;
`;

export const InstagramLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 3em;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
    margin-right: 0.5em;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  flex-direction: column;
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

export const SearchResultsContainer = styled.div<display>`
  width: 280px;
  background-color: white;
  position: absolute;
  top: 60px;
  height: fit-content;
  max-height: 300px;
  box-shadow: 0 0 26px 5px rgba(0, 0, 0, 0.089);
  backdrop-filter: blur(100px);
  border-radius: 4px;
  display: ${(props) => (props.display === "" ? "none" : "flex")};
  flex-direction: column;
  align-items: flex-start;
  padding: 13px;
`;

export const UserCardSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 8px;
  cursor: pointer;

  img {
    width: 25px;
    height: 25px;
    object-fit: cover;
    border-radius: 100%;
    margin-left: 10px;
    margin-right: 5px;
  }

  h6 {
    font-size: 15.5px;
    font-weight: 700;
    margin-right: 5px;
  }

  h5 {
    font-size: 13.5px;
    font-weight: 100;
    color: #888888;
  }
`;
