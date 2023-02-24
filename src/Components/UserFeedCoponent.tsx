import {
    PageContainer,
    UserContainer,
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

import UserPost from './UserPostComponent';

import { useNavigate } from "react-router";

import { auth, provider } from "../Firebase/FirebaseConfig";

import {
    userNameAtom,
    displayNameAtom,
    profilePictureAtom,
} from "../Atoms/AuthenticationAtom";


import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect, useMemo, useState } from 'react';
import { checkAuth } from '../Hooks/useCheckAuth';


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

    useEffect(() => {
        fetchUserFeed();
        console.log('profilePicture');

    }, []);


    checkAuth();



    return (
        <PageContainer>
            <div className='UserPostContainer'>

                {postData.map((data) => {
                    return (
                        <UserPost key={data['date']}
                            ImageURl={data['imageKey']}
                            userName={data['user']['userName']}
                            displayName={data['user']['displayName']}
                            profilePicture={data['user']['profilePicture']}
                        />
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