import { PostLike } from "../api/postLike";
import { PostUnLike } from "../api/postUnLike";

export const handleLikeClick = async (
  postID: string | undefined,
  userObjectID: string
) => {
  const userLikeData = {
    postID: postID,
    userID: userObjectID,
  };

  await PostLike(userLikeData);
};

export const handleUnLikeClick = async (
  postID: string | undefined,
  userObjectID: string
) => {
  const userLikeData = {
    postID: postID,
    userID: userObjectID,
  };

  await PostUnLike(userLikeData);
};
