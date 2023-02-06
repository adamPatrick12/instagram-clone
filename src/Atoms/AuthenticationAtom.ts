import { atom } from "recoil";
import { RecoilEnv } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const authenticationAtom = atom<boolean>({
  key: "signInState",
  default: false,
});

export const userNameAtom = atom({
  key: "userNameState",
  default: "",
  effects_UNSTABLE: [
    ({ onSet, setSelf }) => {
      const storedUsername = localStorage.getItem("Username");

      if (storedUsername != null) {
        setSelf(JSON.parse(storedUsername));
      }

      onSet((newUserName) => {
        localStorage.setItem("Username", JSON.stringify(newUserName));
      });
    },
  ],
});

export const displayNameAtom = atom<string | null>({
  key: "displayNameState",
  default: "",
  effects_UNSTABLE: [
    ({ onSet, setSelf }) => {
      const storedDisplayName = localStorage.getItem("DisplayName");

      if (storedDisplayName != null) {
        setSelf(JSON.parse(storedDisplayName));
      }

      onSet((newDisplayName) => {
        localStorage.setItem("DisplayName", JSON.stringify(newDisplayName));
      });
    },
  ],
});

export const emailAtom = atom<string | "" | null>({
  key: "emailState",
  default: "",
});

export const disabledButtonAtom = atom<boolean>({
  key: "disabledButtonState",
  default: true,
});

export const profilePictureAtom = atom<any>({
  key: "profilePicAtom",
  default: "",
  effects_UNSTABLE: [
    ({ onSet, setSelf }) => {
      const storedProfilePicture = localStorage.getItem("ProfilePicture");

      if (storedProfilePicture != null) {
        setSelf(JSON.parse(storedProfilePicture));
      }

      onSet((newProfilePicture) => {
        localStorage.setItem(
          "ProfilePicture",
          JSON.stringify(newProfilePicture)
        );
      });
    },
  ],
});
