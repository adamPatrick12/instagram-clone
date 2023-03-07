
import NavBar from "./Navbar";
import {
    PageCenterContainer, PostContainer,
    ImageContainer, PostSideBarContainer,
    CardContainer, PostSideBarTopContainer,
    PostSideBarMiddleContainer, PostSideBarBottomContainer,
    Caption, CommentsContainer, UserProfilePic,
    UserComment, UserInfo, PostedDate, Comment,
    IconContainer, LikesContainer, Likes,
    CommentInputTextContianer
} from "../Styles/UniqueUserPostPage";
import { useEffect, useState } from "react";
import { fetchSingleUserPost } from "../api/fetchSingleUserPostInfo";
import { useParams } from 'react-router-dom';
import {
    UserProfileContainer, UserNameContainer,
    DisplayName, UserName
} from "../Styles/UserFeedPage/UserFeedStyles";

import { PostComment } from "../api/postComment";

import { UserCommentAtom } from "../Atoms/UserPostAtoms";

import {
    InteractIcons, LikeButton,
    CommentButton, DownloadButton, LinkButton,
} from "../Styles/UserFeedPage/UserPostStyles";

import { profilePictureAtom, displayNameAtom } from "../Atoms/AuthenticationAtom";

import { CommentInputBox, SubmitCommentButton } from "../Styles/UserFeedPage/UserPostStyles";
import { useRecoilState, useRecoilValue } from "recoil";
import { UpdateCommentSectionAtom } from "../Atoms/UserPostAtoms";
import { checkAuth } from "../Hooks/useCheckAuth";
import { useNavigate } from "react-router";


const UniqueUserPostComponent = () => {

    checkAuth();

    const currentUserProfilePic = useRecoilValue(profilePictureAtom);
    const currentUserDisplayname = useRecoilValue(displayNameAtom);
    const [singlePostData, setSinglePostData] = useState<any[]>([]);
    const [userComment, setUserComment] = useRecoilState(UserCommentAtom);
    const [updateComments, setUpdateComments] = useRecoilState(UpdateCommentSectionAtom);
    const time: number = 500;
    const navigate = useNavigate();

    const { postID } = useParams();

    useEffect(() => {
        fetchSingleUserPost(postID)
            .then(result => setSinglePostData(result));
    }, [updateComments]);

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

    console.log(currentUserProfilePic);


    return (
        <div >
            <NavBar />
            {singlePostData.map((data) => {
                return <PageCenterContainer>
                    <PostContainer>
                        <CardContainer>
                            <ImageContainer>
                                <img src={data['imageKey']} alt="" />
                            </ImageContainer>
                            <PostSideBarContainer>
                                <PostSideBarTopContainer>
                                    <UserProfileContainer>
                                        <img src={data['user']['profilePicture']} alt="Profile Pic" />
                                        <UserNameContainer>
                                            <DisplayName>{data['user']['displayName']}</DisplayName>
                                            <UserName>@{data['user']['userName']}</UserName>
                                        </UserNameContainer>
                                    </UserProfileContainer>
                                    <Caption>{data['caption']}</Caption>
                                </PostSideBarTopContainer>
                                <PostSideBarMiddleContainer>
                                    <CommentsContainer>
                                        {data['comments'].map((data: any) => {
                                            return (
                                                <Comment>
                                                    <UserInfo>
                                                        < UserProfilePic>
                                                            <img src={data.profilePicture} alt="Profile Pic" />
                                                        </UserProfilePic>
                                                        <UserComment>
                                                            <span><b>{data.userName}  </b>    {data.userComment}</span>
                                                        </UserComment>
                                                    </UserInfo>
                                                    <PostedDate>
                                                        2W
                                                    </PostedDate>
                                                </Comment>
                                            );
                                        })}

                                    </CommentsContainer>
                                </PostSideBarMiddleContainer>
                                <PostSideBarBottomContainer>
                                    <IconContainer>
                                        <InteractIcons>
                                            <LikeButton />
                                            <CommentButton />
                                            <DownloadButton />
                                        </InteractIcons>
                                        <LinkButton />
                                    </IconContainer>
                                    <LikesContainer>
                                        <Likes>1 Like</Likes>
                                        <PostedDate>
                                            2W
                                        </PostedDate>
                                    </LikesContainer>
                                    <CommentInputTextContianer>
                                        <CommentInputBox
                                            value={userComment}
                                            onChange={(e) => { setUserComment(e.target.value); }} placeholder="Add Comment..."></CommentInputBox>
                                        <SubmitCommentButton
                                            // isDisabled={disabledStatus}
                                            onClick={() => {
                                                submitComment();
                                                setUserComment('');
                                            }} />
                                    </CommentInputTextContianer>
                                </PostSideBarBottomContainer>
                            </PostSideBarContainer>
                        </CardContainer>

                    </PostContainer>
                </PageCenterContainer>;
            })}

        </div>

    );
};

export default UniqueUserPostComponent;