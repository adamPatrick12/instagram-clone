interface UserComment {
  userComment: String;
  postID: String | undefined;
  profilePicture: String;
  userName: String | null | undefined;
}

export const PostComment = async (userComment: UserComment) => {
  await fetch("http://localhost:3030/instagram-clone/post-comment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userComment),
  }).catch((error) => {
    console.log(error);
    return;
  });
};
