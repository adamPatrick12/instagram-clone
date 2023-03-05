export const fetchSingleUserPost = async (postID: any) => {
  const response = await fetch(
    `http://localhost:3030/instagram-clone/user-post/${postID}`
  );
  const data = response.json();
  console.log(data);
  return data;
};
