import {
    FeedDataContainer,
    UserContainer,
    UserInfoCardContainer,
    UserProfileContainer,
    UserNameContainer,
    DisplayName,
    UserName,
    UserFollowingContainer,
    ProfileNumberContainer,
    TextDescription,
    AddIcon,
    PageContainer
} from '../Styles/UserFeedPage/UserFeedStyles';

import UserPost from './UserPostComponent';

import { useNavigate } from "react-router";

import NavBar from './Navbar';

import {
    userNameAtom,
    displayNameAtom,
    profilePictureAtom,
} from "../Atoms/AuthenticationAtom";


import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect, useMemo, useState } from 'react';
import { checkAuth } from '../Hooks/useCheckAuth';
import { UserPostsCount } from '../Atoms/UserProfileAtoms';
import { HomePageIconAtom, ProfilePageIconAtom } from '../Atoms/Navbar';
import { UpdateCommentSectionAtom } from '../Atoms/UserPostAtoms';

export const UserFeed = () => {

    const [postData, setPostData] = useState([]);
    const userName = useRecoilValue(userNameAtom);
    const displayName = useRecoilValue(displayNameAtom);
    const profilePicture = useRecoilValue(profilePictureAtom);
    const navigate = useNavigate();
    const numberOfPosts = useRecoilValue(UserPostsCount);
    const setHomePageIcon = useSetRecoilState(HomePageIconAtom);
    const [render, setRender] = useState(0);
    const updateComments = useRecoilValue(UpdateCommentSectionAtom);
    const setProfilePageIcon = useSetRecoilState(ProfilePageIconAtom);


    const fetchUserFeed = async () => {
        await fetch("http://localhost:3030/instagram-clone/user-feed")
            .then((response) => response.json())
            .then(((data) => setPostData(data)
            ));
    };

    useEffect(() => {
        fetchUserFeed();
        setHomePageIcon(true);
        setProfilePageIcon(false);

    }, [updateComments]);


    checkAuth();




    return (
        <PageContainer onMouseEnter={() => {
            setHomePageIcon(true);
        }}>
            <NavBar />
            <FeedDataContainer>
                <div className='UserPostContainer'>

                    {postData.map((data) => {
                        return (
                            <UserPost key={data['date']}
                                ImageURl={data['imageKey']}
                                userName={data['user']['userName']}
                                displayName={data['user']['displayName']}
                                profilePicture={data['user']['profilePicture']}
                                comments={data['comments']}
                                imageID={data['_id']
                                }
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
                                <p >
                                    0
                                </p>
                                <TextDescription>
                                    Following
                                </TextDescription>
                            </ProfileNumberContainer>
                            <ProfileNumberContainer>
                                <p>
                                    {numberOfPosts}
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
            </FeedDataContainer>
        </PageContainer >

    );
};

export default UserFeed;