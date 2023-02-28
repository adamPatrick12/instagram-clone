import {
    UserPostCardContainer, UserPostHeader,
    UserInfoContainer, UserNameContainer,
    DisplayName, MenuDots, UserPostFooter,
    PostIconContainer, InteractIcons,
    LikeButton, CommentButton,
    DownloadButton, LinkButton,
    CommnetStatus, CommentSection,
    Likes, CommentInputContianer,
    CommentInputBox, SubmitCommentButton
} from "../Styles/UserFeedPage/UserPostStyles";


import { UserName } from "../Styles/UserFeedPage/UserFeedStyles";

import { SyntheticEvent, useState } from 'react';

import { Skeleton } from 'antd';


const UserPost = ({ ImageURl, userName, displayName, profilePicture }: any) => {

    const [loading, setLoadingState] = useState(true);
    const [loadingStateClass, setloadingStateClass] = useState('isLoading');


    const handledLoadingImage = (event: SyntheticEvent<HTMLImageElement> | undefined) => {
        setLoadingState(false);
        setloadingStateClass('loaded');
    };



    return (
        <UserPostCardContainer>
            <UserPostHeader>
                <UserInfoContainer>
                    <img src={profilePicture} />
                    <UserNameContainer>
                        <DisplayName>{displayName}</DisplayName>
                        <UserName>@{userName}</UserName>
                    </UserNameContainer>
                </UserInfoContainer>
                <MenuDots />
            </UserPostHeader >
            {loading &&
                <div style={{ position: 'relative' }}>
                    <Skeleton.Image style={{ width: 560, height: 500, position: 'absolute', top: 20 }} active={true} />
                </div>
            }
            <img src={ImageURl} onLoad={(handledLoadingImage)} alt="" />
            <UserPostFooter>
                <PostIconContainer>
                    <InteractIcons>
                        <LikeButton />
                        <CommentButton />
                        <DownloadButton />
                    </InteractIcons>
                    <LinkButton />
                </PostIconContainer>
                <Likes>1 Like</Likes>
                <CommnetStatus>No Comments</CommnetStatus>
                <CommentSection></CommentSection>
                <CommentInputContianer>
                    <CommentInputBox placeholder="Add Comment..."></CommentInputBox>
                    <SubmitCommentButton />
                </CommentInputContianer>
            </UserPostFooter>
        </UserPostCardContainer>
    );
};

export default UserPost;