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
});

export const displayNameAtom = atom<string | null | undefined>({
  key: "displayNameState",
  default: "",
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
});
