export const fetchUserProfile = async (profileID: any) => {
  const response = await fetch(
    `https://instagram-clone-backend-pi.vercel.app/instagram-clone/user-profile/${profileID}`
  );
  const data = response.json();
  return data;
};
