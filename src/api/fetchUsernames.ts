export const fetchUsernames = async () => {
  const response = await fetch(
    "https://instagram-clone-backend-pi.vercel.app/instagram-clone/usernames"
  );
  const data = response.json();
  return data;
};
