import { atom } from "recoil";

export const UserFeedAtom = atom<[]>({
  key: "userImageState",
  default: [],
});

export const PostIdAtom = atom<string>({
  key: "postIdState",
  default: "",
});

export const UserCommentAtom = atom<string>({
  key: "userCommentState",
  default: "",
});

export const UpdateCommentSectionAtom = atom<boolean>({
  key: "UpdateCommentState",
  default: false,
});
