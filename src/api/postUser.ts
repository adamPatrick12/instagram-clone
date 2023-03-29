export const Authentication = async (userData: any) => {
  await fetch("http://localhost:3030/instagram-clone/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).catch((error) => {
    console.log(error);
    return;
  });
};
