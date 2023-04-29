import {
    PageContainer, FollowerContainer,
    FollowViewHeaderContainer, FollowTitles,
    CloseModelIcon, FollowListContainer,
    UserInfoContainer, UserInfo, FollowButton,
    FollowingTitle, FollowerTitle, FollowItemContainer
} from "../Styles/FollowListStyles/FollowList";

import { FollowListDisplayAtom, FollowListDisplayTab, FollowListDataAtom } from "../Atoms/UserProfileAtoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { checkAuth } from "../Hooks/useCheckAuth";
import { UserObjectIDAtom } from "../Atoms/AuthenticationAtom";
import { CurrentUserFollowerListAtom, CurrentUserFollowingListAtom } from '../Atoms/UserProfileAtoms';


const FollowListComponent = ({ followingList, followerList, followerIDs, followingIDs }: any) => {

    checkAuth();

    const navigate = useNavigate();

    const [followListView, setFollowListView] = useRecoilState(FollowListDisplayAtom);
    const [DisplayTabValue, setFollowListDisplayTab] = useRecoilState(FollowListDisplayTab);
    const [followListData, setFollowListData] = useRecoilState(FollowListDataAtom);
    const currentUserFollowingList = useRecoilValue(CurrentUserFollowingListAtom);
    const currentUserFollowerList = useRecoilValue(CurrentUserFollowerListAtom);

    const currentUser = useRecoilValue(UserObjectIDAtom);

    const userIDs = (dataSet: any) => {
        let userIDs: any[] = [];

        dataSet.map((data: any) => {
            userIDs.push(data._id);
        });

        return userIDs;
    };


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

                            </FollowItemContainer >
                        );
                    })}
                </FollowListContainer>
            </FollowerContainer >
        </PageContainer >
    );
};


export default FollowListComponent;