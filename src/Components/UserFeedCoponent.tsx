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
    profilePictureAtom,
} from "../Atoms/AuthenticationAtom";

import { UserFeedAtom } from '../Atoms/UserPostAtoms';

import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';



export const UserFeed = () => {

    const [postData, setPostData] = useState([]);
    const userName = useRecoilValue(userNameAtom);
    const displayName = useRecoilValue(displayNameAtom);
    const profilePicture = useRecoilValue(profilePictureAtom);
    const navigate = useNavigate();


    const fetchUserFeed = async () => {
        await fetch("http://localhost:3030/instagram-clone/user-feed")
            .then((response) => response.json())
            .then(((data) => setPostData(data)
            ));

    };

    const array = [1, 2, 3, 4];

    useEffect(() => {
        fetchUserFeed();
    }, []);

    console.log(postData);


    return (
        <PageContainer>
            <div className='UserPostContainer'>

                {postData.map((data) => {
                    return (
                        <UserPostCard >
                            <img src={data['imageKey']} alt="" />
                        </UserPostCard >
                    );
                })}



            </div>
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
                            <div>
                                <p>
                                    0
                                </p>
                            </div>
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