import {
    UserPostCardContainer, UserPostHeader,
    UserInfoContainer, UserNameContainer,
    DisplayName, MenuDots, UserPostFooter,
    PostIconContainer, InteractIcons,
    LikeButton, CommentButton,
    DownloadButton, LinkButton,
    CommnetStatus, CommentSection,
    Likes, CommentInputContianer,
    CommentInputBox, SubmitCommentButton,
    CommentCard
} from "../Styles/UserFeedPage/UserPostStyles";

import { UserName } from "../Styles/UserFeedPage/UserFeedStyles";

import { SyntheticEvent, useState } from 'react';

import { Skeleton } from 'antd';

import { useEffect } from "react";

import { PostIdAtom, UserCommentAtom } from "../Atoms/UserPostAtoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { PostComment } from "../api/postComment";
import { checkAuth } from "../Hooks/useCheckAuth";
import { UserObjectIDAtom } from "../Atoms/AuthenticationAtom";

const UserPost = ({ ImageURl, userName, displayName, profilePicture, imageID, comments }: any) => {

    checkAuth();

    const [loading, setLoadingState] = useState(true);
    const [loadingStateClass, setloadingStateClass] = useState('isLoading');
    const [postID, setPostId] = useRecoilState(PostIdAtom);
    const [userComment, setUserComment] = useRecoilState(UserCommentAtom);
    const userObjectID = useRecoilValue(UserObjectIDAtom);


    const handledLoadingImage = (event: SyntheticEvent<HTMLImageElement> | undefined) => {
        setLoadingState(false);
        setloadingStateClass('loaded');
    };

    const submitComment = () => {
        const userCommentData = {
            userComment: userComment,
            userID: userObjectID,
            postID: postID
        };
        PostComment(userCommentData);
    };

    console.log(comments);

    useEffect(() => {


    }, [userComment]);



    return (
        <UserPostCardContainer >
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
                {comments.length === 0 ?
                    <CommnetStatus>No Comments</CommnetStatus>
                    : <CommnetStatus>View All Comments</CommnetStatus>}
                <CommentSection>
                    {comments.map((data: any) => {
                        return <CommentCard>
                            <span> {data.user.displayName} </span>
                            {data.comment}</CommentCard>;
                    })}
                </CommentSection>
                <CommentInputContianer>
                    <CommentInputBox
                        value={userComment}
                        onClick={() => setPostId(imageID)}
                        onChange={(e) => { setUserComment(e.target.value); }} placeholder="Add Comment..."></CommentInputBox>
                    <SubmitCommentButton
                        onClick={() => {
                            submitComment();
                            setUserComment('');
                        }} />
                </CommentInputContianer>
            </UserPostFooter>
        </UserPostCardContainer>
    );
};

export default UserPost;