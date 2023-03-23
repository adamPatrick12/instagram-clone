import { atom, RecoilValue } from "recoil";

export const UserPostsCount = atom<[]>({
  key: "UserPostsState",
  default: [],
});

export const UserProfileDataAtom = atom<any[]>({
  key: "UserProfileState",
  default: [],
});
