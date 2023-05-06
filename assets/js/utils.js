export const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


// The utils.js file exports the fetchData function for reuse in main.js. 
// Remember to replace 'your_username' with your actual GitHub username, and set up
// proper OAuth2 authentication for the LinkedIn API.s