import {
    UserPostCardContainer, UserPostHeader,
    UserInfoContainer, UserNameContainer,
    DisplayName, MenuDots, UserPostFooter,
    PostIconContainer, InteractIcons,
    LikeButton, CommentButton,
    DownloadButton, LinkButton,
    CommnetStatus, CommentSection,
    Likes
} from "../Styles/UserFeedPage/UserPostStyles";

import { UserName } from "../Styles/UserFeedPage/UserFeedStyles";

const UserPost = ({ ImageURl }: any) => {
    return (
        <UserPostCardContainer>
            <UserPostHeader>
                <UserInfoContainer>
                    <img src={'https://lh3.googleusercontent.com/a/AEdFTp6X9mS97AJ2nd8y-9xudoDY8vBCQo_idmJC8W8D=s96-c'} />
                    <UserNameContainer>
                        <DisplayName>Adam Patrick</DisplayName>
                        <UserName>@adampat</UserName>
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
            </UserPostFooter>
        </UserPostCardContainer>
    );
};

export default UserPost;