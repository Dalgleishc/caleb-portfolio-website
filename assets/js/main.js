const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const displayGitHubData = async () => {
    const githubUrl = 'https://api.github.com/users/dalgleishc';
    const data = await fetchData(githubUrl);

    // Update your website content using the fetched data
};

const displayLinkedInData = async () => {
    // Make sure you follow LinkedIn's API documentation and register your app to get access
    const linkedInUrl = 'https://api.linkedin.com/v2/me';
    const data = await fetchData(linkedInUrl);

    // Update your website content using the fetched data
};

displayGitHubData();
displayLinkedInData();

