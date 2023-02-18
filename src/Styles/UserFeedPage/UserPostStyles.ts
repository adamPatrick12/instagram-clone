import styled from "styled-components";
import { DotsHorizontalRounded } from "styled-icons/boxicons-regular";
import { Heart } from "styled-icons/boxicons-regular";
import { Comment } from "@styled-icons/boxicons-regular/Comment";
import { Download } from "@styled-icons/boxicons-regular/Download";
import { LinkAlt } from "styled-icons/boxicons-regular";

export const UserPostCardContainer = styled.div`
  width: 560px;
  height: 750px;
  margin: 0 0 30px 0;
  border-radius: 16px;

  img {
    width: 562px;
    height: 500px;
    margin-bottom: -5px;
    margin-bottom: -4px;
  }

  @media (max-width: 855px) {
    img {
      width: 342px;
      height: 340px;
      margin-bottom: -5px;
    }

    width: 340px;
    height: 340px;
    margin: 0 0 300px 0;
  }
`;

export const UserPostHeader = styled.div`
  width: 100%;
  height: 56px;
  border: 1px solid red;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px;

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    box-shadow: 0 0 16px 10px rgb(0 0 0 / 10%);
    align-self: center;
  }
`;

export const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Helvetica, sans-serif;
  margin-left: 10px;
`;

export const DisplayName = styled.div`
  font-weight: 700;
  font-size: 0.9em;
`;

export const ProfilePicture = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  box-shadow: 0 0 16px 10px rgb(0 0 0 / 10%);
`;

export const MenuDots = styled(DotsHorizontalRounded)`
  width: 1.5em;
  height: 1.5em;
  align-self: center;
  padding: 18px;
`;

export const UserPostFooter = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid red;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  display: flex;
  flex-direction: column;
`;

export const PostIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 1.25em;
  justify-content: space-between;
`;

export const InteractIcons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LikeButton = styled(Heart)`
  width: 1.8em;
  height: 1.8em;
  margin: 0 7px 0 0;
`;

export const CommentButton = styled(Comment)`
  width: 1.7em;
  height: 1.7em;
  margin: 0 7px 0 0;
  padding-top: 1.5px;
`;

export const DownloadButton = styled(Download)`
  width: 1.8em;
  height: 1.8em;
  margin: 0 7px 0 0;
  font-weight: 100;
`;

export const LinkButton = styled(LinkAlt)`
  width: 1.8em;
  height: 1.8em;
  margin: 0 7px 0 0;
  font-weight: 100;
`;

export const Likes = styled.div`
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0px 1.9em;
`;

export const CommnetStatus = styled.div`
  font-size: 0.85rem;
  padding: 10px 1.9em;
  color: #686868;
`;

export const CommentSection = styled.div`
  height: 48px;
  width: 90%;
  margin: 2px 1.25em;
  border: 1px solid black;
`;
