import axios from 'axios';

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from 'react';

const fetchProfile = async (profileID: any) => {
    return await axios.get(`http://localhost:3030/instagram-clone/user-profile/${profileID}`)
        .then((response) => response.data);
};






const Test = () => {
    const queryClient = useQueryClient();

    const addFollower = async (followerDetails: any) => {
        return await axios.post("http://localhost:3030/instagram-clone/follow-user", followerDetails);
    };



    const [profileData, setProfileData] = useState([]);
    let followers;
    const profileID: string = '63fd61493433b6fca5e7f907';
    const followerInfo = {
        currentUser: '63fab56ce357775bf22ccc8c',
        userToUpdate: "63fd61493433b6fca5e7f907"
    };




    const { data, isError, status, refetch, isRefetching } = useQuery(['userProfile', profileID], () => fetchProfile(profileID), {
    });

    const addNewFollower = () => {
        return useMutation(addFollower, {
            onMutate: () => {
                setTimeout(() => {
                    refetch();
                }, 1000);
            }
        });
    };

    const { mutate, isLoading } = addNewFollower();


    const handleNewFollower = () => {
        mutate(followerInfo);
    };



    useEffect(() => {
        console.log(data);
        console.log(isLoading);

    }, [data, isLoading]);


    if (status === 'success') {
        followers = data[0].followers;
    }



    return (
        <div>
            <h1>
                {followers?.map((followerInfo: any) => {
                    return (
                        <div>
                            <div>
                                {followerInfo.userName}
                            </div>
                            <div>
                                {followerInfo.displayName}
                            </div>
                            <div>
                                {followerInfo._id}
                            </div>
                        </div>
                    );
                })}
            </h1>
            <button onClick={() => {
                handleNewFollower();
            }}>Click me</button>

        </div>
    );
};

export default Test;