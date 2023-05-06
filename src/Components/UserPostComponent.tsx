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
    CommentCard,
} from "../Styles/UserFeedPage/UserPostStyles";

import { motion } from "framer-motion";

import { UserName } from "../Styles/UserFeedPage/UserFeedStyles";

import { SyntheticEvent, useState } from 'react';

import { Skeleton } from 'antd';

import { useEffect } from "react";

import { PostIdAtom, UserCommentAtom } from "../Atoms/UserPostAtoms";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { PostComment } from "../api/postComment";
import { checkAuth } from "../Hooks/useCheckAuth";
import { userNameAtom, UserObjectIDAtom } from "../Atoms/AuthenticationAtom";
import { UpdateCommentSectionAtom } from "../Atoms/UserPostAtoms";
import { profilePictureAtom, displayNameAtom } from "../Atoms/AuthenticationAtom";
import { useNavigate } from "react-router";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { handleUserComment } from "../Hooks/handleUserComment";
import { handleLikeClick, handleUnLikeClick } from "../Hooks/handleLikes";
import { auth } from "../Firebase/FirebaseConfig";




const UserPost = ({ ImageURl, userName, displayName, profilePicture, imageID, comments, likes, userID }: any) => {

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
    const currentUserName = useRecoilValue(userNameAtom);

    const isUserSignIn = auth.currentUser;
    const listOfUserLikes = likes.map((data: any) => data.userName);

    const reRenderPage = () => {
        setTimeout(() => {
            if (updateComments) {
                setUpdateComments(false);
            } else {
                setUpdateComments(true);
            }
        }, time);
    };

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
        reRenderPage();
    };

    useEffect(() => {
        if (userComment.length === 0) {
            setDisabledStatus(true);
        } else {
            setDisabledStatus(false);
        }
    }, [userComment]);


    const handleLikeEvent = () => {
        if (isUserSignIn) {
            handleLikeClick(postID, userObjectID);
            reRenderPage();
        } else {
            navigate(`sign-up`);
        }
    };

    const handleCommentEvent = () => {
        if (isUserSignIn) {
            submitComment();
            setUserComment('');
        } else {
            navigate(`sign-up`);
        }
    };

    return (
        <UserPostCardContainer onMouseOver={() => setPostId(imageID)}>
            <UserPostHeader>
                <UserInfoContainer>
                    <img src={profilePicture}
                        onClick={() => navigate(`/user-profile/${userID}`)}
                    />
                    <UserNameContainer>
                        <DisplayName
                            onClick={() => navigate(`/user-profile/${userID}`)}
                        >{displayName}</DisplayName>
                        <UserName
                            onClick={() => navigate(`/user-profile/${userID}`)}
                        >@{userName}</UserName>
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
                        {listOfUserLikes.includes(currentUserName) ?
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}>
                                <AiFillHeart onClick={() => {
                                    handleUnLikeClick(postID, userObjectID);
                                    reRenderPage();
                                }
                                } className="like" />
                            </motion.div> :
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <AiOutlineHeart className="notLiked" onClick={() => {
                                    handleLikeEvent();
                                }} />
                            </motion.div>}

                        <CommentButton onClick={() => navigate(`/user-post/${imageID}`)} />
                        <DownloadButton />
                    </InteractIcons>
                    <LinkButton />
                </PostIconContainer>
                <Likes>{likes.length} Likes</Likes>
                {comments.length === 0 ?
                    <CommnetStatus>No Comments</CommnetStatus>
                    : <CommnetStatus style={{ cursor: "pointer" }} onClick={() => navigate(`/user-post/${imageID}`)}>
                        View All Comments</CommnetStatus>}
                <CommentSection>
                    {[...comments].reverse().slice(0, 2).map((data: any, index: number) => {
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
                        isdisabled={disabledStatus}
                        onClick={() => {
                            handleCommentEvent();
                        }} />
                </CommentInputContianer>
            </UserPostFooter>
        </UserPostCardContainer>
    );
};

export default UserPost;