const loadReposButton = document.querySelector('button');

const getAllRepos = async () => {
    console.log('getting all repos list...');
    const response = await fetch('https://api.github.com/orgs/angular/repos?per_page=100')
    const data = await response.json();
    return data;
}

loadReposButton.addEventListener('click', () => {
    if (localStorage.getItem('AnguRepos') === null) {
        const repos = getAllRepos()
            .then(data => data.map(item => item.contributors_url))
            .then(data => localStorage.setItem('AnguRepos', data))
            .then(console.log('localStorage object succesffuly written'))
            .catch(err => console.log('github data fetch unsuccessful - ', err))

    }
    else {
        console.log('Angular repositories data is already fetched and in local storage:')
        const repos = localStorage.getItem('AnguRepos')
        console.log(repos);
    }

});

const getAllRepoContributors = async (repo) => {
    console.log(`getting all contributors for ${repo}`)
}