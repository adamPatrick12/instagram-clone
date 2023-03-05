
import NavBar from "./Navbar";
import {
    PageCenterContainer, PostContainer,
    ImageContainer, PostSideBarContainer,
    CardContainer, PostSideBarTopContainer,
    PostSideBarMiddleContainer, PostSideBarBottomContainer
} from "../Styles/UniqueUserPostPage";
import { useEffect, useState } from "react";
import { fetchSingleUserPost } from "../api/fetchSingleUserPostInfo";
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
    UserProfileContainer, UserNameContainer,
    DisplayName, UserName
} from "../Styles/UserFeedPage/UserFeedStyles";

const UniqueUserPostComponent = () => {
    const [singlePostData, setSinglePostData] = useState([]);

    const { postID } = useParams();

    useEffect(() => {
        fetchSingleUserPost(postID)
            .then(result => setSinglePostData(result));
    }, []);

    console.log(singlePostData);


    return (
        <div>
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
                                </PostSideBarTopContainer>
                                <PostSideBarMiddleContainer>

                                </PostSideBarMiddleContainer>
                                <PostSideBarBottomContainer>

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