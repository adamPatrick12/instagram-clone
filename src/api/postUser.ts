export const Authentication = async (userData: any) => {
  await fetch(
    "https://instagram-clone-backend-pi.vercel.app/instagram-clone/sign-up",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  ).catch((error) => {
    console.log(error);
    return;
  });
};
