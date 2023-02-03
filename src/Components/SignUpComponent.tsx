import { authenticationAtom, userNameAtom, displayNameAtom, emailAtom } from "../Atoms/AuthenticationAtom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../Firebase/FirebaseConfig";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import {
  Container,
  SignUpContainer,
  SignUpHeader,
  SignUpFormContainer,
  UserNameInput,
  UserNameSymbol,
  LogInWithGoogleButton
} from "../Styles/SignUpPage/PageContainer";

import InstagramLogo from "../Images/instagram-logo.png";
import { MdOutlineAlternateEmail } from 'react-icons/md';

const SighUpComponent = () => {
  const [IsAuthentication, setAuthentication] = useRecoilState(authenticationAtom);
  const [userName, setUserName] = useRecoilState(userNameAtom);
  const [displayName, setdisplayName] = useRecoilState(displayNameAtom);
  const [email, setemail] = useRecoilState(emailAtom);

  // TODO: Figure out why photo isn't displaying
  // TODO: Why user gets 'logged out on refresh'

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
        setAuthentication(true);

        const userData = {
          userName: userName,
          displayName: result.user.displayName,
          email: result.user.email
        };

        const profilePic = result.user.photoURL;

        localStorage.setItem("name", displayName || "");
        localStorage.setItem("email", email || "");
        localStorage.setItem("profilePic", profilePic || "");

        Authentication(userData);

        setdisplayName(result.user.displayName);
        setemail(result.user.email);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const userData = {
      userName: userName,
      displayName: displayName,
      email: email
    };


    console.log(JSON.stringify(userData));

  }, [userName]);

  return (
    <Container>
      <SignUpContainer>
        <SignUpHeader>
          <img src={InstagramLogo} alt="" />
          Sign Up
        </SignUpHeader>

        <SignUpFormContainer>

          <UserNameSymbol />
          <UserNameInput type="text" name="name" placeholder="Username" onChange={(e) => { setUserName(e.target.value); }} >
          </UserNameInput>

          <h6>Name must be 3-15 characters.</h6>



          {!IsAuthentication && (
            <LogInWithGoogleButton onClick={signInWithGoogle}>Sign in with Google</LogInWithGoogleButton>
          )}
          {IsAuthentication && (
            <button onClick={signOutOfGoogle}>Sign out with Google</button>
          )}
          <h1>{localStorage.getItem("name")}</h1>å
          <h1>{localStorage.getItem("email")}</h1>
          <img src={localStorage.getItem("profilePic") || ""} />


        </SignUpFormContainer>



      </SignUpContainer>
    </Container>
  );
};

export default SighUpComponent;
