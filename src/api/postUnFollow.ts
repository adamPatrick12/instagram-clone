interface followInfoType {
  currentUser: string;
  userToUpdate: string | undefined;
}

export const postUnFollow = async (followInfo: followInfoType) => {
  await fetch(
    "https://instagram-clone-backend-pi.vercel.app/instagram-clone/unfollow-user",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(followInfo),
    }
  ).catch((error) => {
    if (error) {
      console.log(error);
    }
  });
};
