export const fetchAllUsers = async () => {
  const data = await fetch("http://localhost:3030/instagram-clone/all-users");
  const users = await data.json();

  return users;
};
