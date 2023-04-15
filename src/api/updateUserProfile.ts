export const updateProfile = async (profileInfo: any) => {
  await fetch("http://localhost:3030/instagram-clone/update-profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profileInfo),
  });
};
