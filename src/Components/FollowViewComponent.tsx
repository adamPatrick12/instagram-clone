import {
    PageContainer, FollowerContainer,
    FollowViewHeaderContainer, FollowTitles,
    CloseModelIcon, FollowListContainer,
    UserInfoContainer, UserInfo, FollowButton
} from "../Styles/FollowListStyles/FollowList";


const FollowListComponent = () => {
    return (
        <PageContainer>
            <FollowerContainer>
                <FollowViewHeaderContainer>
                    <FollowTitles>
                        <h3>
                            Following
                        </h3>
                        <h3>
                            Followers
                        </h3>
                    </FollowTitles>
                    <CloseModelIcon>

                    </CloseModelIcon>
                </FollowViewHeaderContainer>
                <FollowListContainer>
                    <UserInfoContainer>
                        <img src="https://firebasestorage.googleapis.com/v0/b/insta-a107a.appspot.com/o/e9x1NbFsE8VqLAqAKfbpHkH0QS93%2Fbanner?alt=media&token=c17c12e5-0d7d-4602-a97c-9bb56d05a932" alt="" />
                        <UserInfo>
                            <span>APatty</span>
                            <h6>@adamp3</h6>
                        </UserInfo>
                    </UserInfoContainer>
                    <FollowButton>
                        Unfollow
                    </FollowButton>
                </FollowListContainer>

            </FollowerContainer>
        </PageContainer>
    );
};


export default FollowListComponent;