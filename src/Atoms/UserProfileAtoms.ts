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

export const UserProfileDataAtom = atom<any>({
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

export const FollowListDataAtom = atom<any>({
  key: "FollowListDataState",
  default: [],
});

export const CurrentUserFollowingListAtom = atom<any>({
  key: "CurrentUserFollowingListState",
  default: [],
});

export const CurrentUserFollowerListAtom = atom<any>({
  key: "CurrentUserFollowerListState",
  default: [],
});
