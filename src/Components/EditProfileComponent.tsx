import {
    PageContainer, EditProfileContainer,
    EditProfileHeader, ProfileHeaderImagePreview,
    ProfilePicture, DisplayNameInput, BioInput,
    SaveButton, ViewProfileButton
} from "../Styles/EditProfileStyles/EditProfile";

import { useParams, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchUserProfile } from "../api/fetchUserProfile";
import { useEffect, useState } from "react";
import { updateProfile } from "../api/updateUserProfile";


const EditProfile = () => {

    const { profileID } = useParams();

    const { data: userProfileData, refetch } = useQuery(
        ['profile', profileID],
        () => fetchUserProfile(profileID),
    );

    const updateProfileMutation = useMutation({
        mutationFn: () => updateProfile(updatedProfileInfo),
    });

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



    return (
        <PageContainer>
            {userProfileData?.map((userData: any, index: number) => {
                return (
                    <EditProfileContainer key={index}>
                        <EditProfileHeader>
                            Settings
                        </EditProfileHeader>
                        <ProfileHeaderImagePreview>
                            <img src="https://firebasestorage.googleapis.com/v0/b/insta-a107a.appspot.com/o/e9x1NbFsE8VqLAqAKfbpHkH0QS93%2Fbanner?alt=media&token=c17c12e5-0d7d-4602-a97c-9bb56d05a932" alt="" />
                        </ProfileHeaderImagePreview>
                        <ProfilePicture>
                            <img src={userData.profilePicture} alt="" />
                        </ProfilePicture>
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
                        <SaveButton onClick={() => updateProfileMutation.mutate()}>
                            Save
                        </SaveButton>
                        <ViewProfileButton>
                            View Profile
                        </ViewProfileButton>
                    </EditProfileContainer>
                );
            })}

        </PageContainer>
    );
};

export default EditProfile;