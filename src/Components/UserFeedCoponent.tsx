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
    AddIcon, LoginBtn,
    PageContainer, ButtonContainer, SignUpBtn,
    ProfileNewPostContainer, LoadingContainer
} from '../Styles/UserFeedPage/UserFeedStyles';

import UserPost from './UserPostComponent';

import { useNavigate } from "react-router";

import NavBar from './Navbar';
import FollowListComponent from "./FollowViewComponent";

import {
    userNameAtom,
    displayNameAtom,
    profilePictureAtom,
    emailAtom,
    TakenEmailsAtom,
    authenticationAtom,
    UserObjectIDAtom
} from "../Atoms/AuthenticationAtom";

import { FollowListDisplayAtom, FollowListDisplayTab, CurrentUserFollowerListAtom, CurrentUserFollowingListAtom } from '../Atoms/UserProfileAtoms';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { checkAuth } from '../Hooks/useCheckAuth';
import { UserPostsCount, UserFollowingCount, UserFollowerCount } from '../Atoms/UserProfileAtoms';
import { HomePageIconAtom, ProfilePageIconAtom } from '../Atoms/Navbar';
import { UpdateCommentSectionAtom } from '../Atoms/UserPostAtoms';
import { auth, provider } from "../Firebase/FirebaseConfig";
import { Authentication } from '../api/postUser';
import { signInWithPopup, } from "firebase/auth";
import { activeEmails } from '../Hooks/useActiveUsernames';
import { DisplaySearchResultsAtom } from "../Atoms/Navbar";
import { Space, Spin } from 'antd';

export const UserFeed = () => {

    checkAuth();


    const [postData, setPostData] = useState([]);
    const userName = useRecoilValue(userNameAtom);
    const displayName = useRecoilValue(displayNameAtom);
    const profilePicture = useRecoilValue(profilePictureAtom);
    const navigate = useNavigate();
    const numberOfPosts = useRecoilValue(UserPostsCount);
    const setHomePageIcon = useSetRecoilState(HomePageIconAtom);
    const [followListModual, setFollowListModual] = useRecoilState(FollowListDisplayAtom);
    const updateComments = useRecoilValue(UpdateCommentSectionAtom);
    const setProfilePageIcon = useSetRecoilState(ProfilePageIconAtom);
    const followerCount = useRecoilValue(UserFollowerCount);
    const followingCount = useRecoilValue(UserFollowingCount);
    const [DisplayTabValue, setFollowListDisplayTab] = useRecoilState(FollowListDisplayTab);
    const currentUserFollowingList = useRecoilValue(CurrentUserFollowingListAtom);
    const currentUserFollowerList = useRecoilValue(CurrentUserFollowerListAtom);
    const [isUserSignedIn, setUserStatus] = useState(false);
    const setdisplayName = useSetRecoilState(displayNameAtom);
    const setProfilePicture = useSetRecoilState(profilePictureAtom);
    const setEmail = useSetRecoilState(emailAtom);
    const [takenEmails, setEmails] = useRecoilState(TakenEmailsAtom);
    const setShowSearchResults = useSetRecoilState(DisplaySearchResultsAtom);
    const isUserSignIn = useRecoilValue(authenticationAtom);
    const [postsAreLoading, setLoadingPostState] = useState<boolean>();
    const currentUserID = useRecoilValue(UserObjectIDAtom);
    const currentUser = auth.currentUser;




    const fetchUserFeed = async () => {
        setLoadingPostState(true);

        await fetch("https://instagram-clone-backend-pi.vercel.app/instagram-clone/user-feed")
            .then((response) => response.json())
            .then(((data) => setPostData(data)
            ));

        setLoadingPostState(false);
    };

    const fetchUniqueUserFeed = async () => {
        if (currentUserID) {
            await fetch(`https://instagram-clone-backend-pi.vercel.app/instagram-clone/following-user-feed/${currentUserID}`)
                .then((response) => response.json())
                .then(((data) => setPostData(data)
                ));
        }
    };

    const handleFeedFetching = async () => {
        const isUserLoggedIn = await auth.currentUser;
        if (isUserLoggedIn) {
            fetchUniqueUserFeed();
        } else {
            fetchUserFeed();
        }
    };


    useEffect(() => {
        handleFeedFetching();
        setHomePageIcon(true);
        setProfilePageIcon(false);
        activeEmails()
            .then(result => setEmails(result));

        if (currentUser) {
            setUserStatus(true);
        } else {
            setUserStatus(false);
        }


    }, [updateComments, isUserSignIn, currentUser, currentUserID]);


    const signInWithGoogle = async () => {
        signInWithPopup(auth, provider)
            .then((result) => {

                if (takenEmails.includes(result.user.email)) {
                    navigate("/");
                    return;
                } else {
                    const userData = {
                        userID: result.user.uid,
                        userName: userName,
                        displayName: result.user.displayName,
                        email: result.user.email,
                        profilePicture: result.user.photoURL,
                    };

                    Authentication(userData);

                    navigate("/");

                    setProfilePicture(result.user.photoURL);
                    setdisplayName(result.user.displayName);
                    setEmail(result.user.email);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (

        <PageContainer
            onMouseEnter={() => {
                setHomePageIcon(true);
            }}>
            <NavBar />

            {followListModual && <FollowListComponent followingList={currentUserFollowingList} followerList={currentUserFollowerList} />}


            <FeedDataContainer onClick={() => setShowSearchResults(false)}>
                <div className='UserPostContainer'>

                    {postData.map((data) => {
                        return (
                            <UserPost key={data['date']}
                                ImageURl={data['imageKey']}
                                userName={data['user']['userName']}
                                userID={data['user']['_id']}
                                displayName={data['user']['displayName']}
                                profilePicture={data['user']['profilePicture']}
                                comments={data['comments']}
                                likes={data['likes']}
                                imageID={data['_id']
                                }
                            />
                        );
                    })}
                </div>
                {isUserSignedIn ? <UserContainer>
                    <UserInfoCardContainer>
                        <UserProfileContainer onClick={() => navigate(`/user-profile/${currentUserID}`)}>
                            <img src={profilePicture} alt="" />
                            <UserNameContainer>
                                <DisplayName>{displayName}</DisplayName>
                                <UserName>@{userName}</UserName>
                            </UserNameContainer>

                        </UserProfileContainer>
                        <UserFollowingContainer>
                            <ProfileNumberContainer onClick={() => {
                                setFollowListModual(true),
                                    setFollowListDisplayTab('following');
                            }}>
                                <p>
                                    {followingCount}
                                </p>
                                <TextDescription>
                                    Following
                                </TextDescription>
                            </ProfileNumberContainer>
                            <ProfileNumberContainer onClick={() => {
                                setFollowListModual(true),
                                    setFollowListDisplayTab('follower');
                            }}>
                                <p >
                                    {followerCount}
                                </p>
                                <TextDescription>
                                    Followers
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
                            <ProfileNewPostContainer onClick={() => { navigate("/new-post"); }}>
                                <AddIcon />
                                <TextDescription >
                                    New Post
                                </TextDescription>
                            </ProfileNewPostContainer>
                        </UserFollowingContainer>
                    </UserInfoCardContainer>
                </UserContainer> :
                    <UserContainer>
                        {postsAreLoading && <LoadingContainer>
                            <Space direction="vertical" style={{ width: "100%" }}>
                                <Spin tip="Loading" size="large">
                                    <div className="content" />
                                </Spin>
                            </Space>
                        </LoadingContainer>}
                        <UserInfoCardContainer>
                            <ButtonContainer>
                                <SignUpBtn onClick={() => { navigate("/sign-up"); }}>Sign Up</SignUpBtn>
                                <LoginBtn onClick={() => signInWithGoogle()}>Login</LoginBtn>
                            </ButtonContainer>
                        </UserInfoCardContainer>
                    </UserContainer>
                }
            </FeedDataContainer>


        </PageContainer >

    );
};

export default UserFeed;