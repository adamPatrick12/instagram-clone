
import NavBar from "./Navbar";
import { HomePageIconAtom, ProfilePageIconAtom } from "../Atoms/Navbar";
import { useRecoilCallback, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import {
    UserProfilePageContainer, ProfileHeaderImage,
    ProfileTopSectionContainer, ProfileTopSection,
    ProfileActionButton, ProfileInnerContainer, ProfileUserInfoContainer,
    NameContainer, InfoContainerPost, ProfilePhotosContainer,
    InfoContainerFollowing, InfoContainerFollowers,
    InfoContainerFollow, UserBioContainer, ProfilePhoto,
    ProfilePhotoHoverState, CommentHover, LikeHover,
    HoverContainers
} from "../Styles/UserProfilesStyles/UserProfile";

import { profilePictureAtom } from "../Atoms/AuthenticationAtom";
import { checkAuth } from "../Hooks/useCheckAuth";
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUserProfile } from "../api/fetchUserProfile";
import { UserProfileDataAtom } from "../Atoms/UserProfileAtoms";
import { UserObjectIDAtom } from "../Atoms/AuthenticationAtom";
import { postFollow } from "../api/postFollow";
import { postUnFollow } from "../api/postUnFollow";
import { FollowListDisplayAtom, FollowListDisplayTab } from "../Atoms/UserProfileAtoms";
import FollowListComponent from "./FollowViewComponent";

const UserProfile = () => {

    checkAuth();

    const setHomeIcon = useSetRecoilState(HomePageIconAtom);
    const setProfileIcon = useSetRecoilState(ProfilePageIconAtom);
    const { profileID } = useParams();
    const [profileData, setProfileData] = useRecoilState(UserProfileDataAtom);
    const currentUser = useRecoilValue(UserObjectIDAtom);
    const [followStatus, setFollowStatus] = useState(false);
    const [followDisplayModual, setFollowDisplayModual] = useRecoilState(FollowListDisplayAtom);
    const setFollowListDisplayTab = useSetRecoilState(FollowListDisplayTab);



    const navigate = useNavigate();

    useEffect(() => {
        setHomeIcon(false);
        setProfileIcon(true);
        fetchUserProfile(profileID)
            .then(result => setProfileData(result));
    }, [followStatus]);


    const followInfo = {
        currentUser: currentUser,
        userToUpdate: profileID,
    };

    const timeOut = () => {
        setTimeout(() => {
            if (followStatus) {
                setFollowStatus(false);
            } else {
                setFollowStatus(true);
            }
        }, 1000);
    };


    const ProfileActionButtonFunction = (data: any) => {
        if (profileID === currentUser) {
            return <ProfileActionButton>Edit Profile</ProfileActionButton>;
        }
        if (data.includes(currentUser)) {
            return <ProfileActionButton onClick={() => {
                postUnFollow(followInfo);
                timeOut();
            }}>Unfollow</ProfileActionButton>;
        } else {
            return <ProfileActionButton onClick={() => {
                postFollow(followInfo);
                timeOut();
            }}>Follow</ProfileActionButton>;
        }
    };


    return (
        <UserProfilePageContainer onMouseEnter={() => setProfileIcon(true)}>
            <NavBar />
            {followDisplayModual && <FollowListComponent />}
            {profileData.map((data) => {
                return (
                    <div>
                        <ProfileHeaderImage img={"https://firebasestorage.googleapis.com/v0/b/insta-a107a.appspot.com/o/e9x1NbFsE8VqLAqAKfbpHkH0QS93%2Fbanner?alt=media&token=c17c12e5-0d7d-4602-a97c-9bb56d05a932"}>
                        </ProfileHeaderImage>
                        <ProfileTopSectionContainer>
                            <ProfileTopSection>
                                <img src={data.profilePicture} alt="" />
                                {ProfileActionButtonFunction(data.followers)}
                            </ProfileTopSection>
                        </ProfileTopSectionContainer>
                        <ProfileInnerContainer>
                            <ProfileUserInfoContainer>
                                <NameContainer>
                                    <h2>{data.displayName}</h2>
                                    <h3>@{data.userName}</h3>
                                </NameContainer>
                                <InfoContainerPost>
                                    <h3>{data.posts.length}</h3>
                                    <p>Posts</p>
                                </InfoContainerPost>
                                <InfoContainerFollow>
                                    <InfoContainerFollowing onClick={() => {
                                        setFollowDisplayModual(true);
                                        setFollowListDisplayTab('following');
                                    }}>
                                        <h3>{data.following.length}</h3>
                                        <p>Following</p>
                                    </InfoContainerFollowing >
                                    <InfoContainerFollowers onClick={() => {
                                        setFollowDisplayModual(true);
                                        setFollowListDisplayTab('follower');
                                    }}>
                                        <h3>{data.followers.length}</h3>
                                        <p>Followers</p>
                                    </InfoContainerFollowers>
                                </InfoContainerFollow>
                                <UserBioContainer>
                                    <h3>Bio</h3>
                                    <p>Hi my name is {data.displayName}</p>
                                </UserBioContainer>
                            </ProfileUserInfoContainer>
                            <ProfilePhotosContainer>
                                {data.posts.map((image: any) => {
                                    return (
                                        <ProfilePhoto img={image.imageKey}
                                            onClick={() => navigate(`/user-post/${image._id}`)}                                        >
                                            <ProfilePhotoHoverState>
                                                <HoverContainers>
                                                    <LikeHover />
                                                    <p>{image.likes.length}</p>
                                                </HoverContainers>
                                                <HoverContainers>
                                                    <CommentHover />
                                                    <p>{image.comments.length}</p>
                                                </HoverContainers>
                                            </ProfilePhotoHoverState>

                                        </ProfilePhoto>
                                    );
                                })}
                            </ProfilePhotosContainer>
                        </ProfileInnerContainer>
                    </div>
                );
            })}

        </UserProfilePageContainer>
    );
};

export default UserProfile;