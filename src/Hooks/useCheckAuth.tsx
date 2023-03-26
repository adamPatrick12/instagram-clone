import { auth } from "../Firebase/FirebaseConfig";
import { useSetRecoilState } from "recoil";

import {
  userNameAtom,
  displayNameAtom,
  profilePictureAtom,
  uuidAtom,
  UserObjectIDAtom,
} from "../Atoms/AuthenticationAtom";
import { useEffect } from "react";
import { UserPostsCount, UserFollowerCount, UserFollowingCount } from "../Atoms/UserProfileAtoms";

export const checkAuth = async () => {

  const setUserObjectID = useSetRecoilState(UserObjectIDAtom);
  const setDisplayName = useSetRecoilState(displayNameAtom);
  const setUserName = useSetRecoilState(userNameAtom);
  const setProfilePicture = useSetRecoilState(profilePictureAtom);
  const setUniqueIdentifier = useSetRecoilState(uuidAtom);
  const setNumberOfPosts = useSetRecoilState(UserPostsCount);
  const setUserFollowingCount = useSetRecoilState(UserFollowingCount);
  const setUserFollowerCount = useSetRecoilState(UserFollowerCount);



  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {

      if (user) {
        setDisplayName(user?.displayName);
        setProfilePicture(user?.photoURL);
        setUniqueIdentifier(user?.uid);


        await fetch(`http://localhost:3030/instagram-clone/user/${user?.uid}`)
          .then((response) => response.json())
          .then(((data) =>

          (setUserName(data?.[0].userName),
            setUserObjectID(data?.[0]._id),
            setNumberOfPosts(data[0].posts.length),
            setUserFollowingCount(data[0].following.length),
            setUserFollowerCount(data[0].followers.length),
            console.log(data[0].following.length)
          )
          ));

      }
    });
  }, []);


};

