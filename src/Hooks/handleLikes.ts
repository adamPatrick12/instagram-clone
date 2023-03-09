import { PostLike } from "../api/postLike";
import { PostUnLike } from "../api/postUnLike";

export const handleLikeClick = (postID: string, userObjectID: string) => {
  const userLikeData = {
    postID: postID,
    userID: userObjectID,
  };

  PostLike(userLikeData);
};

export const handleUnLikeClick = (postID: string, userObjectID: string) => {
  const userLikeData = {
    postID: postID,
    userID: userObjectID,
  };

  PostUnLike(userLikeData);
};
