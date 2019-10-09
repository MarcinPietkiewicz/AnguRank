const loadReposButton = document.querySelector('button');

loadReposButton.addEventListener('click', () => {
    getAllRepos()
        .then(data => data.map(item => item.contributors_url))
        .then(set => console.log(set))
});

const getAllRepos = async () => {
    console.log('getting all repos list');
    const response = await fetch('https://api.github.com/orgs/angular/repos?per_page=100')
    const data = await response.json();
    return data;
}

// var req = new XMLHttpRequest();
// req.open('GET', 'https://api.github.com/orgs/angular/repos')
