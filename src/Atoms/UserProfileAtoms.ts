import { atom, RecoilValue } from "recoil";

export const UserPostsCount = atom<[]>({
  key: "UserPostsState",
  default: [],
});

export const UserFollowerCount = atom<[]>({
  key: "UserFollowerState",
  default: [],
});

export const UserFollowingCount = atom<[]>({
  key: "UserFollowingState",
  default: [],
});

export const UserProfileDataAtom = atom<any[]>({
  key: "UserProfileState",
  default: [],
});
