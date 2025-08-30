document.getElementById('loadCommits').addEventListener('click', function() {
    const repoUrl = document.getElementById('repoUrl').value;
    // Fetch-Request zur GitHub API durchführen, um die Commits zu laden.
    console.log(`Lade Commits für: ${repoUrl}`);
    // Fetch request to get commits from GitHub API
    fetch(`https://api.github.com/repos/${repoUrl}/commits`)
        .then(response => {
            // Überprüfen, ob die Antwort ok ist
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
            // Fehlerbehandlung bei Fetch Operation
            console.error('Es gab ein Problem mit fetch operation:', error);
        });
});