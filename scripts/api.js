async function displayRepos(data) {
    const gitData= data;
    const div = document.querySelector('#repository');

    gitData.forEach(repo => {
        const titleRepo = document.createElement('h1');
        const linkRepo = document.createElement('a');

        titleRepo.innerText = repo.name;
        linkRepo.innerText = "Link para repositorio";

        linkRepo.setAttribute('href', repo.html_url);
        linkRepo.setAttribute('target', '_blanck');

        div.appendChild(titleRepo);
        div.appendChild(linkRepo);
    });
}

async function getAPI(){
    try {
        const response = await fetch('https://api.github.com/users/CauaGNP/repos')
            if(!response.ok){
                alert(`erro no servidor ${a}`);
            };
        const data = await response.json();
        displayRepos(data);

    } catch (error) {
        
    }
}

window.onload = getAPI();