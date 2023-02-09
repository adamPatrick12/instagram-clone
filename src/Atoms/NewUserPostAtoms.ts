import { atom } from "recoil";

export const userPostImageFileAtom = atom<any>({
  key: "userImageState",
  default: "",
});

export const userPostCaptionAtom = atom<string>({
  key: "userCaptionState",
  default: "",
});
