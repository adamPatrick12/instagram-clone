import { fetchUsernames } from "../api/fetchUsernames";

interface User {
  userName: string;
  email: string;
}

export const activeUsernames = async () => {
  const usernamesInUse: string[] = [];

  const fetchActiveUsernames = await fetchUsernames();

  fetchActiveUsernames.map((data: User) => {
    usernamesInUse.push(data.userName);
  });

  return usernamesInUse;
};

export const activeEmails = async () => {
  const emailsInUse: string[] = [];

  const fetchActiveUsernames = await fetchUsernames();

  fetchActiveUsernames.map((data: User) => {
    emailsInUse.push(data.email);
  });

  return emailsInUse;
};
