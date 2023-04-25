export const PostUnLike = async (userLikeData: any) => {
  await fetch(
    "https://instagram-clone-backend-pi.vercel.app/instagram-clone/unlike-post",
    {
      method: "POST",
      mode: "cors",
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
