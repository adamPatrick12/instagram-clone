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

import { useEffect, useRef } from "react";

import { PostIdAtom, UserCommentAtom } from "../Atoms/UserPostAtoms";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { PostComment } from "../api/postComment";
import { checkAuth } from "../Hooks/useCheckAuth";
import { UserObjectIDAtom } from "../Atoms/AuthenticationAtom";
import { UpdateCommentSectionAtom } from "../Atoms/UserPostAtoms";
import { profilePictureAtom, displayNameAtom } from "../Atoms/AuthenticationAtom";
import { useNavigate } from "react-router";
import { emojisplosion } from "emojisplosion";


const UserPost = ({ ImageURl, userName, displayName, profilePicture, imageID, comments }: any) => {

    const navigate = useNavigate();

    checkAuth();

    const [loading, setLoadingState] = useState(true);
    const [loadingStateClass, setloadingStateClass] = useState('isLoading');
    const [postID, setPostId] = useRecoilState(PostIdAtom);
    const [userComment, setUserComment] = useRecoilState(UserCommentAtom);
    const userObjectID = useRecoilValue(UserObjectIDAtom);
    const [disabledStatus, setDisabledStatus] = useState(true);
    const [updateComments, setUpdateComments] = useRecoilState(UpdateCommentSectionAtom);
    const time: number = 500;
    const currentUserProfilePic = useRecoilValue(profilePictureAtom);
    const currentUserDisplayname = useRecoilValue(displayNameAtom);


    const handledLoadingImage = (event: SyntheticEvent<HTMLImageElement> | undefined) => {
        setLoadingState(false);
        setloadingStateClass('loaded');
    };

    const submitComment = () => {
        const userCommentData = {
            userComment: userComment,
            postID: postID,
            profilePicture: currentUserProfilePic,
            userName: currentUserDisplayname,
        };
        PostComment(userCommentData);

        setTimeout(() => {
            if (updateComments) {
                setUpdateComments(false);
            } else {
                setUpdateComments(true);
            }
        }, time);
    };

    console.log(postID);


    useEffect(() => {
        if (userComment.length === 0) {
            setDisabledStatus(true);
        } else {
            setDisabledStatus(false);
        }
    }, [userComment]);


    const handleUserComment = (userComment: any) => {

        const commentLength = userComment.length;
        let comment = userComment;

        if (commentLength > 50) {
            comment = comment.slice(0, 50);
            comment = comment.concat('...');
        }
        return comment;
    };



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
            <img onClick={() => navigate(`/user-post/${imageID}`)} src={ImageURl} onLoad={(handledLoadingImage)} alt="" />
            <UserPostFooter>
                <PostIconContainer>
                    <InteractIcons>
                        <LikeButton />
                        <CommentButton onClick={() => navigate(`/user-post/${imageID}`)} />
                        <DownloadButton />
                    </InteractIcons>
                    <LinkButton />
                </PostIconContainer>
                <Likes>1 Like</Likes>
                {comments.length === 0 ?
                    <CommnetStatus>No Comments</CommnetStatus>
                    : <CommnetStatus style={{ cursor: "pointer" }} onClick={() => navigate(`/user-post/${imageID}`)}>
                        View All Comments</CommnetStatus>}
                <CommentSection>
                    {[...comments].reverse().slice(0, 2).map((data: any, index: any) => {
                        return <CommentCard key={index}>
                            <span> {data.userName} </span>

                            {handleUserComment(data.userComment)}</CommentCard>;
                    })}
                </CommentSection>
                <CommentInputContianer>
                    <CommentInputBox
                        value={userComment}
                        onClick={() => setPostId(imageID)}
                        onChange={(e) => { setUserComment(e.target.value); }} placeholder="Add Comment..."></CommentInputBox>
                    <SubmitCommentButton
                        isDisabled={disabledStatus}
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