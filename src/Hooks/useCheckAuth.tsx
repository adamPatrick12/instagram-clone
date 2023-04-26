import { auth } from "../Firebase/FirebaseConfig";
import { useRecoilValue, useSetRecoilState } from "recoil";

import {
  userNameAtom,
  displayNameAtom,
  profilePictureAtom,
  uuidAtom,
  UserObjectIDAtom,
  authenticationAtom
} from "../Atoms/AuthenticationAtom";
import { useEffect } from "react";
import { UserPostsCount, UserFollowerCount, UserFollowingCount, } from "../Atoms/UserProfileAtoms";
import {
  FollowListDataAtom, CurrentUserFollowingListAtom,
  CurrentUserFollowerListAtom
} from "../Atoms/UserProfileAtoms";

export const checkAuth = async () => {

  const setUserObjectID = useSetRecoilState(UserObjectIDAtom);
  const setDisplayName = useSetRecoilState(displayNameAtom);
  const setUserName = useSetRecoilState(userNameAtom);
  const setProfilePicture = useSetRecoilState(profilePictureAtom);
  const setUniqueIdentifier = useSetRecoilState(uuidAtom);
  const setNumberOfPosts = useSetRecoilState(UserPostsCount);
  const setUserFollowingCount = useSetRecoilState(UserFollowingCount);
  const setUserFollowerCount = useSetRecoilState(UserFollowerCount);
  const setFollowingList = useSetRecoilState(CurrentUserFollowingListAtom);
  const setFollowerList = useSetRecoilState(CurrentUserFollowerListAtom);
  const isUserSignIn = useSetRecoilState(authenticationAtom);



  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {

      if (user) {
        setProfilePicture(user?.photoURL);
        setUniqueIdentifier(user?.uid);
        isUserSignIn(true);

        await fetch(`https://instagram-clone-backend-pi.vercel.app/instagram-clone/user/${user?.uid}`)
          .then((response) => response.json())
          .then(((data) =>

          (setUserName(data?.[0].userName),
            setDisplayName(data?.[0].displayName),
            setUserObjectID(data?.[0]._id),
            setNumberOfPosts(data[0].posts.length),
            setUserFollowingCount(data[0].following.length),
            setUserFollowerCount(data[0].followers.length),
            setFollowingList(data[0].following),
            setFollowerList(data[0].followers)
          )
          ));
      } else {
        isUserSignIn(false);
        setUniqueIdentifier('');

      }
    });
  }, []);


};

