import { atom } from "recoil";

export const UserPostsCount = atom<[]>({
  key: "UserPostsState",
  default: [],
});
