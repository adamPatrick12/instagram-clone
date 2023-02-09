import {
    PageContainer,
    UserFeedContainer,
    UserContainer,
    UserPostCard,
    UserInfoCardContainer,
    UserProfileContainer,
    UserNameContainer,
    DisplayName,
    UserName,
    UserFollowingContainer,
    ProfileNumberContainer,
    TextDescription,
    AddIcon
} from '../Styles/UserFeedPage/UserFeedStyles';

import { useNavigate } from "react-router";

import {
    authenticationAtom,
    userNameAtom,
    displayNameAtom,
    profilePictureAtom
} from "../Atoms/AuthenticationAtom";

import { useRecoilValue } from 'recoil';



export const UserFeed = () => {

    const userName = useRecoilValue(userNameAtom);
    const displayName = useRecoilValue(displayNameAtom);
    const profilePicture = useRecoilValue(profilePictureAtom);
    const navigate = useNavigate();


    return (
        <PageContainer>
            <UserFeedContainer>
                <UserPostCard />
                <UserPostCard />
                <UserPostCard />
                <UserPostCard />
            </UserFeedContainer>
            <UserContainer>
                <UserInfoCardContainer>
                    <UserProfileContainer>
                        <img src={profilePicture} alt="" />
                        <UserNameContainer>
                            <DisplayName>{displayName}</DisplayName>
                            <UserName>@{userName}</UserName>
                        </UserNameContainer>
                    </UserProfileContainer>
                    <UserFollowingContainer>
                        <ProfileNumberContainer>
                            <p>
                                0
                            </p>
                            <TextDescription>
                                Following
                            </TextDescription>
                        </ProfileNumberContainer>
                        <ProfileNumberContainer>
                            <p>
                                0
                            </p>
                            <TextDescription>
                                Following
                            </TextDescription>
                        </ProfileNumberContainer>
                        <ProfileNumberContainer>
                            <p>
                                0
                            </p>
                            <TextDescription>
                                Posts
                            </TextDescription>
                        </ProfileNumberContainer>
                        <ProfileNumberContainer>
                            <AddIcon />
                            <TextDescription onClick={() => { navigate("/new-post"); }}>
                                New Post
                            </TextDescription>
                        </ProfileNumberContainer>
                    </UserFollowingContainer>
                </UserInfoCardContainer>
            </UserContainer>
        </PageContainer>
    );
};

export default UserFeed;