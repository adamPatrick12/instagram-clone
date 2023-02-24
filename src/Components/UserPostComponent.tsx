import {
    UserPostCardContainer, UserPostHeader,
    UserInfoContainer, UserNameContainer,
    DisplayName, MenuDots, UserPostFooter,
    PostIconContainer, InteractIcons,
    LikeButton, CommentButton,
    DownloadButton, LinkButton,
    CommnetStatus, CommentSection,
    Likes, CommentInputContianer,
    CommentInputBox, SubmitCommentButton
} from "../Styles/UserFeedPage/UserPostStyles";

import { UserName } from "../Styles/UserFeedPage/UserFeedStyles";

const UserPost = ({ ImageURl, userName, displayName, profilePicture }: any) => {


    return (
        <UserPostCardContainer>
            <UserPostHeader>
                <UserInfoContainer>
                    <img src={profilePicture} />
                    <UserNameContainer>
                        <DisplayName>{displayName}</DisplayName>
                        <UserName>@{userName}</UserName>
                    </UserNameContainer>
                </UserInfoContainer>
                <MenuDots />
            </UserPostHeader >
            <img src={ImageURl} alt="" />
            <UserPostFooter>
                <PostIconContainer>
                    <InteractIcons>
                        <LikeButton />
                        <CommentButton />
                        <DownloadButton />
                    </InteractIcons>
                    <LinkButton />
                </PostIconContainer>
                <Likes>1 Like</Likes>
                <CommnetStatus>No Comments</CommnetStatus>
                <CommentSection></CommentSection>
                <CommentInputContianer>
                    <CommentInputBox placeholder="Add Comment..."></CommentInputBox>
                    <SubmitCommentButton />
                </CommentInputContianer>
            </UserPostFooter>
        </UserPostCardContainer>
    );
};

export default UserPost;