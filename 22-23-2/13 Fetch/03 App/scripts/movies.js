function fetchke(celnev, fuggveny, json = true){
    if(json) fetch(celnev).then(v => v.json()).then(e => fuggveny(e))
    else     fetch(celnev).then(v => v.text()).then(e => fuggveny(e))
}

const moviesTable = document.querySelector('#subpage-movies-table')
const movieTitleInput = document.querySelector('#movie-title-input')
const movieReleaseInput = document.querySelector('#movie-release-input')
const movieAddButton = document.querySelector('#movie-add-btn')

function refreshMoviesTable(){
    fetchke('request_movies.php?page=0&pagesize=10', movies => {
        moviesTable.innerHTML = `
            <tr>
                <th>Title</th>
                <th>Release</th>
                <th class="loggedin">Edit</th>
                <th class="loggedin">Delete</th>
            </tr>`
        for(const id in movies){
            moviesTable.innerHTML += `
                <tr>
                    <td>${movies[id].title}</td>
                    <td>${movies[id].release}</td>
                    <th class="loggedin"><a href="edit.php?id=${id}">✏️</a></th>
                    <th class="loggedin"><a href="request_delete.php?id=${id}">🚯</a></th>
                </tr>
            `
        }
    })
}

movieAddButton?.addEventListener('click', event => {
    fetchke(
        `request_newmovie.php?title=${movieTitleInput.value}&release=${movieReleaseInput.value}`,
        response => {
            if(response == 'OK'){
                movieTitleInput.value = ''
                movieReleaseInput.value = ''
                refreshMoviesTable()
            }else{
                console.log(response)
            }
        },
        false)
})

refreshMoviesTable();