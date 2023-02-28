export const fetchUsernames = async () => {
  const response = await fetch(
    "http://localhost:3030/instagram-clone/usernames"
  );
  const data = response.json();
  return data;
};
