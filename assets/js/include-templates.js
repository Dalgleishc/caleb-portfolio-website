document.addEventListener('DOMContentLoaded', function () {
    includeHTML("header-placeholder", "templates/header.html");
    includeHTML("footer-placeholder", "templates/footer.html");
});

function includeHTML(placeholderId, filePath) {
    const element = document.getElementById(placeholderId);
    if (element) {
        fetch(filePath)
            .then(response => {
                if (response.status === 200) {
                    return response.text();
                } else {
                    throw new Error(`Could not load ${filePath}`);
                }
            })
            .then(content => {
                element.innerHTML = content;
            })
            .catch(error => {
                console.error(`Error: ${error.message}`);
            });
    }
}
