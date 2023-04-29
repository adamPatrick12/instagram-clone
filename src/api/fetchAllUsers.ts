export const fetchAllUsers = async () => {
  const data = await fetch(
    "https://instagram-clone-backend-pi.vercel.app/instagram-clone/all-users"
  );
  const users = await data.json();
  return users;
};
