var EQUIPMENTS_URL = 'https://botw-compendium.herokuapp.com/api/v2/category/equipment';

fetchAPI = (url) => {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

getEquipamentos = () => {
    App = fetchAPI(EQUIPMENTS_URL);
    App_data = JSON.parse(App);
    Array.from(App_data.data).forEach((item) => {

        // Cria os elementos
        let Container = document.createElement('div');
        let Nome = document.createElement('h2');
        let IMG = document.createElement('img');
        let Descriçao = document.createElement('p');
        let Stats = document.createElement('ul');
        let StatsAtaque = document.createElement('li')
        let StatsDefesa = document.createElement('li');

        // Define o conteúdo dos elementos consumindo a API.
        Nome.innerHTML = item.name;
        IMG.src = item.image;
        Descriçao.innerHTML = item.description
        Stats.innerHTML = 'Stats'
        StatsAtaque.innerHTML = `Attack: ${item.attack}`
        StatsDefesa.innerHTML = `Defense: ${item.defense}`

        // Adiciona os elementos dentro da div.
        Stats.appendChild(StatsAtaque);
        Stats.appendChild(StatsDefesa);
        Container.appendChild(Nome);
        Container.appendChild(IMG);
        Container.appendChild(Descriçao);
        Container.appendChild(Stats);

        // Adiciona as classes aos elementos.
        Container.classList.add('item');
        Nome.classList.add('nome');
        IMG.classList.add('imagem');
        Descriçao.classList.add('descriçao');
        
        // Renderiza a div com os elementos.
        document.getElementsByClassName('flex-wrapper')[0].appendChild(Container);
    })
}

getEquipamentos();

// scroll to top 

const scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (pageYOffset > 340) {
        scrollTop.classList.add('show')
    } else {
        scrollTop.classList.remove('show')
    }
})

scrollTop.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"});
})