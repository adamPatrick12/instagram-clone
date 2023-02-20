import { auth } from "../Firebase/FirebaseConfig";
import { useRecoilState, useSetRecoilState } from "recoil";

import {
  authenticationAtom,
  userNameAtom,
  displayNameAtom,
  profilePictureAtom,
} from "../Atoms/AuthenticationAtom";



export const checkAuth = async () => {



  const setDisplayName = useSetRecoilState(displayNameAtom);
  const setUserName = useSetRecoilState(userNameAtom);
  const setProfilePicture = useSetRecoilState(profilePictureAtom);

  auth.onAuthStateChanged(async (user) => {


    if (user) {
      setDisplayName(user?.displayName);
      setProfilePicture(user?.photoURL);

      await fetch(`http://localhost:3030/instagram-clone/user/${user?.email}`)
        .then((response) => response.json())
        .then(((data) => setUserName(data?.[0].userName)
        ));

    }


  });


};

