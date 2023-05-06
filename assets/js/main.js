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

// Fetch and display LinkedIn data (Note: LinkedIn API requires OAuth2 for authentication)
// This is just a basic example, you will need to properly set up OAuth2 authentication and permissions.
const displayLinkedInData = async () => {
    // const accessToken = 'access_token';
    // const linkedInUrl = 'https://api.linkedin.com/v2/me?oauth2_access_token=' + accessToken;
    // const data = await fetchData(linkedInUrl);

    // Update your website content using the fetched data
    // document.querySelector('#linkedin-username').textContent = data.localizedFirstName + ' ' + data.localizedLastName;
    // document.querySelector('#linkedin-profile-link').href = data.vanityName;
};

// Initialize the website
const init = async () => {
    await displayGitHubData();
    await displayLinkedInData();
};

init();
