import axios from 'axios';

const BASE_URL = 'https://api.github.com';

/**
 * Fetch GitHub user data by username.
 * @param {string} username - GitHub username to search.
 * @returns {Promise<Object>} - GitHub user profile data.
 */
export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
};
