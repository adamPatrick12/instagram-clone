
import {
  authenticationAtom,
  userNameAtom,
  displayNameAtom,
  emailAtom,
  disabledButtonAtom,
  profilePictureAtom,
  uuidAtom
} from "../Atoms/AuthenticationAtom";

import { signInWithPopup, signOut, } from "firebase/auth";
import { auth, provider } from "../Firebase/FirebaseConfig";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import {
  Container,
  SignUpContainer,
  SignUpHeader,
  SignUpFormContainer,
  UserNameInput,
  UserNameSymbol,
  SignUpWithGoogleButton,
  LoginButton
} from "../Styles/SignUpPage/PageContainer";

import InstagramLogo from "../Images/instagram-logo.png";
import GoogleLogo from '../Images/google-logo.png';
import { useNavigate } from "react-router";

export const SighUpComponent = () => {
  const [IsAuthentication, setAuthentication] = useRecoilState(authenticationAtom);
  const [userName, setUserName] = useRecoilState(userNameAtom);
  const setdisplayName = useSetRecoilState(displayNameAtom);
  const setEmail = useSetRecoilState(emailAtom);
  const [disabledBtn, seteDisabledBtn] = useRecoilState(disabledButtonAtom);
  const setProfilePicture = useSetRecoilState(profilePictureAtom);
  const setUniqueIdentifier = useSetRecoilState(uuidAtom);



  // TODO: Figure out why photo isn't displaying

  const navigate = useNavigate();

  const signOutOfGoogle = () => {
    signOut(auth)
      .then(() => {
        setAuthentication(false);
        localStorage.clear();
      })
      .catch((error) => { });
  };

  const Authentication = async (userData: any) => {

    await fetch("http://localhost:3030/instagram-clone/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),


    })
      .catch(error => {
        console.log(error);

        return;
      });
  };

  const signInWithGoogle = async () => {


    signInWithPopup(auth, provider)
      .then((result) => {


        const userData = {
          userID: result.user.uid,
          userName: userName,
          displayName: result.user.displayName,
          email: result.user.email,
          profilePicture: result.user.photoURL,
        };



        Authentication(userData);

        navigate("/user-feed");

        setProfilePicture(result.user.photoURL);
        setdisplayName(result.user.displayName);
        setEmail(result.user.email);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (userName.length > 2) {
      seteDisabledBtn(false);
    }
    else {
      seteDisabledBtn(true);
    }
  }, [userName]);

  useEffect(() => {
    console.log(auth.currentUser);

  }, [IsAuthentication]);


  return (
    <Container>
      <SignUpContainer>
        <SignUpHeader>
          <img src={InstagramLogo} alt="" />
          Sign Up
        </SignUpHeader>

        <SignUpFormContainer isDisabled={disabledBtn}>

          <UserNameSymbol />
          <UserNameInput type="text" name="name" placeholder="Username" onChange={(e) => { setUserName(e.target.value); }} >
          </UserNameInput>

          <h6>Name must be 3-15 characters.</h6>


          <img src={GoogleLogo} alt="" />
          {!IsAuthentication && (
            <SignUpWithGoogleButton isDisabled={disabledBtn} onClick={signInWithGoogle} disabled={disabledBtn}>Sign up with Google</SignUpWithGoogleButton>
          )}
          {true && (
            <button onClick={signOutOfGoogle}>Sign out with Google</button>
          )}

          <h4>Already signed up?</h4>

        </SignUpFormContainer>

        <LoginButton>
          <p> Login</p>
        </LoginButton>


      </SignUpContainer>
    </Container>
  );
};


