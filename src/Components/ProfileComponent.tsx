
import NavBar from "./Navbar";
import { HomePageIconAtom, ProfilePageIconAtom } from "../Atoms/Navbar";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import {
    UserProfilePageContainer, ProfileHeaderImage,
    ProfileTopSectionContainer, ProfileTopSection,
    FollowButton, ProfileInnerContainer, ProfileUserInfoContainer,
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

const UserProfile = () => {

    checkAuth();

    const setHomeIcon = useSetRecoilState(HomePageIconAtom);
    const setProfileIcon = useSetRecoilState(ProfilePageIconAtom);
    const profilePicture = useRecoilValue(profilePictureAtom);
    const { profileID } = useParams();
    const [profileData, setProfileData] = useRecoilState(UserProfileDataAtom);
    const [hoverState, setHoverState] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setHomeIcon(false);
        setProfileIcon(true);
        fetchUserProfile(profileID)
            .then(result => setProfileData(result));
    }, []);

    console.log(profileData);


    return (
        <UserProfilePageContainer onMouseEnter={() => setProfileIcon(true)}>
            <NavBar />
            {profileData.map((data) => {
                return (
                    <div>
                        <ProfileHeaderImage img={"https://firebasestorage.googleapis.com/v0/b/insta-a107a.appspot.com/o/e9x1NbFsE8VqLAqAKfbpHkH0QS93%2Fbanner?alt=media&token=c17c12e5-0d7d-4602-a97c-9bb56d05a932"}>
                        </ProfileHeaderImage>
                        <ProfileTopSectionContainer>
                            <ProfileTopSection>
                                <img src={data.profilePicture} alt="" />
                                <FollowButton>Follow</FollowButton>
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
                                    <InfoContainerFollowing>
                                        <h3>{data.following.length}</h3>
                                        <p>Following</p>
                                    </InfoContainerFollowing>
                                    <InfoContainerFollowers>
                                        <h3>{data.following.length}</h3>
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
                                            onClick={() => navigate(`/user-post/${image._id}`)}
                                            onMouseEnter={() => setHoverState(true)}
                                            onMouseLeave={() => setHoverState(false)}
                                        >
                                            {hoverState ? <ProfilePhotoHoverState>
                                                <HoverContainers>
                                                    <LikeHover />
                                                    <p>{image.likes.length}</p>
                                                </HoverContainers>
                                                <HoverContainers>
                                                    <CommentHover />
                                                    <p>{image.comments.length}</p>
                                                </HoverContainers>
                                            </ProfilePhotoHoverState> : <div></div>}

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