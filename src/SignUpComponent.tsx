import "./App.css";
import { authenticationAtom } from "./Atoms/AuthenticationAtom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./Firebase/FirebaseConfig";
import { useRecoilState } from "recoil";

const SighUpComponent = () => {
  const [IsAuthentication, setAuthentication] =
    useRecoilState(authenticationAtom);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setAuthentication(true);

        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name || "");
        localStorage.setItem("email", email || "");
        localStorage.setItem("profilePic", profilePic || "");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOutOfGoogle = () => {
    signOut(auth)


      .then(() => {
        setAuthentication(false);
        localStorage.clear();
      })
      .catch((error) => { });
  };

  return (
    <div className="App">
      {!IsAuthentication && (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
      {IsAuthentication && (
        <button onClick={signOutOfGoogle}>Sign out with Google</button>
      )}
      <h1>{localStorage.getItem("name")}</h1>
      <img src={localStorage.getItem("profilePic") || ""} />
    </div>
  );
};

export default SighUpComponent;
