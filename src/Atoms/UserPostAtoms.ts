import { atom } from "recoil";

export const UserFeedAtom = atom<[]>({
  key: "userImageState",
  default: [],
});
