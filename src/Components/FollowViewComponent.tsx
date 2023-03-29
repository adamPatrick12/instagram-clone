import {
    PageContainer, FollowerContainer,
    FollowViewHeaderContainer, FollowTitles,
    CloseModelIcon, FollowListContainer,
    UserInfoContainer, UserInfo, FollowButton,
    FollowingTitle, FollowerTitle
} from "../Styles/FollowListStyles/FollowList";

import { FollowListDisplayAtom, FollowListDisplayTab, FollowListDataAtom } from "../Atoms/UserProfileAtoms";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

const FollowListComponent = ({ followingList, followerList }: any) => {

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
                    {followListData.map((followerData: any) => {
                        return (
                            <>
                                <UserInfoContainer>
                                    <img src={followerData.profilePicture} alt="" />
                                    <UserInfo>
                                        <span>{followerData.displayName}</span>
                                        <h6>@{followerData.userName}</h6>
                                    </UserInfo>
                                </UserInfoContainer>
                                <FollowButton>
                                    Unfollow
                                </FollowButton>
                            </>
                        );
                    })}
                </FollowListContainer>
            </FollowerContainer >
        </PageContainer >
    );
};


export default FollowListComponent;