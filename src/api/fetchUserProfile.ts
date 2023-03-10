export const fetchUserProfile = async (profileID: any) => {
  const response = await fetch(
    `http://localhost:3030/instagram-clone/user-profile/${profileID}`
  );
  const data = response.json();
  return data;
};
