interface followInfoType {
  currentUser: string;
  userToUpdate: string | undefined;
}

export const postUnFollow = (followInfo: followInfoType) => {
  fetch("http://localhost:3030/instagram-clone/unfollow-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(followInfo),
  }).catch((error) => {
    if (error) {
      console.log(error);
    }
  });
};