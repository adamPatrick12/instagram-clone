import {
    PageContainer, FollowerContainer,
    FollowViewHeaderContainer, FollowTitles,
    CloseModelIcon, FollowListContainer,
    UserInfoContainer, UserInfo, FollowButton,
    FollowingTitle, FollowerTitle
} from "../Styles/FollowListStyles/FollowList";

import { FollowListDisplayAtom, FollowListDisplayTab } from "../Atoms/UserProfileAtoms";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

const FollowListComponent = () => {

    const [followListView, setFollowListView] = useRecoilState(FollowListDisplayAtom);
    const [DisplayTabValue, setFollowListDisplayTab] = useRecoilState(FollowListDisplayTab);

    useEffect(() => {
        console.log("mounted");

    }, []);

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
                    <UserInfoContainer>
                        <img src="https://firebasestorage.googleapis.com/v0/b/insta-a107a.appspot.com/o/e9x1NbFsE8VqLAqAKfbpHkH0QS93%2Fbanner?alt=media&token=c17c12e5-0d7d-4602-a97c-9bb56d05a932" alt="" />
                        <UserInfo>
                            <span >APatty</span>
                            <h6>@adamp3</h6>
                        </UserInfo>
                    </UserInfoContainer>
                    <FollowButton>
                        Unfollow
                    </FollowButton>
                </FollowListContainer>

            </FollowerContainer >
        </PageContainer >
    );
};


export default FollowListComponent;