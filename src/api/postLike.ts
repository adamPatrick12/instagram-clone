export const PostLike = async (userLikeData: any) => {
  await fetch(
    "https://instagram-clone-backend-pi.vercel.app/instagram-clone/like-post",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLikeData),
    }
  ).catch((error) => {
    console.log(error);
    return;
  });
};
