const loadReposButton = document.querySelector('#loadRepos');
const deleteReposCacheButton = document.querySelector('#deleteRepos')

const fetchWithAuthorization = async (url) => fetch(url, {
    method: 'get',
    headers: new Headers({
        Authorization: "Basic TWFyY2luUGlldGtpZXdpY3o6YjAyZmE1NTZlYmNkNmRmMzI3MzgyODE3ZmM0MjBjNTI5ZTllMWFiYg==",
        'Content-Type': 'application/x-www-form-urlencoded'
    })
})
    .then(response => { const data = response.json(); console.log(data); return data; })


const getAllRepos = async () => {
    const response = await Promise.all([fetchWithAuthorization("https://api.github.com/orgs/angular/repos?per_page=100&page=1"),
    fetchWithAuthorization("https://api.github.com/orgs/angular/repos?per_page=100&page=2")])
        .then(response => response.flat())
    return data = await response;
}

loadReposButton.addEventListener('click', () => {
    if (localStorage.getItem('AnguRepos') === null) {
        getAllRepos()
            .then(data => data.map(item => item.contributors_url))
            .then(data => { localStorage.setItem('AnguRepos', data); return data })
            .then(data => { console.log("localStorage object 'AnguRepos' succesffuly written", data); return data; })
            .catch(err => console.log('github data fetch unsuccessful - ', err))
    }
    else {
        console.log('Angular repositories data is already fetched and in local storage:');
        let data = localStorage.getItem('AnguRepos');
        console.log(data)
        return data;
    }
});


deleteReposCacheButton.addEventListener('click', () => {
    if (localStorage.getItem('AnguRepos') !== null) {
        localStorage.removeItem('AnguRepos');
        console.log('Removed cache of Angular repos')
    }
    else {
        console.log('Angular repos cache already removed!')
    }
})