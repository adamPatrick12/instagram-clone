
import NavBar from "./Navbar";
import { HomePageIconAtom, ProfilePageIconAtom } from "../Atoms/Navbar";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, } from "react";
import {
    UserProfilePageContainer, ProfileHeaderImage,
    ProfileTopSectionContainer, ProfileTopSection,
    ProfileActionButton, ProfileInnerContainer, ProfileUserInfoContainer,
    NameContainer, InfoContainerPost, ProfilePhotosContainer,
    InfoContainerFollowing, InfoContainerFollowers,
    InfoContainerFollow, UserBioContainer, ProfilePhoto,
    ProfilePhotoHoverState, CommentHover, LikeHover,
    HoverContainers, ProfilePlusButton, PlusIcon
} from "../Styles/UserProfilesStyles/UserProfile";

import { checkAuth } from "../Hooks/useCheckAuth";
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUserProfile } from "../api/fetchUserProfile";
import { UserProfileDataAtom } from "../Atoms/UserProfileAtoms";
import { UserObjectIDAtom } from "../Atoms/AuthenticationAtom";
import { postFollow } from "../api/postFollow";
import { postUnFollow } from "../api/postUnFollow";
import { FollowListDisplayAtom, FollowListDisplayTab } from "../Atoms/UserProfileAtoms";
import FollowListComponent from "./FollowViewComponent";
import { useQuery, useMutation } from "@tanstack/react-query";


const UserProfile = () => {

    checkAuth();

    const navigate = useNavigate();
    const setHomeIcon = useSetRecoilState(HomePageIconAtom);
    const setProfileIcon = useSetRecoilState(ProfilePageIconAtom);
    const { profileID } = useParams();
    const currentUser = useRecoilValue(UserObjectIDAtom);
    const [followDisplayModual, setFollowDisplayModual] = useRecoilState(FollowListDisplayAtom);
    const setFollowListDisplayTab = useSetRecoilState(FollowListDisplayTab);


    const followInfo = {
        currentUser: currentUser,
        userToUpdate: profileID,
    };


    const { data: userProfileData, refetch } = useQuery(
        ['profile', profileID],
        () => fetchUserProfile(profileID),
    );


    const newFollowMutation = useMutation({
        mutationFn: () => postFollow(followInfo),
        onMutate: () => {
            setTimeout(() => {
                refetch();
            }, 500);
        },
    });

    const newUnFollowMutation = useMutation({
        mutationFn: () => postUnFollow(followInfo),
        onMutate: () => {
            setTimeout(() => {
                refetch();
            }, 500);
        }
    });



    useEffect(() => {
        setHomeIcon(false);
        checkCurrentProfilePage();
    }, []);

    const checkCurrentProfilePage = () => {
        if (currentUser === profileID) {
            setProfileIcon(true);
        } else {
            setProfileIcon(false);
        }
    };



    const allFollowerIDs = () => {
        let currentFollowers: any = [];

        userProfileData?.map((data: any) => {
            data.followers.map((followers: any) => {
                currentFollowers.push(followers._id);
            });
        });
        return currentFollowers;
    };

    const allFollowingIDs = () => {
        let currentFollowing: any = [];

        userProfileData?.map((data: any) => {
            data.following.map((following: any) => {
                currentFollowing.push(following._id);
            });
        });
        return currentFollowing;
    };


    const ProfileActionButtonFunction = (followerList: any) => {
        if (profileID === currentUser) {
            return (
                <div>
                    <ProfileActionButton onClick={() => navigate(`/edit-profile/${profileID}`)}>
                        Edit Profile
                    </ProfileActionButton>
                    <ProfilePlusButton onClick={() => navigate("/new-post")}>
                        <PlusIcon></PlusIcon>
                    </ProfilePlusButton>
                </div>
            );
        }
        if (followerList.includes(currentUser)) {
            return <ProfileActionButton onClick={() => {
                newUnFollowMutation.mutate();
            }}>Unfollow</ProfileActionButton>;
        } else {
            return <ProfileActionButton onClick={() => {
                newFollowMutation.mutate();
            }}>Follow</ProfileActionButton>;
        }
    };


    return (
        <UserProfilePageContainer >
            <NavBar />
            {followDisplayModual && <FollowListComponent
                followingList={userProfileData[0].following}
                followerList={userProfileData[0].followers}
                followerIDs={allFollowerIDs()}
                followingIDs={allFollowingIDs()}
            />}
            {userProfileData?.map((data: any, index: number) => {
                return (
                    <div onMouseEnter={() => checkCurrentProfilePage()} key={index}>
                        <ProfileHeaderImage >
                            <img src={data.banner} alt="" />
                        </ProfileHeaderImage>
                        <ProfileTopSectionContainer>
                            <ProfileTopSection>
                                <img src={data.profilePicture} alt="" />
                                {ProfileActionButtonFunction(allFollowerIDs())}
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
                                        <p >Followers</p>
                                    </InfoContainerFollowers>
                                </InfoContainerFollow>
                                <UserBioContainer>
                                    <h3>Bio</h3>
                                    <p>{data.bio}</p>
                                </UserBioContainer>
                            </ProfileUserInfoContainer>
                            <ProfilePhotosContainer>
                                {data.posts.map((image: any, index: number) => {
                                    return (
                                        <ProfilePhoto key={index}
                                            onClick={() => navigate(`/user-post/${image._id}`)} >
                                            <img src={image.imageKey} alt="" />
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