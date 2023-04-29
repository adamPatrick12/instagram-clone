import { atom } from "recoil";

export const HomePageIconAtom = atom<boolean>({
  key: "HomePageIconState",
  default: true,
});

export const ProfilePageIconAtom = atom<boolean>({
  key: "ProfilePageIconState",
  default: false,
});

export const DisplaySearchResultsAtom = atom<boolean>({
  key: "DisplaySearchResultsState",
  default: false,
});
