const API_URL = 'https://botw-compendium.herokuapp.com/api/v2/category/equipment';

getEquipments = (url) => {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

main = () => {
    equipments = getEquipments(API_URL);
    equipments_data = JSON.parse(equipments)
    Array.from(equipments_data.data).forEach((item) => {

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

main();
