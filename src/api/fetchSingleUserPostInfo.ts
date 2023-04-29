export const fetchSingleUserPost = async (postID: any) => {
  const response = await fetch(
    `https://instagram-clone-backend-pi.vercel.app/instagram-clone/user-post/${postID}`
  );
  const data = await response.json();
  return await data;
};
