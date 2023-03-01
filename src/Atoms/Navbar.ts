import { atom } from "recoil";

export const HomePageIconAtom = atom<boolean>({
  key: "HomePageIconState",
  default: true,
});

export const ProfilePageIconAtom = atom<boolean>({
  key: "ProfilePageIconState",
  default: false,
});
