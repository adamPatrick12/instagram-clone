import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userPostImageFileAtom } from "../Atoms/NewUserPostAtoms";
import { userPostCaptionAtom } from "../Atoms/NewUserPostAtoms";
import { auth } from "../Firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";


const NewPostComponent = () => {

    const [userPostImage, setPostImage] = useRecoilState(userPostImageFileAtom);
    const [userPostCaption, setUserPostCaption] = useRecoilState(userPostCaptionAtom);
    const navigate = useNavigate();


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData();
        form.append("NewPostImage", userPostImage);
        form.append("Caption", userPostCaption);

        await fetch("http://localhost:3030/instagram-clone/new-post", {
            method: "POST",
            body: form,
        });

        navigate('/user-feed');
    };



    console.log(auth.currentUser);



    useEffect(() => {
        console.log(userPostImage);

    }, [userPostImage]);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={(e) => { setPostImage(e.target.files?.[0] || null); }} type="file" accept="image/*"></input>
                <input onChange={(e) => { setUserPostCaption(e.target.value); }} type="text" placeholder='Caption'></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewPostComponent;