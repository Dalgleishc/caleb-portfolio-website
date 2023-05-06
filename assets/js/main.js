import { fetchData } from './utils.js';

// Fetch and display GitHub data
const displayGitHubData = async () => {
    const githubUrl = 'https://api.github.com/users/dalgleishc';
    const data = await fetchData(githubUrl);

    // Update your website content using the fetched data
    document.querySelector('#github-username').textContent = data.login;
    document.querySelector('#github-profile-link').href = data.html_url;
    document.querySelector('#github-avatar').src = data.avatar_url;
    document.querySelector('#github-repo-count').textContent = data.public_repos;
};

// Initialize the website
const init = async () => {
    await displayGitHubData();
};

init();
