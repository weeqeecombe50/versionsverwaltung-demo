document.getElementById('loadCommits').addEventListener('click', function() {
    const repoUrl = document.getElementById('repoUrl').value;
    // Hier logik hinzufügen, um Commits von GitHub API zu laden und zu visualisieren.
    // Dies könnte ein Fetch-Request zur GitHub API sein.
    console.log(`Lade Commits für: ${repoUrl}`);
    // Fetch request to get commits from GitHub API
    fetch(`https://api.github.com/repos/${repoUrl}/commits`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Netzwerkantwort war nicht ok');
            }
            return response.json();
        })
        .then(commits => {
            // Hier logik hinzufügen, um Commits anzuzeigen.
            console.log(commits);
        })
        .catch(error => {
            console.error('Es gab ein Problem mit fetch operation:', error);
        });
});