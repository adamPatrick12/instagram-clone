export const PostLike = async (userLikeData: any) => {
  await fetch("http://localhost:3030/instagram-clone/like-post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userLikeData),
  }).catch((error) => {
    console.log(error);
    return;
  });
};
