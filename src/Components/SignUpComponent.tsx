
import {
  authenticationAtom,
  userNameAtom,
  displayNameAtom,
  emailAtom,
  disabledButtonAtom,
  profilePictureAtom,
  TakenUsernamesAtom,
  TakenEmailsAtom
} from "../Atoms/AuthenticationAtom";

import { signInWithPopup, signOut, } from "firebase/auth";
import { auth, provider } from "../Firebase/FirebaseConfig";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import {
  Container,
  SignUpContainer,
  SignUpHeader,
  SignUpFormContainer,
  UserNameInput,
  UserNameSymbol,
  SignUpWithGoogleButton,
  LoginButton,
  UserNameCheck
} from "../Styles/SignUpPage/PageContainer";

import InstagramLogo from "../Images/instagram-logo.png";
import GoogleLogo from '../Images/google-logo.png';
import { useNavigate } from "react-router";
import { activeUsernames, activeEmails } from '../Hooks/useActiveUsernames';
import { Authentication } from "../api/postUser";

export const SighUpComponent = () => {
  const [IsAuthentication, setAuthentication] = useRecoilState(authenticationAtom);
  const [userName, setUserName] = useRecoilState(userNameAtom);
  const setdisplayName = useSetRecoilState(displayNameAtom);
  const setEmail = useSetRecoilState(emailAtom);
  const [disabledBtn, setDisabledBtn] = useRecoilState(disabledButtonAtom);
  const setProfilePicture = useSetRecoilState(profilePictureAtom);
  const [usernameAvailability, setUsernameAvailability] = useState('Name must be 3-15 characters.');
  const [usernameAvailabilityColor, setUsernameAvailabilityColor] = useState('#686868');
  const [takenUsernames, setTakenUsernames] = useRecoilState(TakenUsernamesAtom);
  const [takenEmails, setEmails] = useRecoilState(TakenEmailsAtom);

  // TODO: Figure out why photo isn't displaying

  const navigate = useNavigate();


  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {

        if (takenEmails.includes(result.user.email)) {
          navigate("/");
          return;
        } else {
          const userData = {
            userID: result.user.uid,
            userName: userName,
            displayName: result.user.displayName,
            email: result.user.email,
            profilePicture: result.user.photoURL,
          };

          Authentication(userData);

          setAuthentication(true);
          navigate("/");

          setProfilePicture(result.user.photoURL);
          setdisplayName(result.user.displayName);
          setEmail(result.user.email);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUserNameLength = () => {
    if (userName.length === 0) {
      setUsernameAvailability('Name must be 3-15 characters.');
      setDisabledBtn(true);
      setUsernameAvailabilityColor('#686868');
    } else if (userName.length < 3) {
      setUsernameAvailability('Name is too short.');
      setDisabledBtn(true);
      setUsernameAvailabilityColor('#FF0000');
    } else if (userName.length > 15) {
      setUsernameAvailability('Name is too long.');
      setDisabledBtn(true);
      setUsernameAvailabilityColor('#FF0000');
    } else if (takenUsernames.includes(userName)) {
      setUsernameAvailability('Name is taken.');
      setDisabledBtn(true);
      setUsernameAvailabilityColor('#FF0000');
    } else {
      setUsernameAvailability('Name is available');
      setDisabledBtn(false);
      setUsernameAvailabilityColor('#00C138');

    }
  };

  useEffect(() => {
    handleUserNameLength();
    activeEmails()
      .then(result => setEmails(result));
    activeUsernames()
      .then(result => setTakenUsernames(result));

  }, [userName]);



  return (
    <Container>
      <SignUpContainer>
        <SignUpHeader>
          <img src={InstagramLogo} alt="" />
          Sign Up
        </SignUpHeader>

        <SignUpFormContainer isdisabled={disabledBtn}>

          <UserNameSymbol />
          <UserNameInput type="text" name="name" placeholder="Username" onChange={(e) => { setUserName(e.target.value); }} >
          </UserNameInput>

          <UserNameCheck color={usernameAvailabilityColor}>{usernameAvailability}</UserNameCheck>


          <img src={GoogleLogo} alt="" />
          {!IsAuthentication && (
            <SignUpWithGoogleButton isdisabled={disabledBtn} onClick={signInWithGoogle} disabled={disabledBtn}>Sign up with Google</SignUpWithGoogleButton>
          )}

          <h4 >Already signed up?</h4>

        </SignUpFormContainer>

        <LoginButton onClick={signInWithGoogle}>
          <p> Login</p>
        </LoginButton>


      </SignUpContainer>
    </Container>
  );
};


