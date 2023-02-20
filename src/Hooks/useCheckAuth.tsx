import { auth } from "../Firebase/FirebaseConfig";
import { useRecoilState, useSetRecoilState } from "recoil";

import {
  authenticationAtom,
  userNameAtom,
  displayNameAtom,
  profilePictureAtom,
} from "../Atoms/AuthenticationAtom";



export const checkAuth = () => {

  const setDisplayName = useSetRecoilState(displayNameAtom);
  const setUserName = useSetRecoilState(userNameAtom);

  auth.onAuthStateChanged((user) => {
    setDisplayName(user?.displayName);
    console.log(user);
  });


};

