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

export const FollowListDisplayAtom = atom<boolean>({
  key: "DisplayFollowState",
  default: false,
});

export const FollowListDisplayTab = atom<string>({
  key: "DisplayFollowTabState",
  default: "following",
});
