import { atom } from "recoil";

export const authenticationAtom = atom({
  key: "signInState",
  default: false,
});
