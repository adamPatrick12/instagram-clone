interface followInfoType {
  currentUser: string;
  userToUpdate: string | undefined;
}

export const postFollow = async (followInfo: any) => {
  await fetch("http://localhost:3030/instagram-clone/follow-user", {
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
