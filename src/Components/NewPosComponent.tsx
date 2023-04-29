import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userPostImageFileAtom } from "../Atoms/NewUserPostAtoms";
import { userPostCaptionAtom } from "../Atoms/NewUserPostAtoms";
import { auth } from "../Firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../Hooks/useCheckAuth";
import { UserObjectIDAtom } from "../Atoms/AuthenticationAtom";
import {
    NewPostPageContainer, NewPostHeader,
    CloseModelIcon, FileUploadIcon,
    InputBox, PostButton, FileSuccess
} from "../Styles/NewPost/NewPostStyles";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const NewPostComponent = () => {
    const userObjectID = useRecoilValue(UserObjectIDAtom);
    const [userPostImage, setPostImage] = useRecoilState(userPostImageFileAtom);
    const [userPostCaption, setUserPostCaption] = useRecoilState(userPostCaptionAtom);
    const navigate = useNavigate();
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const [isLoading, setIsLoading] = useState(false);


    checkAuth();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        e.preventDefault();

        const form = new FormData();
        form.append("NewPostImage", userPostImage);
        form.append("Caption", userPostCaption);
        form.append("UserID", userObjectID);

        await fetch("https://instagram-clone-backend-pi.vercel.app/instagram-clone/new-post", {
            method: "POST",
            body: form,
        });


        setPostImage('');
        setIsLoading(false);

        navigate('/');
    };

    const uploadImgComponents = () => {
        if (!userPostImage) {
            return (
                <label htmlFor="file-upload" className="custom-file-upload">
                    <FileUploadIcon></FileUploadIcon>
                    File Size Limit 5MB
                </label>
            );
        } else {
            return (
                <label htmlFor="file-upload" className="custom-file-upload">
                    <FileSuccess></FileSuccess>
                    Image Uploaded!
                </label>
            );
        }

    };



    useEffect(() => {
    }, [userPostImage]);

    return (
        <NewPostPageContainer>
            <NewPostHeader>
                <h3>Create New Post</h3>
                <CloseModelIcon onClick={() => {
                    navigate('/');
                    setPostImage('');

                }} />
            </NewPostHeader>
            <form onSubmit={onSubmit}>
                {uploadImgComponents()}
                <input onChange={(e) => { setPostImage(e.target.files?.[0] || null); }} id="file-upload" type="file" accept="image/*"></input>
                <InputBox onChange={(e) => { setUserPostCaption(e.target.value); }} type="text" placeholder='Enter Caption...'></InputBox>
                {isLoading ? <Spin indicator={antIcon} /> :
                    <PostButton type="submit">Post</PostButton>
                }


            </form>
        </NewPostPageContainer>
    );
};

export default NewPostComponent;


<input id="file-upload" type="file" />;