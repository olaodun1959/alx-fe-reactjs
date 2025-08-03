import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

/**
 * Fetch GitHub user data by username.
 * @param {string} username
 * @returns {Promise<Object>}
 */
export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/${username}`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
  });
  return response.data;
};
