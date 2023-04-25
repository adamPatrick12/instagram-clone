import {
    PageContainer, EditProfileContainer,
    EditProfileHeader, ProfileHeaderImagePreview,
    ProfilePicture, DisplayNameInput, BioInput,
    SaveButton, ViewProfileButton, BannerHoverState,
    ChangeBannerIcon
} from "../Styles/EditProfileStyles/EditProfile";

import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchUserProfile } from "../api/fetchUserProfile";
import { useEffect, useState } from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


const EditProfile = () => {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { profileID }: any = useParams();
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const { data: userProfileData, } = useQuery(
        ['profile', profileID],
        () => fetchUserProfile(profileID),
    );
    const [userBannerImage, setUserBanner] = useState<any>();



    const [displayName, setDisplayName] = useState('');
    const [bio, setBio] = useState('');

    const updatedProfileInfo = {
        newDisplayName: displayName,
        newBio: bio,
        profileToUpdate: profileID
    };


    useEffect(() => {
        userProfileData?.map((userProfileData: any) => {
            setDisplayName(userProfileData.displayName);
        });

        userProfileData?.map((userProfileData: any) => {
            setBio(userProfileData.bio);
        });
    }, [userProfileData]);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData();
        form.append("newDisplayName", displayName);
        form.append("newBio", bio);
        form.append('userBanner', userBannerImage);
        form.append("profileToUpdate", profileID);


        await fetch("https://instagram-clone-backend-pi.vercel.app/instagram-clone/update-profile", {
            method: "POST",
            body: form,
        });
    };




    return (
        <PageContainer>

            {userProfileData?.map((userData: any, index: number) => {
                return (
                    <EditProfileContainer key={index}>
                        <EditProfileHeader>
                            Settings
                        </EditProfileHeader>
                        <form onSubmit={onSubmit}>
                            <label htmlFor="file-upload">
                                <ProfileHeaderImagePreview>
                                    <BannerHoverState>
                                        <ChangeBannerIcon />
                                    </BannerHoverState>
                                    <input onChange={(e) => { setUserBanner(e.target.files?.[0] || null); }} id="file-upload" type="file" accept="image/*"></input>
                                    <img src={userData.banner} alt="" />
                                    <ProfilePicture>
                                        <img src={userData.profilePicture} alt="" />
                                    </ProfilePicture>
                                </ProfileHeaderImagePreview>
                            </label>

                            <DisplayNameInput>
                                <p>Display Name:</p>
                                <input type="text"
                                    value={displayName}
                                    onChange={(e) => setDisplayName(e.target.value)}
                                />
                            </DisplayNameInput>
                            <BioInput>
                                <p>Bio:</p>
                                <input type="text"
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                />
                            </BioInput>
                            <SaveButton type="submit">
                                Save
                            </SaveButton>

                            <ViewProfileButton onClick={() => navigate(`/user-profile/${profileID}`)}>
                                View Profile
                            </ViewProfileButton>


                        </form>

                    </EditProfileContainer>
                );
            })}

        </PageContainer>
    );
};

export default EditProfile;