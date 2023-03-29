import {
    PageContainer, FollowerContainer,
    FollowViewHeaderContainer, FollowTitles,
    CloseModelIcon, FollowListContainer,
    UserInfoContainer, UserInfo, FollowButton,
    FollowingTitle, FollowerTitle, FollowItemContainer
} from "../Styles/FollowListStyles/FollowList";

import { FollowListDisplayAtom, FollowListDisplayTab, FollowListDataAtom } from "../Atoms/UserProfileAtoms";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { useNavigate } from "react-router";


const FollowListComponent = ({ followingList, followerList }: any) => {

    const navigate = useNavigate();

    const [followListView, setFollowListView] = useRecoilState(FollowListDisplayAtom);
    const [DisplayTabValue, setFollowListDisplayTab] = useRecoilState(FollowListDisplayTab);
    const [followListData, setFollowListData] = useRecoilState(FollowListDataAtom);



    const followListDataToDisplay = () => {
        if (DisplayTabValue === 'following') {
            setFollowListData(followingList);
        } else {
            setFollowListData(followerList);
        }
    };

    useEffect(() => {
        followListDataToDisplay();
    }, [DisplayTabValue]);



    return (
        <PageContainer>
            <FollowerContainer>
                <FollowViewHeaderContainer>
                    <FollowTitles>
                        <FollowingTitle tab={DisplayTabValue} onClick={() => setFollowListDisplayTab('following')}>
                            <h3>Following</h3>
                        </FollowingTitle>
                        <FollowerTitle tab={DisplayTabValue} onClick={() => setFollowListDisplayTab('follower')}>
                            <h3>Followers</h3>
                        </FollowerTitle>
                    </FollowTitles>
                    <CloseModelIcon onClick={() => setFollowListView(false)}>

                    </CloseModelIcon>
                </FollowViewHeaderContainer>
                <FollowListContainer>
                    {followListData.map((followData: any) => {
                        return (
                            <FollowItemContainer>
                                <UserInfoContainer >
                                    <img
                                        onClick={() => {
                                            navigate(`/user-profile/${followData._id}`);
                                            setFollowListView(false);
                                        }}
                                        src={followData.profilePicture} alt="" />
                                    <UserInfo onClick={() => {
                                        navigate(`/user-profile/${followData._id}`);
                                        setFollowListView(false);
                                    }}>
                                        <span>{followData.displayName}</span>
                                        <h6>@{followData.userName}</h6>
                                    </UserInfo>
                                </UserInfoContainer>
                                <FollowButton>
                                    Unfollow
                                </FollowButton>
                            </FollowItemContainer >
                        );
                    })}
                </FollowListContainer>
            </FollowerContainer >
        </PageContainer >
    );
};


export default FollowListComponent;